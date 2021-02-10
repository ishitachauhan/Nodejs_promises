const urls = require("./server.json") //json file containing array of object with server and priority
const axios = require('axios')
    async function findServer(urls) {

        const tasks = urls.map(source => axios.get(source.url,{timeout: 5000}));
        // Make sure that all tasks were processed before return
        const results = await Promise.allSettled(tasks);
        //collect all final result for online server from urls in serverArr
        const serverArr = [];
        for(var i=0;i<results.length;i++){
            if (results[i].status === 'fulfilled') { //resolve when status is between 200 to 299
                const { value } = results[i]
                if(value.status >= 200 && value.status <= 299){
                    var result = urls[i]     
                }
                // Get all online server url and priority and append them to the serverArr
                serverArr.push(result)
                
                
            } else { // results[i].status === 'rejected'
              const { reason } = results
              // do something...
            } 
          }
        console.log(serverArr)
        //sort serverArr results on the basis of priority and return the lowest priority server with priority value
        serverArr.sort((a, b) => Number(a.priority) - Number(b.priority));
        var min = serverArr[0];
        console.log(min)
        return min
        }
        exports.findServer = findServer(urls);

