import { createApp } from 'vue'
// @ts-ignore
import routers from './routers'
// @ts-ignore
import App from '@/views/app/app.vue'
import '@/styles/main.scss'
// @ts-ignore
import axios from 'axios'
import axiosOptions from './plugins/axios'

const app = createApp(App)

axiosOptions(axios)

app
    .use(routers)
    .provide('$http', axios)
    .mount('#app')

