import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import WeatherWidget from '../components/WeatherWidget.vue';
import LocationWidget from '../components/LocationWidget.vue';
import StopwatchWidget from '../components/StopwatchWidget.vue';
import TicTacToeWidget from '../components/TicTacToeWidget.vue';
import PhotoWidget from '../components/PhotoWidget.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { path: '/weather', component: WeatherWidget },
  { path: '/location', component: LocationWidget },
  { path: '/stopwatch', component: StopwatchWidget },
  { path: '/tictactoe', component: TicTacToeWidget },
  { path: '/photo', component: PhotoWidget },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
