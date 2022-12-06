import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';

const routes = [
  {
    // path: "/경로",
    // component: import해온 컴포넌트,
    path: "/list",
    component: List,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 