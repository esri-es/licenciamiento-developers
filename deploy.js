var exec = require('child_process').exec;

cmd = "node node_modules/doctoc/doctoc.js --title '**Tabla de contenidos**' .";
exec(cmd, function(error, stdout, stderr) {
  console.log("Updating tables of contents: ",stdout);
});