# [`pjclient`](https://www.npmjs.com/package/@luca.salzone/pjclient)

The Project Client is a command-line tool that you use to initialize, update and run any project.

## Installation & Usage

```bash
    npm install -g pjclient
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
               {"options": 
                [
                    {"cmd":"git clone https://github.com/lucasalzone/jaxrs_example.git jaxrs",
                    "commands":[
                      {"options": 
                        [
                          { "cmd":"mvn clean install -DskipTests -f jaxrs" }
                        ],
                      }                        
                    ] 
                    }
                ],
               }                
            ]
         }
        ],
        
        }
    ]
}

```
<br>

and run _pjclient_

<br>

```bash

    pjclient install jaxrs

```

<br>

With this configuration you

    - create a new folder
    - clone repository 
    - run maven build 



## License

MIT

## Collaborators

- Luca Salzone <luca.salzone@gmail.com>
