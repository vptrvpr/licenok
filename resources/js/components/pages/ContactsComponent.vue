<template>
    <div class="main-vue">
        <!-- Header -->
        <header-component></header-component>

        <div class="content navbar-sm-space">

            <!-- Contact -->

            <section id="contact" class="contacts">
                <div id="map" class="map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A49f7bf1a14afa3207f22f302ec6016a977503fa695192446273e2f2718154f2b&amp;source=constructor"
                        frameborder="0"></iframe>
                </div>
                <section class="section bg-light">
                    <div class="container-fluid">
                        <div class="row row-base">
                            <div class="col-md-4 col-base address-item address-fl-item">
                                <i class="icon icon-telephone color-orange"></i>
                                <div class="address-title">8 (932) 416-29-30</div>
                            </div>
                            <div class="col-md-4 col-base address-item address-fl-item">
                                <i class="icon icon-envelope color-orange"></i>
                                <div class="address-title">info@licenok.com</div>
                            </div>
                            <div class="col-md-4 col-base address-item address-fl-item">
                                <i class="icon icon-map-marker color-orange"></i>
                                <div class="address-title">Ханты-Мансийский автономный округ - Югра сургутский район
                                    пгт. Барсово ДНТ "Барсовское" ул. 8 правая уч. 4
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
