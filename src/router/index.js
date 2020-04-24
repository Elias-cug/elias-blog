import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    component: Layout,
    redirect: '/main/index.vue',
    children: [{
      path: 'main',
      name: 'Main',
      component: () => import('@/views/main/index.vue'),
      meta: { title: '首页', isTag: true }
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: '',
      name: 'Blog',
      component: () => import('@/views/blog/index.vue'),
      meta: { title: '博客', isTag: true }
    }]
  },
  {
    path: '/diary',
    component: Layout,
    redirect: '/diary/index',
    children: [{
      path: 'index',
      name: 'Diary',
      component: () => import('@/views/diary/index.vue'),
      meta: { title: '日记', isTag: true }
    }]
  },
  {
    path: '/introduce',
    component: Layout,
    redirect: '/introduce/index',
    children: [{
      path: 'index',
      name: 'Introduce',
      component: () => import('@/views/introduce/index.vue'),
      meta: { title: '关于', isTag: true }
    }]
  },
  {
    path: '/reading',
    component: Layout,
    redirect: '/reading/index',
    children: [{
      path: 'index',
      name: 'Reading',
      component: () => import('@/views/reading/index.vue'),
      meta: { title: '阅读', isTag: false }
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
