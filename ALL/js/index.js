
$(function () {

    // 回到顶部
    var $a=$('.shouye');
    $a.click(function () {
        $("html,body").animate({scrollTop:0},500)
    })

    //导航固定

        var banOffTop=$(".nav").offset().top;//获取到距离顶部的垂直距离
        var scTop=0;//初始化垂直滚动的距离
    var secs = document.querySelectorAll('.content section');
    var $lis=$('.nav ul li');
    // var lis=document.querySelectorAll('.nav ul li a')[1];.offsetTop
        $(document).scroll(function(){
            scTop=$(this).scrollTop();
            if(scTop>=banOffTop){
                $(".nav").addClass("show");
            }else{
                $(".nav").removeClass("show");
            }

        })








//    音乐暂停
        var $aud = $('.music')[0]
        var $stop= $('.stop')
        var num=0;
        $stop.click(function () {
            num++;
            if (num%2==0){
                $aud.play();
            }else {
                $aud.pause();
            }

        })




























})

