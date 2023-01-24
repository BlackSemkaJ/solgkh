import { createRouter,createWebHashHistory } from "vue-router";

import Conteiner from '../components/Conteiner.vue'
import AllNew from '../components/new/AllNew.vue'
import New from '../components/new/New.vue'
import New2 from '../components/new/New2.vue'
import Contacts from '../components/contacts/Contacts.vue'

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
    {
        path: '/allnew/zasedanie-komissii-po-protivodejstviyu-korruptsii',
        name: 'New2',
        component: New2
    },
    {
        path: '/Contacts',
        name: 'Contacts',
        component: Contacts
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;