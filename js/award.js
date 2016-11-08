/**
 * 
 * @authors shuaijuntao
 * @date    2016-11-08 17:54:46
 * @version 1.0
 */
function validateEmpty(obj,msg,val){
	$(obj).blur(function(){
	 	val= val||"";
	    var $msg=$('<span class="Validform_checktip"></span>');
			$(obj).next(".Validform_checktip").remove();
		if($.trim($(obj).val())==val){
			$msg.html(msg).insertAfter($(this));
	        $(obj).addClass("error");
		}else{
            $(obj).removeClass("error");	
		}
	});
}

function validateExpo(obj,msg){
       var $msg=$('<span class="Validform_checktip"></span>');
			$(".checkin-expo").closest(".w-form-item").find(".Validform_checktip").remove();
		if(!$(obj).filter(":checked").length){
			$msg.html(msg).insertAfter($(".checkin-expo"));
	        $(obj).addClass("error");
		}else{
            $(obj).removeClass("error");	
		}

	}

 function validatePhone(obj){
 	$(obj).blur(function(){
    var reg=/^[0-9]*[-]*[0-9]*$/
    var $msg=$('<span class="Validform_checktip"></span>');
	    $(obj).next(".Validform_checktip").remove();
 		if($.trim($(obj).val())==""){
			$msg.html("请输入手机号").insertAfter($(this));
	        $(obj).addClass("error");
		}else if(!reg.test($(obj).val())){
			$msg.html("请正确填写您的手机号码").insertAfter($(this));
	        $(obj).addClass("error");
		}else{
            $(obj).removeClass("error");	
		}

 		
 	});  
 }

 function validateTelephone(obj,msg){
 	$(obj).blur(function(){
 		 var reg=/^([+]\d)*(\d*-\d*)+$/
        var $msg=$('<span class="Validform_checktip"></span>');
			$(obj).next(".Validform_checktip").remove();
		if(!reg.test($(obj).val()) && $(obj).val()!=""){
			$msg.html(msg).insertAfter($(this));
	        $(obj).addClass("error");
		}else{
            $(obj).removeClass("error");
		}
 	});
   
 }


 function validateEmail(obj,msg){
 	$(obj).blur(function(){
 		 var reg=/^[A-Za-z0-9-_\.]+\@([A-Za-z0-9-_]+\.)+[A-Za-z0-9]{2,6}$/
    var $msg=$('<span class="Validform_checktip"></span>');
		$(obj).next(".Validform_checktip").remove();
	 if(!reg.test($(obj).val()) && $(obj).val()!=""){
			$msg.html(msg).insertAfter($(this));
	        $(obj).addClass("error");
		}else{
            $(obj).removeClass("error");
		}
 	});
   
 }

validateEmpty("#school","请输入申报学校");
validateEmpty("#address","请输入学校地址");
validateEmpty("#declarant","请输入申报人");
validateEmpty("#department","请输入部门");


if($("#telephone").val()==""){
	validateEmpty("#telephone","请输入电话");	
}else{
	alert("come");
	validateTelephone("#telephone","请按格式正确填写您的电话号码");
}
validatePhone("#mobile");
validateEmpty("#email","请输入电子邮箱");
validateEmail("#email","请按格式正确填写您的电子邮箱");



$("#reg-btn").click(function(){
 //validateEmpty("#country","请选择国家与地区","0")
 //validateExpo(".chk-expo","请至少选择一个展会");
 $(".form-item input").trigger("blur");

  if($(".error").length){
      return false;	
   }else{
   	  return true;
   }
 
   
});
