<template>
    <div class="main-vue">
        <!-- Header -->
        <header-component></header-component>

        <div class="content navbar-sm-space">

            <!-- Portfolio -->

            <section class="section-sm pb-0">
                <div class="container-fluid">
                    <div class="section-lg animation-left-and-right">
                        <div class="row">
                            <header class="col-lg-6 container-left-lg-fluid left">
                                <h2 class="section-title"><p class="color-orange"> Завтрак</p></h2>
                                <p class="text-left">
                                    Молочные блюда:<br>
                                    1) Каши (ячневая, гречневая, манная, рисовая, и тд)<br>
                                    Напиток(чай, какао)<br>
                                    Хлебобулочное изделие с маслом
                                </p>
                            </header>
                            <div class="bg-right-lg-fluid col-lg-6 right"
                                 style="background-image:url(img/portfolio/Завтрак.jpg);"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-sm pb-0">
                <div class="container-fluid">
                    <div class="section-lg animation-left-and-right ">
                        <div class="row">
                            <header class="container-right-lg-fluid col-lg-6 col-lg-offset-6 right">
                                <h2 class="section-title"><p class="color-orange"> Второй завтрак</p></h2>
                                <p class="text-left">
                                    Фрукты<br>
                                    Сок<br>
                                </p>
                            </header>
                            <div class="bg-left-lg-fluid col-lg-6 left"
                                 style="background-image:url(img/portfolio/apples.jpg);"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-sm pb-0">
                <div class="container-fluid">
                    <div class="section-lg animation-left-and-right ">
                        <div class="row">
                            <header class="col-lg-6 container-left-lg-fluid left">
                                <h2 class="section-title"><p class="color-orange"> Обед</p></h2>
                                <p class="text-left">
                                    Первое блюдо (суп, рассольник, борщ, уха и тд)<br>
                                    Второе блюдо<br>
                                    Напиток<br>
                                    Хлебобулочное изделие<br>
                                </p>
                            </header>
                            <div class="bg-right-lg-fluid col-lg-6 right"
                                 style="background-image:url(img/portfolio/lunch.jpg);"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-sm pb-0">
                <div class="container-fluid">
                    <div class="section-lg animation-left-and-right ">
                        <div class="row">
                            <header class="container-right-lg-fluid col-lg-6 col-lg-offset-6 right">
                                <h2 class="section-title"><p class="color-orange"> Полдник</p></h2>
                                <p class="text-left">
                                    Напиток<br>
                                    Сдоба<br>
                                </p>
                            </header>
                            <div class="bg-left-lg-fluid col-lg-6 left"
                                 style="background-image:url(img/portfolio/полдник.jpg);"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-sm pb-0">
                <div class="container-fluid">
                    <div class="section-lg animation-left-and-right ">
                        <div class="row">
                            <header class="col-lg-6 container-left-lg-fluid left">
                                <h2 class="section-title"><p class="color-orange"> Ужин</p></h2>
                                <p class="text-left">
                                    Второе блюдо<br>
                                    Хлебобулочное изделие<br>
                                    Напиток<br>
                                </p>
                            </header>
                            <div class="bg-right-lg-fluid col-lg-6 right"
                                 style="background-image:url(img/portfolio/ygin.jpg);"></div>
                        </div>
                    </div>
                </div>
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
