$(document).ready(function(){

$('#Amenu').hide();
$(window).scroll(function(){
    if($(window).scrollTop()>100){
        $('#Amenu').fadeIn("slow");
        $('#Bmenu').fadeOut("fast");

    }

});

$(window).scroll(function(){
    if($(window).scrollTop()<100){
        $('#Amenu').fadeOut("slow");
        $('#Bmenu').fadeIn("slow");

    }

});

    $('body').scrollspy({ target: '#Amenu' });

    $('.scroll-top').hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>1000){
            $('.scroll-top').fadeIn("slow");


        }else{
            $('.scroll-top').fadeOut("slow");
        }

    });

    $('.scroll-top').click(function(){
        $('body,html').animate({scrollTop:0},1000);
    });

function goToByScroll(id){
    $('html,body').animate({scrollTop: $(id).offset().top},'slow');
}
$(document).ready(function(){
    $('.navbar a').click(function(){
        goToByScroll($(this).attr('href'));
        return false;
    });
});

$(".navbar a").on("click", function(){
    $(".navbar").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});


});