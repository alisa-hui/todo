$(document).ready(function(){
	var li=$(".ul img");
	li.on("touchend",function(){
		var ss=$(this).parents("li").index();
		if(ss==0){
			location.href="zonghe.html";
		}else if(ss==2){
			location.href="tuya.html";
		}else if(ss==4){
			location.href="my.html";
		}else if(ss==5){
			location.href="qunzu.html";
		}
	})
	//shift
	var shift=$(".shift");
	shift.on("touchend",function(){
		var ss=$(this).children("img");
		ss.delay(200).queue(function(){
			ss.addClass("zhuan").dequeue();
		})
	})
})