<template>
    <div class="main-vue">
        <header class="navbar navbar-mobile md-hide">
            <a href="/" class="js-target-scroll">
                <img height="70px" src="img/logo-mob.png">
            </a>

            <!-- Navbar Collapse -->

            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#nav-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>



            <!-- Navigation Mobile -->

            <nav class="nav-mobile">
                <div class="collapse navbar-collapse" id="nav-collapse">
                    <ul class="nav-mobile-list">
                        <li>
                            <a href="/">Главная</a>
                        </li>
                        <li>
                            <a href="/our_kindergarten">Наш садик</a>
                        </li>
                        <li>
                            <a href="/staff">Персонал</a>
                        </li>
                        <li>
                            <a href="/daily_regime">Режим дня</a>
                        </li>
                        <li>
                            <a href="/eat">Питание</a>
                        </li>
                        <li>
                            <a href="/progress">Наши достижения</a>
                        </li>
                        <li>
                            <a href="/extra_classes">Дополнительные занятия</a>
                        </li>
                        <li>
                            <a href="/price">Стоимость</a>
                        </li>
                        <li>
                            <a href="/contacts">Контакты</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <header class="visible-md visible-lg navbar-left">
            <div class="brand-panel">
                <a href="/" class="js-target-scroll">
                    <img src="images/logo_2.png" class="logo-desktop-sidebar" height="150px">
                </a>
            </div>

            <!-- Navigation left -->

            <nav class="nav-left hidden-xs hidden-sm">
                <ul class="nav-left-list">
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/our_kindergarten">Наш садик</a>
                    </li>
                    <li>
                        <a href="/staff">Персонал</a>
                    </li>
                    <li>
                        <a href="/daily_regime">Режим дня</a>
                    </li>
                    <li>
                        <a href="/eat">Питание</a>
                    </li>
                    <li>
                        <a href="/progress">Наши достижения</a>
                    </li>
                    <li>
                        <a href="/extra_classes">Дополнительные занятия</a>
                    </li>
                    <li>
                        <a href="/price">Стоимость</a>
                    </li>
                    <li>
                        <a href="/contacts">Контакты</a>
                    </li>
                </ul>
            </nav>

            <div class="address-panel hidden-xs hidden-sm">
                <address><a class="bottom-animation" href="tel:+88005553535">+8 800 555 35 35</a></address>
                <address><a class="bottom-animation" href="mailto:info@Selena.com">info@licenok.com</a></address>
            </div>
            <ul class="social-list bottom-animation">
                <li><a href="" class="fa fa-instagram"></a></li>
                <li><a href="" class="fa fa-youtube"></a></li>
                <li><a href="" class="fa fa-vk"></a></li>
            </ul>
        </header>
    </div>
</template>

<script>
    export default {
        mounted() {

        }
    }
</script>
