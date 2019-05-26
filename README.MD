# `@luca.salzone/pjclient`

The Project Client is a command-line tool that you use to initialize, update and run any project.

## Installation & Usage

```bash
    npm install -g @luca.salzone/pjclient
```

Create project configuration with commands

```json
{
    "commands":[
        {
            "name":"install",
            "options": [
                {
                    "name":"bl",
                    "cmd":"svn co <url-snv>"
                }
            ],
            "commands":[
                {
                    "name":"install",
                    "options": [
                        {
                            "cmd":"cd trunk"
                        }
                    ],
                    "commands":[
                        {
                            "name":"install",
                            "options": [
                                {
                                    "cmd":"mvn clean install"
                                }
                            ],
                            "stopOnError":true
                        }                        
                    ],
                    "stopOnError":true
                }                
            ],
            "stopOnError":true
        }
    ]
}

```

## License

MIT

## Collaborators

- Luca Salzone <luca.salzone@gmail.com>
