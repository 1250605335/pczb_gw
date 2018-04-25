//设置cook
function addcookie(name, value, iDay) {
	var oDate = new Date()
	oDate.setDate(oDate.getDate() + iDay);
	document.cookie = '' + name + '=' + value + '; path=/ ;expires=' + oDate
}
// 删除cook
function delcookie(name, value, iDay) {
	addcookie(name, value, iDay)
}
//获取cook
function getcookie(name) {
	var str = document.cookie.split("; ");
	for(var i = 0; i < str.length; i++) {
		var arr = str[i].split('=');
		if(name == arr[0]) {
			return arr[1]
		}
	}
}