import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import router from './router'
import store from './store'
import './scss/index.scss'

createApp(App).use(Antd).use(store).use(router).mount('#app')
