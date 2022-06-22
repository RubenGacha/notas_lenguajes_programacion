export const Basico=[
    {
      path: '/conceptosBasicos/paradigma',
      name: 'conceptosBasicos_paradigma',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/conceptosBasicos/paradigma.vue')
    },
    {
      path: '/conceptosBasicos/niveles',
      name: 'conceptosBasicos_niveles',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/conceptosBasicos/niveles_programacion.vue')
    },
    {
      path: '/conceptosBasicos/tipado',
      name: 'conceptosBasicos_tipado',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/conceptosBasicos/Tipado.vue')
    }
]