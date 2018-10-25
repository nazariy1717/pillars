( function( window, factory ) {
    if ( typeof define == 'function' && define.amd ) {
        define( [
            'flickity/js/index',
        ], factory );
    } else if ( typeof module == 'object' && module.exports ) {
        module.exports = factory(
            require('flickity')
        );
    } else {
        factory(
            window.Flickity
        );
    }

}( window, function factory( Flickity ) {
    'use strict';
    Flickity.createMethods.push('_createHash');
    var proto = Flickity.prototype;
    proto._createHash = function() {
        if ( !this.options.hash ) {
            return;
        }
        this.connectedHashLinks = [];
        this.onHashLinkClick = function( event ) {
            event.preventDefault();
            this.selectCell( event.target.hash );
            history.replaceState( null, '', event.target.hash );
        }.bind( this );

        this.on( 'activate', this.activateHash );
        this.on( 'deactivate', this.deactivateHash );
    };

    proto.activateHash = function() {
        this.on( 'change', this.onChangeHash );

        if ( this.options.initialIndex === undefined && location.hash ) {
            var cell = this.queryCell( location.hash );
            if ( cell ) {
                this.options.initialIndex = this.getCellSlideIndex( cell );
            }
        }

        this.connectHashLinks();
    };


    proto.deactivateHash = function() {
        this.off( 'change', this.onChangeHash );
        this.disconnectHashLinks();
    };

    proto.onChangeHash = function() {
        var id = this.selectedElement.id;
        if ( id ) {
            var url = '#' + id;
            history.replaceState( null, '', url );
        }
    };


    proto.connectHashLinks = function() {
        var links = document.querySelectorAll('a');
        for ( var i=0; i < links.length; i++ ) {
            this.connectHashLink( links[i] );
        }
    };

    var proxyLink = document.createElement('a');

    proto.connectHashLink = function( link ) {
        if ( !link.hash ) {
            return;
        }
        proxyLink.href = link.href;
        if ( proxyLink.pathname != location.pathname ) {
            return;
        }
        var cell = this.queryCell( link.hash );
        if ( !cell ) {
            return;
        }
        link.addEventListener( 'click', this.onHashLinkClick );
        this.connectedHashLinks.push( link );
    };

    proto.disconnectHashLinks = function() {
        this.connectedHashLinks.forEach( function( link ) {
            link.removeEventListener( 'click', this.onHashLinkClick );
        }, this );
        this.connectedHashLinks = [];
    };

    return Flickity;

}));