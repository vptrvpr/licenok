$( document ).ready( function () {


    setTimeout( function () {
        var delay = 300;
        $( ".nav-left-list li" ).each( function ( index ) {
            delay += 100;
            $( this ).delay( delay ).queue( function ( next ) {
                $( this ).css( {
                    transform: 'translateX(0px)',
                    opacity: 1
                } );
                next();
            } );
        } );

        $( ".logo-desktop-sidebar" ).css( {
            transform: 'translateX(0px)',
            opacity: 1
        } );


    }, 600 );

    setTimeout( function () {
        var delay = 300;
        $( ".bottom-animation" ).each( function ( index ) {
            delay += 100;
            $( this ).delay( delay ).queue( function ( next ) {
                $( this ).css( {
                    transform: 'translateX(0px)',
                    opacity: 1
                } );
                next();
            } );
        } );

        $( ".top-animation" ).each( function ( index ) {
            delay += 100;
            $( this ).delay( delay ).queue( function ( next ) {
                $( this ).css( {
                    transform: 'translateX(0px)',
                    opacity: 1
                } );
                next();
            } );
        } );

        $( ".bottom-animation-title" ).each( function ( index ) {
            delay += 100;
            $( this ).delay( delay ).queue( function ( next ) {
                $( this ).css( {
                    transform: 'translateX(0px)',
                    opacity: 1
                } );
                next();
            } );
        } );

        $( ".left-animation" ).each( function ( index ) {
            delay += 100;
            $( this ).queue( function ( next ) {
                $( this ).css( {
                    transform: 'translateX(0px)',
                    opacity: 1
                } );
                next();
            } );
        } );

        $( ".right-animation" ).each( function ( index ) {
            $( this ).queue( function ( next ) {
                $( this ).css( {
                    transform: 'translateX(0px)',
                    opacity: 1
                } );
                next();
            } );
        } );


    }, 600 );

    setTimeout( function () {
        if ( window.innerWidth > 768 ) {
            $( '.title-js' ).css( {
                transition: 'ease .1s'
            } );

            const boxer = boxercontainer.querySelector( ".title-js" ),
                maxMove = boxercontainer.offsetWidth / 30,
                boxerCenterX = boxer.offsetLeft + ( boxer.offsetWidth / 2 ),
                boxerCenterY = boxer.offsetTop + ( boxer.offsetHeight / 2 ),
                fluidboxer = window.matchMedia( "(min-width: 800px)" );


            function getMousePos( xRef, yRef ) {

                let panelRect = boxercontainer.getBoundingClientRect();
                return {
                    x: Math.floor( xRef - panelRect.left ) / ( panelRect.right - panelRect.left ) * boxercontainer.offsetWidth,
                    y: Math.floor( yRef - panelRect.top ) / ( panelRect.bottom - panelRect.top ) * boxercontainer.offsetHeight
                };
            }

            document.body.addEventListener( "mousemove", function ( e ) {
                let mousePos = getMousePos( e.clientX, e.clientY ),
                    distX = mousePos.x - boxerCenterX,
                    distY = mousePos.y - boxerCenterY;
                if ( Math.abs( distX ) < 5000 && distY < 650 && fluidboxer.matches ) {
                    boxer.style.transform = "translate(" + ( -1 * distX ) / 12 + "px," + ( -1 * distY ) / 12 + "px)";
                    // boxercontainer.style.backgroundPosition = `calc(50% + ${distX/50}px) calc(50% + ${distY/50}px)`;
                }
            } )
        }

        var dealySet = 1;
        setInterval( function () {
            dealySet += 1.25;
            $( '.main-bg-before' ).css( {
                backgroundPositionX: '-' + dealySet + 'px'
            } );
        }, 100 );

    }, 1600 );


    /**
     * Scroll animation
     * @type {t}
     */
    var delayDailyRegime = 300;
    var continuousDailyRegime = $( '.daily-regime tr' );
    $( '.daily-regime tr' ).each( function ( index ) {
        delayDailyRegime += 150;
        console.log(delayDailyRegime);
        $( this ).delay( delayDailyRegime ).queue( function ( next ) {
            $(continuousDailyRegime[ index ]).css( {
                opacity: 1,
                transform: 'rotateZ(0deg) translateX(0px)',
            } );
            next();
        });
    } );



    var continuousElementsLeftAndRight = $( '.animation-left-and-right' );
    $( '.animation-left-and-right' ).each( function ( index ) {

        new Waypoint( {
            element: continuousElementsLeftAndRight[ index ],
            handler: function () {
                $(continuousElementsLeftAndRight[ index ]).find('.left').css( {
                    opacity: 1,
                    transform: 'translateX(0px)',
                } );
                $(continuousElementsLeftAndRight[ index ]).find('.right').css( {
                    opacity: 1,
                    transform: 'translateX(0px)',
                } );
            },
            offset: '65%'
        } )
    } );


    var contactsAnim = new Waypoint( {
        element: document.getElementById('contactsAnimation'),
        handler: function () {
            $( '.left-contact' ).delay( 0 ).queue( function ( next ) {
                $('.left-contact').css({
                    opacity: 1,
                    transform: 'translateX(0px)'
                });
            });
            $( '.right-contact' ).delay( 0 ).queue( function ( next ) {
                $('.right-contact').css({
                    opacity: 1,
                    transform: 'translateX(0px)'
                });
            });
            $( '.top-contact' ).delay( 300 ).queue( function ( next ) {
                $('.top-contact').css({
                    opacity: 1,
                    transform: 'translateY(0px)'
                });
            });
            $( '.button-contact' ).delay( 700 ).queue( function ( next ) {
                $('.button-contact').css({
                    opacity: 1,
                    transform: 'translateX(0px)'
                });

            });




        },
        offset: '65%'
    } );


    var indexAnimationPhotos = new Waypoint( {
        element: document.getElementById( 'indexAnimationPhotos' ),
        handler: function () {
            var delay = 300;
            $( ".showcase-item" ).each( function ( index ) {
                delay += 100;
                $( this ).delay( delay ).queue( function ( next ) {
                    $( this ).css( {
                        transform: 'translateY(0px)',
                        opacity: 1
                    } );
                    next();
                } );
            } );
            indexAnimationPhotos.destroy();
        },
        offset: '70%'
    } );


} );


