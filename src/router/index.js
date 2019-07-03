import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PerfilPage from  '@/Perfil'
import Principal from '@/Principal'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/perfil',
      component: PerfilPage
    },
    {
      path: '/home',
      component: Principal
    }
  ]
})
