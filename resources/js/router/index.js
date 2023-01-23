import { createRouter,createWebHistory } from "vue-router";

import Conteiner from '../components/Conteiner.vue'
import AllNew from '../components/new/AllNew.vue'

const routes = [
    {
        path: '/',
        name: 'Conteiner',
        component: Conteiner
    },
    {
        path: '/allnew',
        name: 'AllNew',
        component: AllNew
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;