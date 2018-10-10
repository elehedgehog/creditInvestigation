//配置项(需要用到域名的统一用这个，方便修改,也可以添加其他变量)
const configData = {
	URL: 'http://119.23.148.208:8096/facade'
//	URL: 'http://zx.lepudata.com'
};

//去掉空格和html标签
function trim(value) {
	var value = value.replace(/(^\s*)|(\s*$)/g, ""); //去空格
	return value.replace(/<[^>]+>/g, ""); //去标签
}