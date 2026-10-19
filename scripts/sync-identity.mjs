import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const repo='RoyWG925/builder-context';
const root=new URL('../',import.meta.url);
async function put(path,content){await mkdir(new URL(path+'/../',root),{recursive:true});await writeFile(new URL(path,root),content);}
const local=process.env.IDENTITY_SOURCE_DIR;
if(process.env.IDENTITY_OFFLINE==='1'&&!local){await readFile(new URL('src/data/identity.json',root));console.log('Using the committed public snapshot (explicit offline mode).');process.exit(0);}
let sha=process.env.IDENTITY_SOURCE_COMMIT||'local';
if(!local){
  const response=await fetch(`https://api.github.com/repos/${repo}/commits/main`,{headers:process.env.GH_TOKEN?{Authorization:`Bearer ${process.env.GH_TOKEN}`}:{},signal:AbortSignal.timeout(30000)});
  if(!response.ok)throw Error(`Identity source lookup failed: ${response.status}`);
  sha=(await response.json()).sha;
  if(!/^[a-f0-9]{40}$/.test(sha))throw Error('Invalid immutable source commit');
}
async function source(path){
  if(local)return readFile(new URL(path,new URL('file:///'+local.replaceAll('\\','/').replace(/\/$/,'')+'/')),'utf8');
  const response=await fetch(`https://raw.githubusercontent.com/${repo}/${sha}/${path}`,{signal:AbortSignal.timeout(30000)});
  if(!response.ok)throw Error(`Identity source file failed: ${path}: ${response.status}`);
  return response.text();
}
const [raw,html,context]=await Promise.all([source('generated/public.json'),source('generated/resume.html'),source('AI_CONTEXT.md')]);
const bundle=JSON.parse(raw),{revision,...payload}=bundle;
if(bundle.schemaVersion!==1||createHash('sha256').update(JSON.stringify(payload)).digest('hex')!==revision)throw Error('Identity bundle content hash mismatch');
if(bundle.profile?.github!=='RoyWG925'||bundle.profile.visibility!=='public'||bundle.projects.some(p=>p.visibility!=='public'||!['owner-confirmed','published-baseline'].includes(p.review?.state)))throw Error('Private or unconfirmed data rejected');
if(!html.includes(revision.slice(0,12))||!context.includes(revision))throw Error('Mixed source revisions');
await put('src/data/identity.json',raw);await put('public/identity.json',raw);await put('public/resume.html',html);await put('public/ai-context.md',context);
await put('public/identity-source.json',JSON.stringify({repository:repo,commit:sha,revision},null,2)+'\n');
await put('public/llms.txt',`# Roy Wang\nPublic professional context: https://roywg925.github.io/portfolio-astro/ai-context.md\nStructured public facts: https://roywg925.github.io/portfolio-astro/identity.json\nCanonical source: https://github.com/${repo}\nNew facts require Roy's confirmation. Do not infer roles, submission or awards.\n`);
console.log(`Synchronized public identity revision ${revision.slice(0,12)} from ${sha}.`);
