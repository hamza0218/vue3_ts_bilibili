import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 项目初始化样式
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'
// 引用接口
import '@/mock/index'
// 引用vant样式 and 注册组件
import 'vant/lib/index.css';
import { Tab, Tabs, Swipe, SwipeItem } from 'vant';
// --------------------------------------------------------------
const app = createApp(App)
app.use(Tab);
app.use(Tabs);
app.use(Swipe);
app.use(SwipeItem);
app.use(router);
app.mount('#app')
