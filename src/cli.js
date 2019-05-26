const { exec } = require('child_process');
export function cli(args){
    var fs = require('fs');
    var cmdExecuted=false;
    try {
        console.log("---- READ CONFIG ----");
        var filename = 'pjconfig.json';
        var config = JSON.parse(fs.readFileSync(filename));
        console.log("---- END CONFIG ----");
        for (const command of config.commands) {
            if(args.find((elemento)=> { return elemento === command.name;})===command.name){
                run(command);
            }
        }
    } catch (error) {
        console.log('leggere la configurazione:' + error);
    }
    
    function run(command){
        console.log(command);
        if(command.cmd){
            runCmd(command.cmd);
        } else {
            if(command.options){
                for (const option of command.options) {
                    if(!option.name){
                        runCmd(option.cmd);
                    }else{
                        if(args.find((elemento)=> { return elemento === option.name;})===option.name){
                            runCmd(option.cmd);
                        }
                    }
                }
            }
        }
        if(command.commands){
            for (const command of config.commands) {
                if(args[command.name]){
                    runCmd(command);
                }    
            }   
        }
    }
    
    function runCmd(cmd){
        cmdExecuted=true; 
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                console.log(`---- ERRORE COMANDO (${command}) ----`) ;
                console.log(stderr);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log("---- finish command ---");
        });
    }
}
