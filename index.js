$(function(){
  var img=[
          {img:"9.jpg",link:"www.baidu.com"},
          {img:"10.jpg",link:"www.baidu.com"},
          {img:"11.jpg",link:"www.baidu.com"},
          {img:"12.jpg",link:"www.baidu.com"},
          {img:"13.jpg",link:"www.baidu.com"},
          {img:"14.jpg",link:"www.baidu.com"},
          {img:"15.jpg",link:"www.baidu.com"},
          {img:"16.jpg",link:"www.baidu.com"}
  ];
  $(".dahezi .anniu").on("click",function(){
   $("img").attr('src',function(i,oldsrc 
   	){
           return img[i].img;
   })
      $("a").attr('href',function(i){
           return img[i].link;
   })
  })
  $(".suoyou thead input").on('click',function(){

    $(".suoyou tbody input").prop('checked',$(this).prop('checked'))
  	
  })
  $('.suoyou tbody input').on('click',function(){
  	var len=$('.suoyou tbody input').length;
  	if ($(".suoyou tbody input:checked").length===len){
  		$(".suoyou thead input").prop('checked',true);
  	}else{
  		$(".suoyou thead input").prop('checked',false);
  	}
  })
  $("#ss").on("keyup",function(){
  	var val=$(this).val();

  	$(".suoyou tr").removeClass('cang');
  	if (val===""){
  	  return;
  	}
  
  	$(".suoyou tbody tr").not(':contains('+val+')').addClass('cang');
  })
  // setInterval(function(){
  // $(".tes").height(function(){
  // 	return Math.floor(Math.random()*300+3);
  // })},500)
$(".zhong").addClass("guanguan");
$(".dahezi ul li").on("click",function(e){
  $(".zhong").attr("index",$(this).index());
  e.preventDefault()
 $(".zhong").removeClass("guanguan");
 $(".zhong .zhong1 img").attr("src",$(this).find(' img').attr('src'))
})
$(".zhong .close").on('click',function(e){
  $(".zhong").addClass("guanguan");
})

//换图
var imgs=$(".dahezi .xiaohezi img");
$(".zhong").on("click",function(e){
  var index=parseInt($(this).attr("index"));
  if (e.clientX>$(this).outerWidth(true)/2){
    index+=1;
  }else{
    index-=1;
  }
  if (index===img.length){
    $(".zuo").removeClass("guanle");
    setTimeout(function(){$(".zuo").addClass("guanle")},2000);
    return;
  }else{
    $(".zuo").addClass("guanle");
  }
  if (index===-1){

    $(".you").removeClass("guanle");
    setTimeout(function(){$(".you").addClass("guanle")},2000);
    return;
  }else{
    $(".you").addClass("guanle");
  }
  
  $(".zhong").attr("index",index);
  var src=imgs.eq(index).attr("src");
  $(this).find("img").attr("src",src);

  //图片大小
  // var tu=$(this).find("img");
  // var x=tu.width()/tu.height()*$(window).outerHeight();
  // if (x<$(".dahezi .xiaohezi").width()){
  //      tu.width(x);
  //     }
})
$(".zhong").on("mousedown",function(e){
 e.preventDefault()
})

});
$(function(){
  //小球球

   for (var i = 0; i <50; i++) {
var t=Math.floor(Math.random()*800);
var l=Math.floor(Math.random()*800);
var w=Math.floor(Math.random()*50);
var h=Math.floor(Math.random()*50);
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);

     var q=$('<div>').addClass("qiu").css({
 'width':w,'height':w,'background':'rgba('+r+','+g+','+b+',0.8)',top:t,left:l

})
     //setInterval(function(){aa},100);

     $(".qiuqiu").append(q);
          var d=$('<div>').addClass("qiu2").css({
 'width':w,'height':w,'background':'rgba('+r+','+g+','+b+',0.8)',top:l,left:t

})
     $(".qiuqiu").append(d);
 }




});

//挑球球
$(function(){
$(".qiuqiu .qiu").on("click",function(){
 $(this).toggleClass("jinqu");
 $(this).toggleClass('shan');
 if ($(this).hasClass("jinqu")){
  $(this).css('background','red');

 $(this).data('color',$(this).css('background'));
 }else{
  $(this).css('background',$(this).data('color'))
 }

})

$(".qiuqiu .qiu2").on("click",function(){
  $(this).toggleClass('shan');
 $(this).toggleClass("jinqu");
 if ($(this).hasClass("jinqu")){
  $(this).css('background','red');

 $(this).data('color',$(this).css('background'));
 }else{
  $(this).css('background',$(this).data('color'))
 }

})

$(document).on('keydown',function(e){
  if (e.keyCode===13){
    $('.qiuqiu .jinqu').appendTo('.qiuqiu .qhezi');
  }
  if (e.keyCode===46){
    $('.qiuqiu .shan').remove();
  }
  // if (e.keyCode===37) {
  //   $(".qiuqiu .qiu2").wrap('<div class="kuang"></div>');
  //   $(".qiuqiu .kuang").each(function(){
  //     var md=$(this).find('.qiu2');
  //     var weizhi=md.position();
  //   });
    // $(md).css({
    //   left:0;
    //   top:0;
    // })
    // $('.kuang').css({
    //   width:md.width;
    //   height:md.height;
    //   left:md.left;
    //   top:md.top;
    // })
  //}
 })
$('.qiu').each(function(i,old){
$(old).mousedown(function(e){
  console.dir(old)
    var ev=e||window.event;
    var dx=ev.offsetX;
    var dy=ev.offsetY;
    $(document).mousemove(function(e){
      var ev=e||window.event;
      var xx=ev.clientX;
      var yy=ev.clientY;
      $(old).offset({left:xx-dx});
      $(old).offset({top:yy-dy});
    })
})
$(old).mouseup(function(){
  $(document).off();
})
})

});






