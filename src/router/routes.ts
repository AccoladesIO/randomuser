import { RouteRecordRaw } from 'vue-router';
import { RouterName } from '@/enum/route-name';

const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: RouterName.Home,
      component: () => import('@/views/home.vue'),
    },
    {
      path: '/users/page=:page',
      name: RouterName.List,
      component: () => import('@/views/home.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)',
      name: RouterName.PageNotFound,
      component: () => import('@/components/page-not-found.vue'),
    }
  ];

  export default routes;
