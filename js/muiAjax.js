if(mui){
	var lbdAjax = {
		get:function(url,data,succBack,errorBack){
			if(!url){
				console.log("mui ajax -- url不能为空");
				return false;
			}
			if(typeof data != "object"){
				data = {};
			}
			mui.ajax(url,{
	            data:data,
            	dataType:'json',//服务器返回json格式数据
            	type:"get",//HTTP请求类型
            	timeout:6000,//超时时间设置为6秒；
            	headers:{'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'},	              
            	success:function(data){
            		succBack(data);
            	},
            	error:function(xhr,type,errorThrown){
            		errorBack(xhr,type,errorThrown);
            	}
            });
		},
		post:function(url,data,succBack,errorBack){
			if(!url){
				console.log("mui ajax -- url不能为空");
				return false;
			}
			if(typeof data != "object"){
				data = {};
			}
			mui.ajax(url,{
	            data:data,
            	dataType:'json',//服务器返回json格式数据
            	type:"post",//HTTP请求类型
            	timeout:6000,//超时时间设置为6秒；
            	headers:{'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'},	              
            	success:function(data){
            		succBack(data);
            	},
            	error:function(xhr,type,errorThrown){
            		errorBack(xhr,type,errorThrown);
            	}
            });
		}
	}
}
