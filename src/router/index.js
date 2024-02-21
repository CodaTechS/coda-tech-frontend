import { createRouter, createWebHistory } from 'vue-router'
import Home from '../containers/Home.vue'
import About from '../containers/About.vue'
import Services from '../containers/Services.vue'
import Cases from '../containers/Cases.vue'
import Blog from '../containers/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'about',
    component: About
  },
  {
    path: '/servicos',
    name: 'servicos',
    component: Services
  },
  {
    path: '/cases',
    name: 'cases',
    component: Cases
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
