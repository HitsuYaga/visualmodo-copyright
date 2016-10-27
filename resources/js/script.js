/* HOVER MENU DROPDOWN */
var menudropdown = $('.js--dropdown .menu-dropdown');
$('.js--dropdown').hover(
    function() {
        $(this).find(menudropdown).removeClass('fadeOutDown');
        $(this).find(menudropdown).addClass('menu-dropdown-visible animated fadeInUp');
    },
    function() {
        $(this).find(menudropdown).removeClass('menu-dropdown-visible fadeInUp');
        $(this).find(menudropdown).addClass('fadeOutDown');
    }
);

$('.menu-dropdown').hover(
    function() {
        $(this).addClass('menu-dropdown-visible');
        $(this).removeClass('fadeOutDown');
    },
    function() {
        $(this).addClass('fadeOutDown');
        $(this).removeClass('menu-dropdown-visible');
    }
);

/* HOVER DESIGN PHOTO LIST */
var $designphoto = $('.design-photo-list .design-photo');
var $designphotodes = $('.design-photo-list .design-photo-des');
$('.design-photo-list').hover (
    function(){
        $(this).find($designphoto).toggleClass('design-photo-hover');
        $(this).find($designphotodes).toggleClass('design-photo-des-hover animated fadeInLeft');
    }
);