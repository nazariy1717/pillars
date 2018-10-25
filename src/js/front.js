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

let modal = {
    closeButton: $('.modal__close'),
    closeOverlay: $('.modal'),
    init: function () {
        this.events();
    },
    openModal: function (id) {
        let modalWindow = $(id);
        modalWindow.fadeIn();
        modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');
        $('body').addClass('--js-modal-animate');
    },

    closeModal: function (id) {
        let modalWindow = $(id);
        modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
        modalWindow.fadeOut();
        $('body').removeClass('--js-modal-animate');
    },

    events: function () {

        $(document).on('click', '.modalTrigger', function (e) {
            e.preventDefault();
            let self = $(this),
                target = self.attr('data-modal');
            modal.openModal(target);

        });

        $(document).on('click', '.modal', function (event) {
            let self = '#' + $(this).attr('id');
            if (event.target.className == 'modal__body') {
                modal.closeModal(self);
            }
        });

        $(document).on('click', '.modal__close', function () {
            let self = '#' + $(this).closest('.modal').attr('id');
            modal.closeModal(self);
        });

    }
};


$(function () {
    front.init();
    modal.init();
});