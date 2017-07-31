function checkUpFile(form){
	if(form.goodsName.value==""){
		alert('商品名称不能为空');
		return false;
	}
	if(form.pics.value==""){
		alert('未选择商品图片');
		return false;
	}
	if(form.detail.value==""){
		alert('未选择商品详情');
		return false;
	}
	return true;
}