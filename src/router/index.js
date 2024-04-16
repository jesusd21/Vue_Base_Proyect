import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SomeView from '../views/SomeView.vue';
import ComponentsView from '../views/ComponentsView.vue';
import TestingView from '../views/testingView.vue';
import LogInView from '../views/LogInView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/some',
    name: 'some',
    component: SomeView,
  },
  {
    path: '/components',
    name: 'components',
    component: ComponentsView,
  },
  {
    path: '/testing',
    name: 'testing',
    component: TestingView,
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
