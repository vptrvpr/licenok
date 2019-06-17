<template>
    <div class="main-vue">
        <section class="section">
            <div class="container-fluid" id="contactsAnimation">
                <div class="form">
                    <div class="col-sm-6 form-group ">
                        <input type="text" class="left-contact" name="name" v-model="contacts.name" placeholder="Имя">
                    </div>
                    <div class="col-sm-6 form-group ">
                        <input type="text" class="right-contact" name="text" v-model="contacts.number"
                               placeholder="Телефон или email">
                    </div>
                    <div class="col-sm-12 form-group">
                        <textarea class="top-contact" rows="3" name="message" v-model="contacts.message"
                                  placeholder="Сообщение"></textarea>
                    </div>
                    <div class="text-right">
                        <span class="button-contact">
                            <button type="submit" class="btn btn-orange" @click="sendSlackNotification">Связаться со
                                мной
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <div class="modal" tabindex="-1" role="dialog" id="myModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title">Спасибо, ваша заявка принята!<br>
                            Мы свяжемся с вами в ближайшее время</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" style="margin-bottom: 40px" class="btn btn-secondary"
                                data-dismiss="modal">Закрыть
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                contacts: {
                    name: '',
                    number: '',
                    message: ''
                },
            }
        },
        mounted() {

        },
        methods: {
            sendSlackNotification: function () {
                this.successSend = true;
                axios( {
                    method: 'post',
                    url: '/send_email',
                    data: { contacts: this.contacts }
                } ).then( ( response ) => {
                    this.contacts = {
                        name: '',
                        number: '',
                        message: ''
                    };
                    $( '#myModal' ).modal( 'toggle' );
                } );
            },
        }


    }
</script>
