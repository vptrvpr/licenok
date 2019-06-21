<template>
    <div class="main-vue">
        <!-- Header -->
        <header-component></header-component>

        <div class="content navbar-sm-space">
            <section id="portfolio">
                <section class="section pb-0">
                    <div class="row">
                        <div class="container-fluid">
                            <header class="text-center col-lg-8 col-lg-offset-2 ">
                                <h2 class="section-title color-orange top-animation">Стоимость</h2>
                            </header>
                        </div>
                    </div>
                    <div class="top_30">
                        <div class="container" id="indexAnimationPhotos">
                            <div class="col-md-4 showcase-item">
                                <div class="card card-orange" style="width: 18rem;">
                                    <div class="card-body">
                                        <h6 class="card-title color-orange text-center">Индивидуальные</h6>
                                        <p class="card-text card-price-text text-center">
                                            от 400 руб/час<br>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 showcase-item">
                                <div class="card card-orange" style="width: 18rem;">
                                    <div class="card-body">
                                        <h6 class="card-title color-orange text-center">Доп.<br> занятия- групповые,<br>
                                        Мастер классы</h6>
                                        <p class="card-text card-price-text text-center">
                                           от 200 руб<br>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 showcase-item">
                                <div class="card card-orange" style="width: 18rem;">
                                    <div class="card-body">
                                        <h6 class="card-title color-orange text-center">Группа дневного пребывани</h6>
                                        <p class="card-text card-price-text text-center">
                                            10000 руб/месяц<br>
                                            600 рублей/день<br>
                                            100 рублей/час<br>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </section>
            </section>
        </div>

        <!--Contact-->
        <contact-component></contact-component>
        <!-- Footer -->
        <footer-component></footer-component>
    </div>
</template>

<script>
    export default {
        mounted() {

        }
    }
</script>
