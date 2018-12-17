
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/Index.vue') },
      { path: '/register', component: () => import('components/auth/Register.vue') },
      { path: '/login', name: 'login', component: () => import('components/auth/Login.vue') },
      { path: '/dashboard', component: () => import('components/Dashboard.vue') },
      { path: '/scope&sequnce',
        component: () => import('components/search/SearchLayout.vue')
        // children: [
        //   { path: '/:course', component: () => import('components/search/Subject.vue') }
        // ]
      },
      { path: '/scope&sequnce/:item', component: () => import('components/courses/Subject.vue'), props: true },
      { path: '/coursesummary', component: () => import('components/summary/CourseSummary.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
