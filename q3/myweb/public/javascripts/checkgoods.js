const checkgood = () => {
    let good = $('#good');
    let goodsName = good.val();
    if(goodsName.length == 0){
        alert('商品名称不能为空');
    }else{
        $.post('/delete/deletegoods' ,{'goodsName':goodsName},(res)=>{
            if(res.delete == 'fail'){
                alert(res.msg);
                good.val("");
            }else{
                alert(res.msg);
                good.val("");
            } 
        });
    }
}