import { createRouter,createWebHashHistory } from "vue-router";

import Conteiner from '../components/Conteiner.vue'
import AllNew from '../components/new/AllNew.vue'
import New from '../components/new/New.vue'

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
    },
    {
        path: '/allnew/On-the-protection-of-the-rights-of-consumers-of-housing-and-communal-services',
        name: 'New',
        component: New
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;