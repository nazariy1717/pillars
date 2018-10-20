let front = {
    hamburger: $('.hamburger'),
    nav: $('.header-list'),


    init: function () {
        this.events();
        this.rangeInit();
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



    getVals: function () {
        let parent = this.parentNode;
        let slides = parent.getElementsByTagName("input");
        let slide1 = parseFloat( slides[0].value );
        let slide2 = parseFloat( slides[1].value );
        if( slide1 > slide2 ){
            slide1 = slide2;
            slides[0].value = slides[1].value;
            // let tmp = slide2; slide2 = slide1; slide1 = tmp;
        }
        else if (slide2 <= slide1){
            slide2 = slide1;
            slides[1].value = slides[0].value;
        }
        let displayElement = parent.getElementsByClassName("rangeValues")[0];


        displayElement.innerHTML = "$ " + slide1.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + " - $ " + slide2.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    },

    rangeInit: function(){
        let sliderSections = document.getElementsByClassName("range");
        for( let x = 0; x < sliderSections.length; x++ ){
            let sliders = sliderSections[x].getElementsByTagName("input");
            for( let y = 0; y < sliders.length; y++ ){
                if( sliders[y].type ==="range" ){
                    sliders[y].oninput = this.getVals;
                    sliders[y].oninput();
                }
            }
        }
    },

    openTab: function (element, tabName, parent) {
        let i, tab_content, tab_links;

        tab_content = $(element).closest(parent).find('.tabs-wrap').find('.tab-content');
        for (i = 0; i < tab_content.length; i++) {
            tab_content[i].style.display = "none";
        }

        tab_links = $(element).closest('.tabs-ul').find('.tab-links');

        for (i = 0; i < tab_links.length; i++) {
            tab_links[i].className = tab_links[i].className.replace(" active", "");
        }

        document.getElementById(tabName).style.display = "block";
        $(element).addClass('active');
    },


    events: function () {
        let self = this;


        $(document).on('click', '.hamburger', function () {
            self.toogleNav();
        });

        $(document).on('click', '#button_filter_show', function () {
            $('.search_by_lakes').slideToggle();
        });

        $(document).on('click', '.drop-arrow', function () {
           $(this).toggleClass('js-active');
           $('.sub-menu').toggleClass('js-active');
        });



    }
};





jQuery(function () {
    front.init();
});