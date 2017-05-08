script.type="text/javascript";  
script.src="jq/jquery-3.1.0.js";  
//购物车数量按钮
function cartsjia(){
	var valus1=$('#carttext').val();
	var valus2=parseInt(valus1)+1;
	$('#carttext').val(valus2);
	$('#carttext1').val(valus2);
}
function cartsjian(){	
	var valus1=$('#carttext').val();
	var valus2=parseInt(valus1)-1;
	$('#carttext').val(valus2);
	$('#carttext1').val(valus2);
}
//checkbox 全选
function checkall(checkbox,checkname){
	var allCheckBoxs=document.getElementsByName(checkname);
	if(document.getElementById(checkbox).checked){     
   //循环设置控件为选中状态
   for (var i=0;i<allCheckBoxs.length ;i++){
       if(allCheckBoxs[i].type=="checkbox"){
       	allCheckBoxs[i].checked=true;          
       }
    }  
	}
    else{
       for (var i=0;i<allCheckBoxs.length ;i++){
       	if(allCheckBoxs[i].type=="checkbox"){
       	allCheckBoxs[i].checked=false;      
       }
    }  
    }
}

