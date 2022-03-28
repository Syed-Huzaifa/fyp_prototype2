import Vue from "vue/dist/vue.esm.js";
import IndexComponent from "../components/IndexComponent.vue";

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(document.createElement("app"));
  const app = new Vue({
    el: "app",
    template: "<IndexComponent/>",
    components: { IndexComponent },
  });

  console.log(app);
});
