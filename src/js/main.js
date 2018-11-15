let main = {

    slider_options_default: {
        wrapAround: true,
        pageDots: true,
        prevNextButtons: false,
        autoPlay: false,
        cellAlign: 'left',
        contain: true,
    },

    init: function () {
        new fullpage('#fullpage', {
            licenseKey: 'xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx',
            // responsiveHeight: 769,
            anchors: ['app-section-1', 'app-section-2', 'app-section-3', 'app-section-4',
                'app-section-5','app-section-6','app-section-footer'],
            menu: '#vertical-nav',
            slidesNavigation: true,
            slidesToSections: true,
            afterLoad: function(anchorLink,index) {
                $(`.${index.anchor}`).find(".--js-counter").counterUp({
                    delay: 10,
                    time: 1000
                });
            },
        });
        this.events();
        this.newSlider('.goods-gallery');

    },

    newSlider: function (selector, options) {
        options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
        let carousel = new Flickity(document.querySelector(selector), options);
        return new Flickity(document.querySelector(selector), options);
    },

    events: function () {
        let self = this;



        $(document).on('click', '.vertical-buttons__btn.--top', function(){
            fullpage_api.moveSectionUp();
        });

        $(document).on('click', '.vertical-buttons__btn.--down', function(){
            fullpage_api.moveSectionDown();
        });


    }
};

$(function () {
    main.init();
});
