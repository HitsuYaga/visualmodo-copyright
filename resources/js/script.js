/* HOVER MENU DROPDOWN */
<<<<<<< HEAD
var menudropdown = $('.js-dropdown .menu-dropdown');
$('.js--dropdown').hover(
    function() {
        $(this).parent().find(menudropdown).removeClass('fadeOutDown');
        $(this).parent().find(menudropdown).addClass('menu-dropdown-visible animated fadeInUp');
    },
    function() {
        $(this).parent().find(menudropdown).removeClass('menu-dropdown-visible fadeInUp');
        $(this).parent().find(menudropdown).addClass('fadeOutDown');
=======
var menudropdown = $('.js--dropdown .menu-dropdown');
$('.js--dropdown').hover(
    function() {
        $(this).find(menudropdown).removeClass('fadeOutDown');
        $(this).find(menudropdown).addClass('menu-dropdown-visible animated fadeInUp');
    },
    function() {
        $(this).find(menudropdown).removeClass('menu-dropdown-visible fadeInUp');
        $(this).find(menudropdown).addClass('fadeOutDown');
>>>>>>> origin/master
    }
);

$('.menu-dropdown').hover(
    function() {
<<<<<<< HEAD
        $(this).addClass('menu-dropdown-visible')
=======
        $(this).addClass('menu-dropdown-visible');
>>>>>>> origin/master
        $(this).removeClass('fadeOutDown');
    },
    function() {
        $(this).addClass('fadeOutDown');
        $(this).removeClass('menu-dropdown-visible');
    }
);

/* HOVER DESIGN PHOTO LIST */
<<<<<<< HEAD
var designphoto = $('.design-photo-list .design-photo');
var designphotodes = $('.design-photo-list .design-photo-des');
=======
var $designphoto = $('.design-photo-list .design-photo');
var $designphotodes = $('.design-photo-list .design-photo-des');
>>>>>>> origin/master
$('.design-photo-list').hover (
    function(){
        $(this).find(designphoto).toggleClass('design-photo-hover');
        $(this).find(designphotodes).toggleClass('design-photo-des-hover animated fadeInLeft');
    }
);