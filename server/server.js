const path = require('path')
const fs = require('fs')

fs.writeFile('chirps.json', arr, (err) => {
    
})

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

console.log(arr)