'use strict';
// Publish useful failure annotations as well as the complete runner log.
// Explicit TAP makes diagnostics consistent across Windows and Linux.
const {spawnSync}=require('node:child_process');
const result=spawnSync(process.execPath,['--test','--test-reporter=tap'],{encoding:'utf8',maxBuffer:16*1024*1024});
process.stdout.write(result.stdout||'');process.stderr.write(result.stderr||'');
if(result.status!==0){
 const lines=(result.stdout||'').split('\n');
 for(let i=0;i<lines.length;i++)if(/^not ok /.test(lines[i])){
  const context=lines.slice(i,i+35).join('\n').replace(/%/g,'%25').replace(/\r/g,'%0D').replace(/\n/g,'%0A');
  process.stdout.write('::error::'+context+'\n');
 }
 if(result.error)process.stdout.write('::error::Test runner could not start.\n');
}
process.exitCode=result.status??1;
