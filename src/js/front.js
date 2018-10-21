let front = {
    hamburger: $('.hamburger'),
    nav: $('.header-list'),

    init: function () {
        this.events();
        $('body').addClass('--js-animate');
    },

    toogleNav: function(){
        if (!this.hamburger.hasClass('is-active')) {
            this.hamburger.addClass("is-active");
            this.nav.toggleClass('js-show');
        }
        else {
            this.hamburger.removeClass("is-active");
            this.nav.toggleClass('js-show');
        }
    },



    events: function () {
        let self = this;


        $(document).on('click', '.hamburger', function () {
            self.toogleNav();
        });


    }
};




$(function () {
    front.init();
});