$(document).ready(function(){
	var zhcomp=$(".com");
	var ul=$(".mycon");
	var create=$(".header .create");
	create.on("touchstart",function(){
		location.href="zonghe.html";
	})
	var input=$(".zhCon input");
	var v=input.val;
	var todo={
		name:input.val(),
		state:0
	}
	var arr=[];
	if(localStorage.x){
		arr=JSON.parse(localStorage.x);
		render();
	}
	zhcomp.on("touchend",function(){
		location.href="my.html";
		v=$.trim(input.val());
		if(!v){
			return;
		}
		todo={
			name:input.val(),
			state:0
		};
		arr.push(todo);
		localStorage.x=JSON.stringify(arr);
		render();
		input.val("");
	})
	
	//delete
	ul.on("touchstart","li",function(e){
		stratP=e.originalEvent.changedTouches[0].clientX;
	})
	ul.on("touchend","li",function(e){
	  var index=$(this).index();
	  var p=e.originalEvent.changedTouches[0].clientX;
	  if(p-stratP<-50){
         arr.splice(index,1);
         $(this).addClass("ani-delete");
         $(this).delay(800).queue(function(){
         	$(this).remove().dequeue();
         })
	}
	  if(p-stratP>50){	 
	  	    arr[index].state=1;
		    $(this).addClass("done");
	  }
	  localStorage.x=JSON.stringify(arr);
	})
	//nav触摸
	var lis=$(".mynav li");
	var mycon=$(".mycon")
	lis.on("touchstart",function(){
		lis.removeClass("xuan");
		$(this).addClass("xuan");
		console.log(this)
		mycon.children("li").show();
		if($(this).attr("data-role")==="com"){
			mycon.children("li:not(.done)").hide();
		}else if($(this).attr("data-role")==="re"){
			mycon.children("li.done").hide();
		}
	})
	function render(){
		ul.empty();
		for(var i=0;i<arr.length;i++){
			var c=arr[i].state?"done":"";
			$("<li class='"+c+"'><img src='images/d_06.png'></div><a>"+arr[i].name+"</a></li>").appendTo(ul);
		}
	}
	//返回首页
	var logo=$(".logo img");
	logo.on("touchstart",function(){
		location.href="index.html";
	})
})
