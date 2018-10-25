let goods = {

    slider_options_default: {
        wrapAround: true,
        pageDots: false,
        prevNextButtons: false,
        autoPlay: false,
        cellAlign: 'left',
        contain: true,
        imagesLoaded: true,
        hash: true
    },

    init: function () {
        this.events();
        this.newSlider('.goods-img__carousel');
    },

    newSlider: function (selector, options) {
        options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
        let carousel = new Flickity(document.querySelector(selector), options);
        return new Flickity(document.querySelector(selector), options);
    },

    events: function () {
        let self = this;

        $(document).on('click', '.goods__colors li', function () {
            $('.goods__colors li').removeClass('active');
            $(this).addClass('active');
        });

    }
};

$(function () {
    goods.init();
});
