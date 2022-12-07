import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';

const routes = [
  {
    // path: "/경로",
    // component: import해온 컴포넌트,
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    // path: "/detail/:id",
    //숫자만 찾아주는 정규식 문법 (\\d+)
    path: "/detail/:id(\\d+)",
    component: Detail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 