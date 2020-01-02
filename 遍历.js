let arr = [1, 2, 3, 4, 5]

//遍历
arr.forEach(v => {
    console.log(v);
})
//生成一个新的数组
console.log(arr.map(v => v * 2));

//数组每个元素进行判断
console.log(arr.every(v => v > 4));

//过滤数组大于3的数据
console.log(arr.filter(v => v > 3));

//数组去重
arr2 = [4, 5, 6, 6, 7, 8]
console.log(new Set(arr2));
console.log([...new Set(arr2)]);

//合并
//旧方式contact
//新方式
console.log([...new Set([...arr, ...arr2])]);

//对象key
let obj = {
    a: '1',
    b: 2,
    c: 4.0
}

Object.keys(obj).forEach(k => {
    console.log(k, obj[k]);
})
// 对象扩展
console.log({...obj, d: '123', age: 23});
