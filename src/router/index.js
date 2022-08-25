import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Learn1 from '@/components/Learn1'
import Learn2 from '@/components/Learn2'
import Learn3 from '@/components/Learn3'
import Learn4 from '@/components/Learn4'
import Benchi from '@/components/Benchi'
import Falali from '@/components/Falali'
import ShengMax from '@/components/ShengMax'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/host',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/learn1',
      name: 'Learn1',
      component: Learn1
    },
    {
      path: '/learn2',
      name: 'Learn2',
      component: Learn2
    },
    {
      path: '/learn3',
      name: 'Learn3',
      component: Learn3
    },
    {
      path: '/learn4',
      name: 'Learn4',
      component: Learn4
    },
    {
      path: '/benchi',
      name: 'Benchi',
      component: Benchi
    },
    {
      path: '/falali',
      name: 'Falali',
      component: Falali
    },
    {
      path: '/shengmax',
      name: 'ShengMax',
      component: ShengMax
    }
  ]
})
