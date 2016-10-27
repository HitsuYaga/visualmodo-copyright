/* HOVER MENU DROPDOWN */
var $menudropdown1 = $('.js-dropdown-1 .menu-dropdown-1');
$('.js--dropdown-1').hover(
    function() {
        $menudropdown1.removeClass('fadeOutDown');
        $menudropdown1.addClass('menu-dropdown-visible-1 animated fadeInUp');
    },
    function() {
        $menudropdown1.removeClass('menu-dropdown-visible-1 fadeInUp');
        $menudropdown1.addClass('fadeOutDown');
    }
);

$('.menu-dropdown-1').hover(
    function() {
        $menudropdown1.addClass('menu-dropdown-visible-1')
        $menudropdown1.removeClass('fadeOutDown');
    },
    function() {
        $menudropdown1.addClass('fadeOutDown');
        $menudropdown1.removeClass('menu-dropdown-visible-1');
    }
);

var $menudropdown2 = $('.js-dropdown-2 .menu-dropdown-2');
$('.js--dropdown-2').hover(
    function() {
        $menudropdown2.removeClass('fadeOutDown');
        $menudropdown2.addClass('menu-dropdown-visible-2 animated fadeInUp');
    },
    function() {
        $menudropdown2.removeClass('menu-dropdown-visible-2 fadeInUp');
        $menudropdown2.addClass('fadeOutDown');
    }
);

$('.menu-dropdown-2').hover(
    function() {
        $menudropdown2.addClass('menu-dropdown-visible-2')
        $menudropdown2.removeClass('fadeOutDown');
    },
    function() {
        $menudropdown2.addClass('fadeOutDown');
        $menudropdown2.removeClass('menu-dropdown-visible-2');
    }
);

/* HOVER DESIGN PHOTO LIST */
var $designphoto = $('.design-photo-list .design-photo');
var $designphotodes = $('.design-photo-list .design-photo-des')
$('.design-photo-list').hover (
    function(){
        $(this).find($designphoto).toggleClass('design-photo-hover');
        $(this).find($designphotodes).toggleClass('design-photo-des-hover animated fadeInLeft');
    }
)