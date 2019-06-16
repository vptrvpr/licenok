<template>
    <div class="main-vue">
        <!-- Header -->
        <header-component></header-component>

        <div class="content navbar-sm-space">

            <!-- Portfolio -->

            <section class="section pb-0">
                <div class="row">
                    <div class="container-fluid">
                        <header class="text-center col-lg-8 col-lg-offset-2 ">
                            <h2 class="section-title color-orange">Наши достижения</h2>
                        </header>
                    </div>
                </div>
            </section>

            <section class="section-sm pb-0">
                <div class="container-fluid">
                    <div class="section-lg">
                        <div class="row">
                            <header class="col-lg-6 container-left-lg-fluid">
                                <h2 class="section-title"><p class="color-orange"><br><br><br>"Социально-ориентированный бизнес"</p></h2>
                            </header>
                            <div class="bg-right-lg-fluid col-lg-6"
                                 style="background-image:url(img/progress/social.png);"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-sm pb-0">
                <div class="container-fluid">
                    <div class="section-lg">
                        <div class="row">
                            <header class="container-right-lg-fluid col-lg-6 col-lg-offset-6">
                                <h2 class="section-title"><p class="color-orange"><br><br><br> "Вклад в будущее"</p></h2>
                                <p></p>
                            </header>
                            <div class="bg-left-lg-fluid col-lg-6"
                                 style="background-image:url(img/progress/vklad.png);"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-sm pb-0">
                <div class="container-fluid">
                    <div class="section-lg">
                        <div class="row">
                            <header class="col-lg-6 container-left-lg-fluid">
                                <h2 class="section-title"><p class="color-orange"><br><br><br>Все достижения</p></h2>
                            </header>
                            <div class="bg-right-lg-fluid col-lg-6"
                                 style="background-image:url(img/progress/all.png);"></div>
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
