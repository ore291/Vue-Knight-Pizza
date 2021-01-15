import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



const app = createApp(App)
    .use(router)
    .use(store)
    


router.isReady().then(() => {
    app.mount('#app');
});


// css imports
import 'buefy/dist/buefy.css'
import '@/assets/css/base.css'