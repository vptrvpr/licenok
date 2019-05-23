/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * pages
 */
Vue.component('index-component', require('./components/pages/IndexComponent.vue').default);
Vue.component('our-kindergarten-component', require('./components/pages/OurKindergartenComponent').default);
Vue.component('staff-component', require('./components/pages/StaffComponent').default);
Vue.component('daily-regime-component', require('./components/pages/DailyRegimeComponent').default);
Vue.component('eat-component', require('./components/pages/EatComponent').default);
Vue.component('progress-component', require('./components/pages/ProgressComponent').default);
Vue.component('extra-classes-component', require('./components/pages/ExtraClassesComponent').default);
Vue.component('price-component', require('./components/pages/PriceComponent').default);
Vue.component('contacts-component', require('./components/pages/ContactsComponent').default);

/**
 * layouts
 */
Vue.component('header-component', require('./components/layouts/HeaderComponent.vue').default);
Vue.component('footer-component', require('./components/layouts/FooterComponent').default);
Vue.component('contact-component', require('./components/layouts/ContactComponent').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
