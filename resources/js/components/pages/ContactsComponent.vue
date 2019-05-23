<template>
    <div class="main-vue">
        <!-- Header -->
        <header-component></header-component>

        <div class="content navbar-sm-space">

            <!-- Contact -->

            <section id="contact" class="contacts">
                <div id="map" class="map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A0449852a908de2377dab0559bffd1da0d4e255875f450da4206f8131b880b65d&amp;source=constructor"
                        frameborder="0"></iframe>
                </div>
                <section class="section bg-light">
                    <div class="container-fluid">
                        <div class="row row-base">
                            <div class="col-md-4 col-base address-item address-fl-item">
                                <i class="icon icon-telephone color-orange"></i>
                                <div class="address-title">+8 800 555 35 35</div>
                            </div>
                            <div class="col-md-4 col-base address-item address-fl-item">
                                <i class="icon icon-envelope color-orange"></i>
                                <div class="address-title">info@licenok.com</div>
                            </div>
                            <div class="col-md-4 col-base address-item address-fl-item">
                                <i class="icon icon-map-marker color-orange"></i>
                                <div class="address-title">Ханты-Мансийский автономный округ</div>
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
