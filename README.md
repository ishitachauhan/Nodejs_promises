about:
This module determines the availability of a given list of servers and then returns the deatils regarding the
availability of servers.

prerequisites:
-> node
-> JSON file server.json
-> JSON format:
   [{"url": "value", "priority": "value"}]

steps to run it locally:
-> git clone https://github.com/ishitachauhan/Nodejs_promises.git
-> npm install
-> nodemon start

unit testing:
-> install mocha,sinon
-> configure mocha file in configuration of vs code launch.json

 {
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Launch Program",
        "program": "${workspaceFolder}\\app.js",
        "runtimeArgs": ["-r", "dotenv/config"],
        "outputCapture": "std",
        "console": "integratedTerminal"
      },
      {
        "type": "node",
        "request": "launch",
        "name": "Mocha Current File",
        "program": "${workspaceFolder}/node_modules/.bin/_mocha",
        "args": ["${file}"],
        "cwd": "${workspaceRoot}",
        "outputCapture": "std",
        "console": "integratedTerminal"
      }
    ]
  }
-> run debug icon click on Mocha Current file


output:
Explanation: Since the http requests are done simulatenously as per the proiority, lowest priority online server to be return as per the flow diagram promise function should return online server with lowest priority and for that first sort pushed array and then return min priority url.


JSON reponse which contains the following details:
[
    {
        "serverName": "http://kratikal.com",
        "isOnline": true,
        "priority": 7
    },
    {
        "serverName": "http://google.com",
        "isOnline": true,
        "priority": 4
    },
    {
        "serverName": "http://offline.kratikal.com",
        "isOnline": false,
        "priority": 2
    },
    {
        "serverName": "http://doesNotExist.kratikal.com",
        "isOnline": false,
        "priority": 1
    }
]
