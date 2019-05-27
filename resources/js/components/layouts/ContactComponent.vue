<template>
    <div class="main-vue">
        <section class="section">
            <div class="container-fluid">
                <div class="form">
                    <div class="col-sm-6 form-group">
                        <input type="text" name="name" placeholder="Имя">
                    </div>
                    <div class="col-sm-6 form-group">
                        <input type="text" name="text" placeholder="Телефон или email">
                    </div>
                    <div class="col-sm-12 form-group">
                        <textarea rows="3" name="message" placeholder="Сообщение"></textarea>
                    </div>
                    <div class="text-right">
                        <button type="submit" class="btn btn-orange">Связаться со мной</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        mounted() {

        }
    }
</script>
