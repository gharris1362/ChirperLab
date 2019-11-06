const rp = require('request-promise');
const fs = require('fs')
let arr = [];
var options = {
    uri: 'https://www.reddit.com/r/popular.json',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(function (data) {
        data.data.children.forEach(element => {
            let article = {
                title: element.data.title,
                author: element.data.author_fullname,
                url: element.data.url
            }
            arr.push(article)
        });
        let jsonArr = JSON.stringify(arr);
        fs.writeFileSync('popular-articles.json', jsonArr);
    })
    .catch(function (err) {
        // API call failed...
    });