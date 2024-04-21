// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PokemonView from '@/views/PokemonView.vue';
import TeamView from '@/views/TeamView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/:id',
      name: 'Pokemon',
      component: PokemonView,
      data: true,
      props: true,
    },
    {
      path: '/team',
      name: 'Team',
      component: TeamView,
    },

    // {
    //   path: '/login',
    //   component: AuthLayout,
    //   children: [
    //     {
    //       path: '',
    //       name: 'Login',
    //       component: () => import('@/views/LoginView.vue'),
    //     },
    //   ],
    // },
  ],
});

export default router;
