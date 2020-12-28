import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/router'
import 'material-design-icons-iconfont'
import ''


createApp(App).use(store, router).mount('#app')
