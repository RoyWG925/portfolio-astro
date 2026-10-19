import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {verifySnapshot} from './sync-identity.mjs';
const receipt=await verifySnapshot('.');
const pdf=await readFile('public/Roy_Wang_Resume.pdf');if(pdf.subarray(0,5).toString()!=='%PDF-')throw Error('Invalid PDF');
await writeFile('public/identity-build.json',JSON.stringify({...receipt,portfolioCommit:process.env.GITHUB_SHA??'local-validation',run:process.env.GITHUB_RUN_ID??null,pdfSha256:createHash('sha256').update(pdf).digest('hex')},null,2)+'\n');
