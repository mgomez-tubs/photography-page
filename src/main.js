import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import mitt from 'mitt'

Vue.config.productionTip = false

// Set up mitt event handler

const UIEvents              = mitt();   
Vue.prototype.$UIEvents     = UIEvents;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
