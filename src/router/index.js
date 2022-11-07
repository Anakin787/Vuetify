import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../views/DashBoard.vue'
import GridSystem from '../views/GridSystem.vue'
import GridListPage from '../views/GridListPage.vue'
import BreakPoint from '../views/BreakPoint.vue'
import TypoGraphy from '../views/TypoGraphy.vue'
import TableTab from '../views/TableTab.vue'
import FormTab from '../views/FormTab.vue'
import ButtonTab from '../views/ButtonTab.vue'
import IconTab from '../views/IconTab.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/GridSystem',
    name: 'GridSystem',
    component: GridSystem
  },
  {
    path: '/GridListPage',
    name: 'GridListPage',
    component: GridListPage
  },
  {
    path: '/BreakPoint',
    name: 'BreakPoint',
    component: BreakPoint
  },
  {
    path: '/TypoGraphy',
    name: 'TypoGraphy',
    component: TypoGraphy
  },
  {
    path: '/Tables',
    name: 'Table',
    component: TableTab
  },
  {
    path: '/Forms',
    name: 'Form',
    component: FormTab
  },
  {
    path: '/Buttons',
    name: 'Button',
    component: ButtonTab
  },
  {
    path: '/Icons',
    name: 'Icon',
    component: IconTab
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
