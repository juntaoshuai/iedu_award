/**
 * 
 * @authors shuaijuntao
 * @date    2016-11-08 17:54:46
 * @version 1.0
 */
function validateEmpty(obj, msg, val) {
    $(obj).blur(function() {
        val = val || "";
        var $msg = $('<span class="Validform_checktip"></span>');
        $(obj).next(".Validform_checktip").remove();
        if ($.trim($(obj).val()) == val) {
            $msg.html(msg).insertAfter($(this));
            $(obj).addClass("error");
        } else {
            $(obj).removeClass("error");
        }
    });
}

function validatePhone(obj) {
    $(obj).blur(function() {
        var reg = /^[0-9]*[-]*[0-9]*$/
        var $msg = $('<span class="Validform_checktip"></span>');
        $(obj).next(".Validform_checktip").remove();
        if ($.trim($(obj).val()) == "") {
            $msg.html("请输入手机号").insertAfter($(this));
            $(obj).addClass("error");
        } else if (!reg.test($(obj).val())) {
            $msg.html("请正确填写您的手机号码").insertAfter($(this));
            $(obj).addClass("error");
        } else {
            $(obj).removeClass("error");
        }


    });
}

function validateTelephone(obj) {
    $(obj).blur(function() {
        var reg = /^([+]\d)*(\d*-\d*)+$/
        var $msg = $('<span class="Validform_checktip"></span>');
        $(obj).next(".Validform_checktip").remove();
        if ($.trim($(obj).val()) == "") {
            $msg.html("请输入电话").insertAfter($(this));
            $(obj).addClass("error");
        } else if (!reg.test($(obj).val())) {
            $msg.html("请正确填写您的电话").insertAfter($(this));
            $(obj).addClass("error");
        } else {
            $(obj).removeClass("error");
        }
    });

}

function validateEmail(obj) {
    $(obj).blur(function() {
        var reg = /^[A-Za-z0-9-_\.]+\@([A-Za-z0-9-_]+\.)+[A-Za-z0-9]{2,6}$/
        var $msg = $('<span class="Validform_checktip"></span>');
        $(obj).next(".Validform_checktip").remove();
        if ($.trim($(obj).val()) == "") {
            $msg.html("请输入邮箱").insertAfter($(this));
            $(obj).addClass("error");
        } else if (!reg.test($(obj).val())) {
            $msg.html("请按格式正确填写您的电子邮箱").insertAfter($(this));
            $(obj).addClass("error");
        } else {
            $(obj).removeClass("error");
        }
    });

}
//申报奖项
function validateAwards() {
        var $award = $(".apply-award");
        var $msg = $('<span class="Validform_checktip"></span>');
        $award.find(".Validform_checktip").remove();
        if (!$award.find(":checked").length) {
            $msg.html("请选择申报奖项").appendTo($(".apply-award"));
            $award.addClass("error");
        } else if ($award.find(":checked").length > 2) {
            $msg.html("不能超过2项").appendTo($(".apply-award"));
            $award.addClass("error");
        } else {
            $award.removeClass("error");

        }
}


validateEmpty("#school", "请输入申报学校");
validateEmpty("#address", "请输入学校地址");
validateEmpty("#declarant", "请输入申报人");
validateEmpty("#department", "请输入部门");
validateEmpty("#telephone", "请输入电话");
//validateTelephone("#telephone")
validatePhone("#mobile");
validateEmail("#email");
validateEmpty("#url", "请输入学校网址");
validateEmpty("#profile", "请输入学校概况");
validateEmpty("#major", "请输入主要办学项目");
validateEmpty("#achivement", "请输入办学成果介绍");
validateEmpty("#reason", "请输入参选理由");
validateEmpty("#awardWord", "请输入参赛宣言");

 $(".apply-award :checkbox").click(function() {
 	validateAwards();
 });

function getApplyAward(){
	var awardVal=$("#apply-award input:checked").map(function(){
	   	return $(this).val();
	}).get().join(",");
	$("input[name=applyAward]").val(awardVal);
}


$("#reg-btn").click(function(ev) {
    ev.preventDefault();
	$(".form-item input,.form-item textarea").trigger("blur");
    validateAwards();
    //给申报奖项隐藏域设值
    getApplyAward();


    if ($(".error").length) {
    	$("html,body").animate({'scrollTop':"200px"},300);
        return false;
    }
    //表单提交
     $.ajax({
                //url: "js/ajax.txt",
                url:"",
                type:'post',
                data:$("#awardForm").serialize(),
                success: function(data) {
                    var data = $.parseJSON(data);
                    if (data.status == "y") { 
                      succcessLayer();
                       clearFromTxt();
                 }
             }
            
       })


});



  //表单提交后清空表单内容
  function clearFromTxt(){
     $("#awardForm").find("input:text,input:hidden,textarea").val("");
     $(".apply-award :checkbox").attr("checked",false);
  }

  function succcessLayer(){
      layer.open({
          type: 1,
          title: false,
          skin: 'ideu-popup',
          shade: [0.2, '#000'],
          time: 5000,
          area: ['464px', '232px'], 
          content:$("#success-tips")
     });
  }
