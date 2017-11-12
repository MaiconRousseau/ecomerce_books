/* jshint esversion:6*/
"use strict";
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import BootstrapVue from 'bootstrap-vue';
import lodash from "lodash";
import 'vue-material/dist/vue-material.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import ToolbarComponent from '../components/toolbar-component.vue';
import ProductComponent from '../components/product-component.vue';
import ViewProductsComponent from '../components/view-products-component.vue';
import HomeComponent from '../components/home-component.vue';
import AboutComponent from '../components/about-component.vue';
import ProdutosComponent from '../components/produto/products-component.vue';

Vue.use(VueRouter);

var routes = [
	{path:'/', component: HomeComponent},
	{path: '/about', component: AboutComponent},
	{path: '/produtos', component: ProdutosComponent}
];

var router = new VueRouter({
	routes: routes
});


//Enable vue-material
Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
  primary: 'black',
  accent: 'green',
  warn: 'red',
  background: 'white'
})

//Enable Bootstrap
Vue.use(BootstrapVue);
//Register the component
// Vue.component('toolbar-component', ToolbarComponent);
// Vue.component('product-component', ProductComponent);
// Vue.component('view-products-component', ViewProductsComponent);
Vue.component('home-component', HomeComponent);

window.Eventos = new Vue();

window.Vue = new Vue({
	el: "#app",
	router: router,
  data:()=>{
    return {admin: false};
  }
});
