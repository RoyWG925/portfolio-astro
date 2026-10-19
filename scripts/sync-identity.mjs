import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve,join,dirname} from 'node:path';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const repo='RoyWG925/builder-context',digest=s=>createHash('sha256').update(s).digest('hex');
const targets={'generated/public.json':['src/data/identity.json','public/identity.json'],'generated/resume.html':['public/resume.html'],'AI_CONTEXT.md':['public/ai-context.md'],'generated/introductions.md':['public/introductions.md']};
export async function verifySnapshot(root){
  const receipt=JSON.parse(await readFile(join(root,'public/identity-source.json'),'utf8'));
  for(const [source,paths]of Object.entries(targets))for(const path of paths)if(digest(await readFile(join(root,path),'utf8'))!==receipt.files[source])throw Error(`Stale/mixed offline snapshot: ${path}`);
  return receipt;
}
export async function syncIdentity({root=fileURLToPath(new URL('../',import.meta.url)),local=process.env.IDENTITY_SOURCE_DIR,commit=process.env.IDENTITY_SOURCE_COMMIT,offline=process.env.IDENTITY_OFFLINE==='1'}={}){
  if(offline&&!local)return verifySnapshot(root);
  let sha=commit;
  if(!local&&!sha){const r=await fetch(`https://api.github.com/repos/${repo}/commits/main`,{headers:process.env.GH_TOKEN?{Authorization:`Bearer ${process.env.GH_TOKEN}`}:{},signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error(`Source lookup: ${r.status}`);sha=(await r.json()).sha;}
  if(!local&&!/^[a-f0-9]{40}$/.test(sha))throw Error('Immutable source commit required');
  async function get(path){if(local)return readFile(join(local,path),'utf8');const r=await fetch(`https://raw.githubusercontent.com/${repo}/${sha}/${path}`,{signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error(`Source ${path}: ${r.status}`);return r.text();}
  const manifest=JSON.parse(await get('generated/export-manifest.json')),contents=new Map();
  for(const path of Object.keys(targets)){const value=await get(path);if(digest(value)!==manifest.files[path])throw Error(`Export hash mismatch: ${path}`);contents.set(path,value);}
  const bundle=JSON.parse(contents.get('generated/public.json')),{revision,...payload}=bundle;
  if(bundle.schemaVersion!==1||digest(JSON.stringify(payload))!==revision||manifest.revision!==revision)throw Error('Bundle content revision mismatch');
  const accepted=['owner-confirmed','published-baseline','owner-attested'];
  if(bundle.profile?.github!=='RoyWG925'||[bundle.profile,...bundle.projects,...bundle.competitions].some(p=>p.visibility!=='public'||!accepted.includes(p.review?.state))||bundle.evidence.some(e=>e.visibility!=='public'))throw Error('Private or proposed material rejected');
  if(!contents.get('generated/resume.html').includes(revision)||!contents.get('AI_CONTEXT.md').includes(revision))throw Error('Mixed export revisions');
  async function put(path,value){await mkdir(dirname(join(root,path)),{recursive:true});await writeFile(join(root,path),value);}
  for(const [source,paths]of Object.entries(targets))for(const path of paths)await put(path,contents.get(source));
  const receipt={repository:repo,commit:sha??'isolated-fixture',revision,files:manifest.files};
  await put('public/identity-source.json',JSON.stringify(receipt,null,2)+'\n');
  await put('public/llms.txt',`# Roy Wang\nContext: https://roywg925.github.io/portfolio-astro/ai-context.md\nFacts: https://roywg925.github.io/portfolio-astro/identity.json\nIntroductions: https://roywg925.github.io/portfolio-astro/introductions.md\nCanonical: https://github.com/${repo}\nRevision: ${revision}\nNew facts require Roy’s personal review. No inferred awards, roles or traction.\n`);
  return receipt;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href)console.log(await syncIdentity());
