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
                                <h2 class="section-title color-orange top-animation">Режим дня</h2>
                            </header>
                        </div>
                    </div>
                    <div class="top_30">
                        <div class="container">
                            <table class="table daily-regime">
                                <tbody>
                                <tr>
                                    <td><h3 class="color-orange" style="white-space: nowrap;">7:00 - 7:50</h3></td>
                                    <td><h6>Приём детей</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">7:50 - 8:35</h3></td>
                                    <td><h6>Подготовка к завтраку, завтрак</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">8:35 - 9:00</h3></td>
                                    <td><h6>Самостоятельная деятельность</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">9:00 - 9:15</h3></td>
                                    <td><h6>Первое занятие</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">9:15 - 10:00</h3></td>
                                    <td><h6>Игры</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">10:00 - 10:15</h3></td>
                                    <td><h6>Второй завтрак</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">10:15 - 11:15</h3></td>
                                    <td><h6>Подготовка к прогулке,прогулка</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">11:15 - 11:30</h3></td>
                                    <td><h6>Возвращение с прогулки, самостоятельная деятельность, подготовка к обеду</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">11:30 - 12:00</h3></td>
                                    <td><h6>Обед</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">12:00 - 15:00</h3></td>
                                    <td><h6>Подготовка ко сну, сон</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">15:00 - 15:15</h3></td>
                                    <td><h6>Постепенный подъём, водные процедуры</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">15:15 - 15:30</h3></td>
                                    <td><h6>Полдник</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">15:30 - 15:45</h3></td>
                                    <td><h6>Самостоятельная деятельность</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">15:45 - 16:00</h3></td>
                                    <td><h6>Второе занятие</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">16:00 - 16:30</h3></td>
                                    <td><h6>Самостоятельная деятельность</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">16:30 - 17:00</h3></td>
                                    <td><h6>Подготовка к ужину, ужин</h6></td>
                                </tr>
                                <tr>
                                    <td><h3 class="color-orange">17:00 - 19:00</h3></td>
                                    <td><h6>Подготовка к прогулке, прогулка, уход домой</h6></td>
                                </tr>
                                </tbody>
                            </table>

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
