import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SerieVideo from './views/SerieVideo';
import SeriesList from "./views/SeriesList";
import MovieList from "./views/MovieList";
import MovieVideo from "./views/MovieVideo";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Series",
      name: "SeriesList",
      component: SeriesList
    },
    {
      path: "/Movies",
      name: "MovieList",
      component: MovieList
    },
    {
      path: '/SerieVideo/:id',
      name: 'SerieVideo',
      component: SerieVideo,
    },
    {
      path: '/MovieVideo/:id',
      name: 'MovieVideo',
      component: MovieVideo,
    },
  ]
});
