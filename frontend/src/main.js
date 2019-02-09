import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Axios from 'axios';
import Notifications from 'vue-notification'

// Variáveis globais
Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

Vue.use(Notifications)

window.app = new Vue({
    render: h => h(App),
}).$mount('#app');