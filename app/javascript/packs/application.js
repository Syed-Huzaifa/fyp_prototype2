import Vue from "vue/dist/vue.esm.js";
import App from "../app.vue";

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(document.createElement("app"));
  const app = new Vue({
    el: "app",
    template: "<app/>",
    components: { App },
  });

  console.log(app);
});
