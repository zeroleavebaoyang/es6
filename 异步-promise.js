//Promise来处理异步
// resolve 成功的回调函数
// reject失败的回调函数

var p = new Promise(function (resolve, reject) {
    //ajax
    setTimeout(function () {
        var name = '张三';
        if (Math.random() < 0.7) {
            resolve(name);
        } else {
            reject('失败');
        }
    }, 1000);
})


console.log('开始.')
p.then((data) => {
    console.log(data);
})
console.log('结束.')