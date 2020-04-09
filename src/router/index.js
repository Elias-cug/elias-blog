import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '',
      name: 'Main',
      component: () => import('@/views/main/index.vue'),
      meta: { title: '首页' }
    }]
  },
  {
    path: '/blog',
    component: Layout,
    redirect: '/blog/index',
    children: [{
      path: 'index',
      name: 'Blog',
      component: () => import('@/views/blog/index.vue'),
      meta: { title: '博客' }
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
      meta: { title: '日记' }
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
      meta: { title: '关于' }
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
