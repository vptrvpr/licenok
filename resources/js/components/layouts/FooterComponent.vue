<template>
    <div class="main-vue">

        <footer id="footer" class="footer">
            <div class="container-fluid">
                <div class="row-base row">
                    <div class="brand-info col-base col-md-6 col-lg-5">
                        <a href="#top" class="brand js-target-scroll text-center">
                            <p class="title-footer">Частный десткий садик<br>«Лисёнок»</p>
                        </a>
                    </div>
                    <div class="col-contacts col-base col-md-6 col-lg-6 text-right">
                        <address><a href="tel:830022233344" class="phone">+8 300 222 333 44</a></address>
                        <address><a href="mailto:info@Selena.com" class="email">info@licenok.com</a></address>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container-fluid">
                    <div class="copyrights">
                        © Copyright 2019 Лисенок
                    </div>
                </div>
            </div>
        </footer>

    <!-- Modals -->

    <div id="request" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close" data-dismiss="modal" aria-label="Close">&times;</span>
                    <h2 class="modal-title">Get start</h2>
                    <p class="modal-info">Leave your contacts and our managers<br> will contact you soon.</p>
                </div>
                <div class="modal-body">
                    <form class="form-request js-ajax-form">
                        <div class="form-group">
                            <input type="text" name="name" placeholder="Name">
                        </div>
                        <div class="form-group">
                            <input type="text" name="text" placeholder="Email *">
                        </div>
                        <div class="form-group">
                            <textarea rows="3" name="message" placeholder="Message"></textarea>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-block">Get start</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modals success -->

    <div id="success" class="modal modal-message fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                            <span class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></span>
                    <h2 class="modal-title">Thank you</h2>
                    <p class="modal-subtitle">Your message is successfully sent...</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Modals error -->

    <div id="error" class="modal modal-message fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                            <span class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></span>
                    <h2 class="modal-title">Sorry</h2>
                    <p class="modal-subtitle"> Something went wrong </p>
                </div>
            </div>
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
