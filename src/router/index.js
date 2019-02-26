import Vue from 'vue'
import Router from 'vue-router'
import Routes from './routes'

Vue.use(Router)

export const router = new Router({
  // 默认的 linkActiveClass 为 router-link-active ,现在把他改为active
  linkActiveClass: 'active',
  // mode: 'history',
  routes: Routes
})

router.beforeEach((to, from, next) => {
  next()
})
router.afterEach(() => {
})