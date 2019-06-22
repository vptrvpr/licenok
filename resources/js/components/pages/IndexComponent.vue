<template>
    <div class="main-vue">
        <div class="animsition">

            <!-- Header -->
            <header-component></header-component>

            <!-- Home -->

            <main class="main main-full main-bg">
                <div class="main-bg-before">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="col-md-1 col-sm-6 col-sx-6">
                                    <img class="sun left-animation" src="images/sun1.png" height="200px">

                                </div>
                                <div class="col-md-1 col-sm-6 col-sx-6">
                                    <img class="left-animation" src="images/logo-sites_1.png" height="300px">
                                </div>
                                <div class="col-md-7 col-sm-6 col-sx-6 hidden-md hidden-sm hidden-xs"></div>
                                <div class="col-md-3 cloud-soc right-animation hidden-md hidden-sm hidden-xs">
                                    <div class="social-cloud ">
                                        <a href="https://www.instagram.com/lisenok.surgut/?r=nametag" target="_blank"><i
                                            class="fa fa-instagram"></i></a>
                                        <a href="/#"><i class="fa fa-youtube"></i></a>
                                        <a href="https://vk.com/lisenok.surgut" target="_blank"><i class="fa fa-vk"></i></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div id="boxercontainer">
                            <div class="opener" id="title-general">
                                <h1 class="bottom-animation-title title-js">Частный детский садик<br>
                                    <p class="color-orange bottom-animation-title">&laquo;Лисёнок&raquo;</p>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="mouse-helper"></div>
                </div>
            </main>

            <div class="content">
                <section class="section pb-0">
                    <div class="container-fluid">
                        <div class="row">
                            <header class="text-center col-lg-8 col-lg-offset-2">
                                <h5 class="general-title color-orange">Улыбнитесь! Мы любим Вас и Ваших детей! Нам в радость заботиться о Ваших
                                    детях!</h5>
                                <h6 class="general-title">Открыт набор детей на новый учебный год!<br>
                                   Количество мест ограничено!</h6>
                                <div class="about-entry text-center">
                                </div>
                            </header>
                        </div>
                    </div>
                    <div class="portfolio-container">
                        <div class="clearfix" id="indexAnimationPhotos">
                            <div class="col-portfolio col-sm-6 col-lg-4">
                                <a href="/our_kindergarten">
                                    <figure class="showcase-item">
                                        <div class="showcase-item-thumbnail"><img alt=""
                                                                                  src="img/sadik/sadik-1.png">
                                        </div>
                                        <figcaption class="showcase-item-hover">
                                            <div class="showcase-item-info">
                                                <div class="showcase-item-category">Подробнее</div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div class="col-portfolio col-sm-6 col-lg-4">
                                <a href="/our_kindergarten">
                                    <figure class="showcase-item">
                                        <div class="showcase-item-thumbnail"><img alt=""
                                                                                  src="img/sadik/1.png">
                                        </div>
                                        <figcaption class="showcase-item-hover">
                                            <div class="showcase-item-info">
                                                <div class="showcase-item-category">Подробнее</div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div class="col-portfolio col-sm-6 col-lg-4">
                                <a href="/our_kindergarten">
                                    <figure class="showcase-item">
                                        <div class="showcase-item-thumbnail"><img alt=""
                                                                                  src="img/sadik/2.png">
                                        </div>
                                        <figcaption class="showcase-item-hover">
                                            <div class="showcase-item-info">
                                                <div class="showcase-item-category">Подробнее</div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div class="col-portfolio col-sm-6 col-lg-4">
                                <a href="/our_kindergarten">
                                    <figure class="showcase-item">
                                        <div class="showcase-item-thumbnail"><img alt=""
                                                                                  src="img/sadik/3.png">
                                        </div>
                                        <figcaption class="showcase-item-hover">
                                            <div class="showcase-item-info">
                                                <div class="showcase-item-category">Подробнее</div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div class="col-portfolio col-sm-6 col-lg-4">
                                <a href="/our_kindergarten">
                                    <figure class="showcase-item">
                                        <div class="showcase-item-thumbnail"><img alt=""
                                                                                  src="img/sadik/4.png">
                                        </div>
                                        <figcaption class="showcase-item-hover">
                                            <div class="showcase-item-info">
                                                <div class="showcase-item-category">Подробнее</div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div class="col-portfolio col-sm-6 col-lg-4">
                                <a href="/our_kindergarten">
                                    <figure class="showcase-item">
                                        <div class="showcase-item-thumbnail"><img alt=""
                                                                                  src="img/sadik/5.png">
                                        </div>
                                        <figcaption class="showcase-item-hover">
                                            <div class="showcase-item-info">
                                                <div class="showcase-item-category">Подробнее</div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <!--Contact-->
                <contact-component></contact-component>
                <!-- Footer -->
                <footer-component></footer-component>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {

        }
    }
</script>
