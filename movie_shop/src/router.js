import Vue from 'vue'
import Router from 'vue-router'
import Film from '@/views/Film'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Nowplaying from '@/views/film/Nowplaying'
import Comingsoon from '@/views/film/Comingsoon'
import Detail from '@/views/detail'
import City from '@/views/city'

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/film',
      component: Film,
      children: [
        {
          path: 'nowplaying',
          component: Nowplaying
        },
        {
          path: 'comingsoon',
          component: Comingsoon
        },
        {
          path: '',
          redirect: '/film/nowplaying'
        }
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '*',
      redirect: '/film'
    },
    {
      path: '/detail/:myid',
      component: Detail
    },
    {
      path: '/city',
      component: City
    }
  ]
})
export default router
