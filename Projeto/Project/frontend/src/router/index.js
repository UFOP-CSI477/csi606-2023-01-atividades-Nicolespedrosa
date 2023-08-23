import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/MainView.vue";
import RegisterComponent from "@/components/RegisterComponent.vue";
import RegisterPeople from "@/components/RegisterPeople.vue";
import LoginComponent from "@/components/LoginComponent.vue";
import FinalizarCompras from "@/components/FinalizarCompras.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/register-user",
    name: "auth",
    component: RegisterComponent,
  },
  {
    path: "/register-people",
    name: "registerPeople",
    component: RegisterPeople,
  },
  {
    path: "/login",
    name: "login",
    component: LoginComponent,
  },
  {
    path: "/finalizar",
    name: "finalizarcompra",
    component: FinalizarCompras,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
