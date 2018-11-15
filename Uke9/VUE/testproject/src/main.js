import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let app = new Vue({
    el: '#app',
    data: {
        message: 'Dette er en melding'
    },
    render: h => h(App)
})

