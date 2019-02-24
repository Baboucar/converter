import Vue from 'vue';
import Router from 'vue-router'
import Home from './views/Home.vue';
import firebase from 'firebase';
import CementConverter from './components/CementConverter';
import UpdatePrice from './components/UpdatePrice';
import Login from './components/Login';

Vue.use(Router)

const router = new  Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'cementConverter',
      component: CementConverter
    },
    {
      path:'/updatePrice',
      name:'updatePrice',
      component:UpdatePrice,
        meta: {
          requiresAuth: true
       }
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
   
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser)
    next('/');
  else if (!requiresAuth && currentUser)
    next('updatePrice');
  else next();


});


export default router;