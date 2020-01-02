//回调函数 获取异步方法里面的数据
function getData(callbck) {
    //ajax
    setTimeout(function () {
        var name = '张三';
        callbck(name);
    }, 1000);
}

//外部获取异步方法里面的数据


console.log('开始');
getData(function (data) {
    console.log(data + '111');
})
console.log('结束.');