
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageHome.vue'), name: 'Home' },
      { path: '/about', component: () => import('pages/PageAbout.vue'), name: 'About'},
      { path: '/notification', component: () => import('pages/PageNotif.vue'), name: 'Notifications'},
      { path: '/message', component: () => import('pages/PageMessage.vue'), name: 'Message'},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
