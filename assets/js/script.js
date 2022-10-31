$(window).scroll(function(){
    if(this.scrollY > 245){
        $('.header__section').addClass("sticky");
    }else{
        $('.header__section').removeClass('sticky');
    }
});