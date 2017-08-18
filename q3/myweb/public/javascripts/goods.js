const checkUpFile = (form) => {
	if (form.goodsName.value == "") {
		alert('商品名称不能为空');
		return false;
	}
	if (form.pics.value == "") {
		alert('未选择商品图片');
		return false;
	}
	if (form.detail.value == "") {
		alert('未选择商品详情');
		return false;
	}
	return true;
}

const checkgood = () => {
    let good = $('#good_name');
    let goodsName = good.val();
    if(goodsName.length == 0){
        alert('商品名称不能为空');
    }else{
        $.post('/goods/deletegoods' ,{'goodsName':goodsName},(res)=>{
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