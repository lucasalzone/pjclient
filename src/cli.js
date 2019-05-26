const { exec } = require('child_process');
export function cli(args){
    var fs = require('fs');
    var cmdExecuted=false;
    try {
        var filename = 'pjconfig.json';
        var config = JSON.parse(fs.readFileSync(filename));
        for (const command of config.commands) {
            if(args.find((elemento)=> { return elemento === command.name;})===command.name){
                run(command);
            }
        }
    } catch (error) {
        console.error('no configuration found!!! ' + error);
    }
    
    function run(command){
        if(command.cmd){
            runCmd(command,command);
        } else {
            if(command.options){
                for (const option of command.options) {
                    if(!option.name){
                        runCmd(command, option);
                    }else{
                        if(args.find((elemento)=> { return elemento === option.name;})===option.name){
                            runCmd(command, option);
                        }
                    }
                }
            }
        }
    }
    
    function runCmd(command, cmd){
        cmdExecuted=true;
        console.log((new Date().toISOString()) + " >>> " + cmd.cmd);
        exec(cmd.cmd, (err, stdout, stderr) => {
            if (err) {
                console.error(stderr);
                console.error(err);
                return;
            }
            console.log(stdout);
            if(command.commands){
                for (const singleCommand of command.commands) {
                    run(singleCommand);    
                }   
            } else if (cmd.commands){
                for (const singleCommand of cmd.commands) {
                    run(singleCommand);    
                }
            }
        });
    }
}
