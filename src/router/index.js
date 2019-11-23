import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import viedo from '../components/Viedo'
import gift from '../components/Gift'
import books from '../components/Books'
import my from '../components/My'

Vue.use(Router);

export default new Router({
  routes: [
    {path:'/',redirect:home},
    {path: '/home', name: 'home', component: home},
    {path:'/viedo', name:'viedo', component:viedo},
    {path:'/gift',name:'gift',component:gift},
    {path:'/books',name:'books',component:books},
    {path:'/my',name:'my',component:my}
  ]
})
