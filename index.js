const urls = require("./server.json")
const request = require('request')
const axios = require('axios')
    async function findServer() {

        const tasks = urls.map(source => axios.get(source.url,{timeout: 5000}));
        const results = await Promise.allSettled(tasks);
        results.forEach((result) => {
            if (result.status === 'fulfilled') {
              const { value } = result;
                if(value.status >= 200 && value.status <= 299){
                    for (i=0;i<urls.length;i++){
                        console.log(urls[i].priority)
                    }
                }
            } else { // results.status === 'rejected'
              const { reason } = result
              // do something...
            }
          });
        }

       
       findServer();
