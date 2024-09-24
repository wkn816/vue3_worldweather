import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import MyTitle from '../components/MyTitle.vue';
import MyTest from '../components/MyTest.vue';



// ルーティング情報

const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
  },
  {
    path: '/MyTitle',
    name: 'MyTitle',
    component: MyTitle,
  },
  {
    path: '/MyTest',
    name: 'MyTest',
    component: MyTest,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/*
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
    name: 'MyTest',
    component: MyTest
    },
    {
    path: '/MyTest2',
    name: 'MyTest2',
    component: MyTest2
    }
  ]
});
*/
export default router;