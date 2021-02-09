
const request = require('request')
let urls = [
    {
    "url": "http://doesNotExist.kratikal.com",
    "priority": 1
    },
    {
    "url": "http://kratikal.com",
    "priority": 7
    },
    {
    "url": "http://offline.kratikal.com",
    "priority": 2
    },
    {
    "url": "http://google.com",
    "priority": 4
    }
    ]
for (var i=0;i<urls.length;i++){
    var server_url = urls[i].url;
    var priority_rank = urls[i].priority;
    
    const myPromise = new Promise(function(resolve, reject) {
        request
        .get(server_url,function (error,response){
            console.log('error:' ,error);
            console.log('statusCode:',response && response.statusCode);
    
    });
        setTimeout(function() {
            resolve('Promise returns after 5 second!');    
        }, 5000);
    });
    myPromise
    .then(function (values) {
        console.log(values)
        return values
    })
}
