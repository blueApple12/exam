const data=JSON.parse(document.getElementById('exam-data').textContent);
const key='codex-moedb-'+location.pathname, ed=document.getElementById('code'), select=document.getElementById('question'), result=document.getElementById('result');
let saved={};try{saved=JSON.parse(localStorage.getItem(key)||'{}');}catch{}
const persist=()=>{saved[select.value]=ed.value;try{localStorage.setItem(key,JSON.stringify(saved));}catch{}};
function choose(){ed.value=saved[select.value]??data.skeletons[select.value];document.getElementById('stdin').value=data.tests[select.value][0].stdin;result.textContent='';}
ed.addEventListener('input',persist);select.addEventListener('change',choose);choose();
ed.addEventListener('keydown',e=>{if(e.key==='Tab'){e.preventDefault();ed.setRangeText('    ',ed.selectionStart,ed.selectionEnd,'end');persist();}});
const endpoint='https://godbolt.org/api/compiler/cg132/compile';
const lines=a=>(a||[]).map(x=>x.text).join('\n');
async function gcc(source,stdin){
 const r=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({source,options:{userArguments:'-std=c99 -O0 -Wall -fno-diagnostics-color',executeParameters:{args:[],stdin},filters:{execute:true},compilerOptions:{executorRequest:true}}})});
 if(!r.ok)throw new Error('Compiler HTTP '+r.status);
 const j=await r.json();if((j.buildResult?.code??0)!==0)throw new Error(lines(j.buildResult.stderr));
 if(j.code!==0)throw new Error('Execution failed: '+j.code+'\n'+lines(j.stderr));
 return lines(j.stdout);
}
async function busy(action){document.querySelectorAll('button,select').forEach(x=>x.disabled=true);result.textContent='Running gcc 13.2…';try{await action();}catch(e){result.textContent=e.message;}finally{document.querySelectorAll('button,select').forEach(x=>x.disabled=false);}}
document.getElementById('run').onclick=()=>busy(async()=>{result.textContent=await gcc(ed.value,document.getElementById('stdin').value);});
document.getElementById('test').onclick=()=>busy(async()=>{
 const tests=data.tests[select.value],mark='___CODEX_CASE_END___';
 const src=ed.value.replace(/\bint\s+main\s*\(\s*(?:void)?\s*\)/,'int codex_student_main(void)');
 if(src===ed.value)throw new Error('Keep the supplied int main(void).');
 const harness=src+'\nint main(void){for(int i=0;i<'+tests.length+';i++){int r=codex_student_main();if(r)return r;puts("\\n'+mark+'");}return 0;}\n';
 const output=await gcc(harness,tests.map(t=>t.stdin).join('')),parts=output.split(mark);
 let pass=0;const messages=[];
 tests.forEach((t,i)=>{const got=(parts[i]??'').trim(),want=t.expect.trim();if(got===want){pass++;}else messages.push(t.name+' FAIL\nexpected: '+JSON.stringify(want)+'\ngot: '+JSON.stringify(got));});
 result.textContent=pass+'/'+tests.length+' passed (complete stdout)\n'+messages.join('\n')+'\nCheck complexity, immutability and recursive restrictions separately.';
});
document.getElementById('save').onclick=()=>{persist();const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([ed.value],{type:'text/plain'}));a.download='examB_'+select.value+'.c';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);};
document.getElementById('q1answers').textContent=data.q1.map((q,i)=>'abc'[i]+': '+q.time+' time; '+q.space+' space. '+q.why).join('\n\n');
