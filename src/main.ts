import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Tag, Button, Lazyload} from 'vant';
import 'vant/lib/index.css';


const app = createApp(App);
app.use(Tag).use(Button);
app.use(Lazyload, {
    lazyComponent: true,
  });
app.use(store).use(router).mount('#app')
