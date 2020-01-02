const key = 'job'
const obj = {
    num: 1,
    str: 'baoy',
    work() {
    }
}
obj[key] = 'fe'
console.log(obj);
`
----------------------
`
const key2 = 'hi'
const obj2= {
    num2: 2,
    str2: 'baoy',
    work2() {
    },
    [key2] : 'bao',
    [key2 + ' world'] : 'baoy.bao'
}
console.log(obj2);