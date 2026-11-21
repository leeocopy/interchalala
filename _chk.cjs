const fs=require('fs');
let css; try{ css=require('lightningcss'); }catch(e){ console.log('no lightningcss'); process.exit() }
const code=fs.readFileSync('app/styles/prestoillico.css');
try{ const r=css.transform({filename:'p.css',code,errorRecovery:false,minify:true}); console.log('ok',r.code.length) }catch(e){ console.log(e.message, e.loc) }
