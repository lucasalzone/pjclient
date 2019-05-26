# `@luca.salzone/pjclient`

The Project Client is a command-line tool that you use to initialize, update and run any project.

## Installation & Usage

```bash
    npm install -g @luca.salzone/pjclient
```

Create project configuration

```json
{
    "commands":[
        {
            "name":"install",
            "options": [
                {
                    "name":"jaxrs",
                    "cmd":"mkdir jaxrs",
                    "commands":[
                        {
                            "options": [
                                { 
                                    "cmd":"git clone https://github.com/lucasalzone/jaxrs_example.git jaxrs",
                                    "commands":[
                                        {
                                            "options": [
                                                { "cmd":"mvn clean install -DskipTests -f jaxrs" }
                                            ],
                                            "stopOnError":true
                                        }                        
                                    ] 
                                }
                            ],
                            
                            "stopOnError":true
                        }                
                    ]
                }
            ],
            "stopOnError":true
        }
    ]
}

```

and run _pjclient_

```bash

    pjclient install jaxrs

```


## License

MIT

## Collaborators

- Luca Salzone <luca.salzone@gmail.com>
