const path = require('path');
const fs = require('fs');
const http = require('http');






// http.createServer(function (req, res) {
//     fs.writeFile('chirps.json', (err, data) => {
//         res.writeHead(200, { 'content-Type': 'text/html' });
//         res.write(data);
//         res.end();
//         console.log(data)
//     })
// })





let arr = [
    {
        name: 'chirper1',
        age: 25,
        gender: 'Male',
        handle: '@chirper1',
        chirp: 'ahhhhhhhh'
    },
    {
        name: 'chirper2',
        age: 19,
        gender: 'Female',
        handle: '@chirper2',
        chirp: 'alsdiubfadsiubfliasubdf'
    },
    {
        name: 'chirper3',
        age: 34,
        gender: 'Female',
        handle: '@chirper3',
        chirp: 'hello World!'
    },
    {
        name: 'chirper4',
        age: 16,
        gender: 'Male',
        handle: '@chirper4',
        chirp: 'idk'
    },
    {
        name: 'chirper5',
        age: 28,
        gender: 'Female',
        handle: '@chirper5',
        chirp: 'SIR'

    }
]



let data = JSON.stringify(arr)
fs.writeFileSync('chirps.json', data)
fs.readFile('chirps.json',(err, data) => {
    console.log(JSON.parse(data))
})