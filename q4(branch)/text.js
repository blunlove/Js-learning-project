const getConnet = function(a,b,c){
    return new Promise((resolve,reject) => {
        let a=parseInt(Math.random()*10);
        if(a<6){
            resolve('成功突破爸爸，下一步突破爷爷');
        }else{
            reject('突破爸爸失败');
        }
    });
}

const getConnet2 = function(a,b,c){
    return new Promise((resolve,reject) => {
        let a=parseInt(Math.random()*10);
        if(a<9){
            resolve('成功突破爷爷，下一步突破妈妈');
        }else{
            reject('突破爷爷失败');
        }
    });
}

const getConnet3 = function(a,b,c){
    return new Promise((resolve,reject) => {
        let a=parseInt(Math.random()*10);
        if(a<3){
            resolve('成功突破妈妈，下一步突破婶婶');
        }else{
            reject('突破妈妈失败');
        }
    });
}

const getConnet4 = function(a,b,c){
    return new Promise((resolve,reject) => {
        let a=parseInt(Math.random()*10);
        if(a<5){
            resolve('成功突破婶婶');
        }else{
            reject('突破婶婶失败');
        }
    });
}

getConnet().then((res) => {
    console.log(res);
    if (parseInt(Math.random()*10) < 6) {
        Promise.reject('未知原因失败');
        return;
    }else
    return getConnet2();
}).then((res) => {
    console.log(res);
    return getConnet3();
}).then((res) => {
    console.log(res);
    return getConnet4();
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});