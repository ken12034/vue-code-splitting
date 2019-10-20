import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@layout/index.vue";
// import Home from "@pages/Home.vue";
// const Layout = () => import(/* webpackChunkName: "layout" */ "@layout/index.vue");

const Home = () => import(/* webpackChunkName: "home" */ "@pages/Home.vue");
const About = () => import(/* webpackChunkName: "about" */ "@pages/About.vue");

Vue.use(VueRouter);

const routesInfo = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
    ]
  }
];

const createRouter = () => new VueRouter({
  mode: "history",
  routes: routesInfo,
  scrollBehavior(to, from, savedPosition): { x: number, y: number } {
    return { x: 0, y: 0 };
  },
});

const router = createRouter();

export default router;

