import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由配置
import login from '../components/login.vue';
import index from '../components/index.vue';
import areas from '../components/areas.vue';
import carport from '../components/carport.vue';
import floordetail from '../components/floorDetail.vue';
import user from '../components/user.vue';
import message from '../components/message.vue';
import areadetail from '../components/areadetail.vue';
import updatapsw from '../components/updatapsw.vue';
import updataip from '../components/updataip.vue';
import emptyPage from '../components/emptyPage.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
       component: login,
    },
    {
      path: '/login',
       component: login
    },
    { 
      path: '/index', 
      component: index,
      meta: {
        login_require: true
      },
       children:[
        {
          path:'/',
          component:areas,
          meta: {
            login_require: true
          }
        },
        {
          path:'areas',
          component:areas,
          meta: {
            login_require: true
          }
        },
        {
          path:'carport',
          component:carport,
          children:[
            { 
              path: '', 
              component: floordetail,
              meta: {
                login_require: true
              }
            },
            { 
              path: 'floordetail',
              component: floordetail,
              meta: {
                login_require: true
              }
            }
          ]
        },
      ]
    },
    {
      path: '/user', 
      component: user,
      meta: {
        login_require: true
      }
    },
    {
      path: '/message',
      component: message,
      meta: {
        login_require: true
      }
    },
    {
      path: '/areadetail',
       component: areadetail,
       name:'areadetail',
       meta: {
        login_require: true
      }
    },
    {
      path: '/updatapsw',
       component: updatapsw,
       meta: {
        login_require: true
      }
    },
    {
      path: '/updataip',
       component: updataip,
       meta: {
        login_require: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login_require)) {
    let isLogin=JSON.parse(sessionStorage.getItem("isLogin"))
    if(isLogin!=true){
      console.log('login')
      next({
        path:'/login'
      })
    }else{
      next()
    }
  } else {
    next()
  }
})


// router.beforeEach((to, from, next) => {
//   console.log(0)
//   const nextRouter=['index','user','message','areadetail','updatapsw','updataip'];
//   let isLogin=JSON.stringify(sessionStorage.getItem("login"))
//   if (nextRouter.indexOf(to.path) !=-1) {
//     console.log(1)
//      if(isLogin=='login'){
//       console.log(1)
//         next()
//      }else {
//       router.push('/login')
//     }
//   }else{
//     next()
//   }
// })
export default router;