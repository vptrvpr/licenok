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
                                <p class="text-left">Каша, овощное блюдо<br>
                                    Яичное блюдо<br>
                                    Творожное блюдо<br>
                                    Мясное, рыбное блюдо<br>
                                    Салат овощной<br>
                                    Напиток (какао, чай, молоко и т.п.)<br>

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
                                <h2 class="section-title"><p class="color-orange"> Обед</p></h2>
                                <p class="text-left">
                                    Салат, закуска<br>
                                    Первое блюдо<br>
                                    Блюдо из мяса, рыбы, птицы<br>
                                    Гарнир<br>
                                    Третье блюдо (напиток)<br>
                                </p>
                            </header>
                            <div class="bg-left-lg-fluid col-lg-6 left"
                                 style="background-image:url(img/portfolio/lunch.jpg);"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-sm pb-0">
                <div class="container-fluid">
                    <div class="section-lg animation-left-and-right ">
                        <div class="row">
                            <header class="col-lg-6 container-left-lg-fluid left">
                                <h2 class="section-title"><p class="color-orange"> Полдник</p></h2>
                                <p class="text-left">
                                    Кефир, молоко<br>
                                    Булочка, выпечка (печенье, вафли)<br>
                                    Блюдо из творога, круп, овощей<br>
                                    Свежие фрукты<br>
                                    Хлеб на весь день: пшеничный, ржаной
                                </p>
                            </header>
                            <div class="bg-right-lg-fluid col-lg-6 right"
                                 style="background-image:url(img/portfolio/полдник.jpg);"></div>
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
