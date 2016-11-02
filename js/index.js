$(function(){
	var add=$(".add");
	var input=$(".header input");
	var ul=$(".ul");
	//存储记录的数组
	var arr=[];
	//触摸事件的起始位置
	var stratP;
	var todo={
			name:input.val(),
			state:0
		};
	if(localStorage.x){
		arr=JSON.parse(localStorage.x);
		render();
	}
	
	add.on("touchend",function(){
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
	
	ul.on("touchstart","li",function(e){
		stratP=e.originalEvent.changedTouches[0].clientX;
	})
	ul.on("touchend","li",function(e){
	  var p=e.originalEvent.changedTouches[0].clientX;
	  if(p-stratP>50){
	  	   $(this).state=1;
		    $(this).addClass("done");
	  }
	  if(p-stratP<-50){	 
	  	   $(this).state=0;
		    $(this).removeClass("done");
	  }
	  localStorage.x=JSON.stringify(arr);
	})
	function render(){
		ul.empty();
		for(var i=0;i<arr.length;i++){
			var c=todo.state?"done":"";
			$("<li class='"+c+"'><div class='content'>"+arr[i].name+"</div><div class='delete'></div></li>").appendTo(ul);
		}
	}
})