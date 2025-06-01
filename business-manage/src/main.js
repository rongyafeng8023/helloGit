import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/default.css"
import "./assets/css/reset.css"
import "./assets/css/sitemap.css"
import "./assets/css/page_notes.css"
import "./assets/css/debug.css"
import "./assets/css/styles.css"
import "./assets/css/opp_styles.css"
import "./assets/css/opp_edit_styles.css"



const app = createApp(App)

app.use(router)

app.mount('#app')
