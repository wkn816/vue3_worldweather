import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueScrollTo from 'vue-scrollto'


loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
  .use(VueScrollTo, {
    duration: 500,  // スクロールのスピード（ミリ秒）
    easing: "ease-in-out",  // スクロールアニメーションの種類
  });
