const backTop = () => {
    let isShow = false;
    if (isShow == false) {
        isShow = true;
        $("body").animate({ scrollTop: 0 }, 250, () => {
            isShow = false;
        });
    }
}

const toDetails = (good) => {
	let goodName = good.id;
	location = "/detail/?name=" + goodName;
}