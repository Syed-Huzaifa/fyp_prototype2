import Vue from "vue/dist/vue.esm.js";
import VueRouter from "vue-router";
import IndexComponent from "../components/IndexComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "indexComponent",
    component: IndexComponent,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
