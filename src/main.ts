import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Hong from './components/Hong.vue'
import Hong2 from './components/Hong2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes: [
        {path:'/', component: Hong},
        {path:'/xxx', component: Hong2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
