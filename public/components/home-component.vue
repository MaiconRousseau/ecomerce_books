<template >
  <div id="home">

    <header style="position: fixed; width: 100% ; z-index: 3;">
        <toolbar-component v-bind:logado="logado" ></toolbar-component>

    </header >
    <menu-component></menu-component>
    <b-container class="bv-example-row" >

      <b-row >
        <canvas id="space" width="50" height="85">
            Espaço para publicidade
        </canvas>
        <nav class="home-nav" style="text-align: center; position: relative; width: 100%; z-index: 2; border: 1px solid black; display: block;  background-color: #285C2B" >
          <li  class="menulist" ><router-link to="/"><strong style="color: white">Home </strong></router-link></li>
          <li style="color: white" class="menulist" ><router-link  to="/about">About </router-link></li>
          <li style="color: white" class="menulist" ><router-link to="/contact">Contact </router-link></li>
        </nav>
      </b-row>

      <div class="modal" v-if='modalShow' tabindex="-1" style="z-index: 4" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="overflow-y: scroll; height: 500px; max-height:85%;  margin-top: 50px; margin-bottom:50px;" >
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title"></h3>
                </div>
                <div class="modal-body">
                  <detail-component
                  v-bind:logado="logado" v-bind:username="username"
        	        v-bind:description="product.description" v-bind:id="product._id" v-bind:code_product="product.code_product"
        	        v-bind:price="product.price" v-bind:name="product.name" v-bind:category_name="product.category_name"
        	        v-bind:image="product.image" v-bind:category_id="product.category_id"
        	        >
        	      </detail-component>
                </div>
                <div class="modal-footer">
                  <md-button type="button" class="md-raised md-accent" @click="modalShow = !modalShow" >Voltar</md-button>
                </div>
            </div>
        </div>
      </div>

      <div class="modal" v-if='modalCadastrar' tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="overflow-y: scroll; height: 500px; max-height:85%;  margin-top: 50px; margin-bottom:50px;" >
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title"></h3>
                </div>
                <div class="modal-body">
                  <user-component></user-component>
                </div>
            </div>
        </div>
      </div>

      <div class="modal" v-if='modalLogin' tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="overflow-y: scroll; height: 500px; max-height:85%;  margin-top: 50px; margin-bottom:50px;" >
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title"></h3>
                </div>
                <div class="modal-body">
                  <login-component></login-component>
                </div>
            </div>
        </div>
      </div>

      <div class="modal" v-if='modalAdminLogin' tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="overflow-y: scroll; height: 500px; max-height:85%;  margin-top: 50px; margin-bottom:50px;" >
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title"></h3>
                </div>
                <div class="modal-body">
                  <login-component v-bind:admin="true" ></login-component>
                </div>
            </div>
        </div>
      </div>

      <div class="modal" v-if='modalCarrinho' tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="overflow-y: scroll; height: 500px; max-height:85%;  margin-top: 50px; margin-bottom:50px;" >
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title"></h3>
                </div>
                <div class="modal-body">
                  <cart-component></cart-component>
                </div>
                <div class="modal-footer">
                      <md-button class="md-raised md-accent" @click="modalCarrinho = !modalCarrinho" >Back</md-button>
                      <md-button class="md-raised md-warn" @click="limparCarrinho()" >Clear Cart</md-button><md-button class="md-raised md-primary">Payment</md-button>
                </div>

            </div>
        </div>
      </div>


      <b-row>
          <b-col cols="9">
            <aside class="aside-oferta">

                <md-boards class="md-transparent" style="margin: 0px 0px 0px 0px; " :md-controls="true">
                  <md-board id="slide1">
                    <article class="text">
                      <hgroup>
                          <h1> Importance of Writing Clean Code </h1>
                          <h2 style="font-size:16px;"> Autor: <strong> Mohit Rajput </strong></h2>
                      </hgroup>


                          <p> <em>“Programming is an art of telling another human what one wants the computer to do.” </em> <br>
                            <cite> -Donald Knuth</cite>
                          </p>
                          <p>
                            If you speak well, people will love to listen to you. Communication is an art which either can make someone fall in love with you or can give you critics. Similarly in the world of programming. If you write horrible code, you will not be able to tell another programmer why you had written it. It’s a harsh reality that you work under the pressure of deadlines which makes for hastily written code. But keep this fact in mind, a badly written codebase is going to make your life more difficult...
                            <a href="https://dev.to/mohitrajput987/importance-of-writing-clean-code">Ler mais</a>
                          </p>

                    </article>
                  </md-board>
                  <md-board id="slide2">
                    <p>Lorem ipsum doldflasdjflaskdjflasdjlor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
                  </md-board>
                </md-boards>
            </aside>
          </b-col  >
          <b-col cols="3" >
            <aside class="aside-adsense"style="text-align: center">

                <h3 class="md-subtitle" >
                    Links Patrocinados
                </h3>
                <div class="thumbnail product-box">
                  <a href="https://github.com/dionmaicon" target="_blank">
                    <img src="loja/assets/img/github.png"  target="_blank" alt="GitHub Banner" />
                  </a>
                  <hr>
                  <div class="">

                  </div>
                <a href="https://www.americanas.com.br" target="_blank" >
                  <img src="loja/assets/img/americanasblack.png"   alt="Americanas Banner" />
                </a>
                </div>
            </aside>

          </b-col>

      </b-row>

      <main>
        <b-row style=" float:center">
        <b-col class="viewProducts" >
            <view-products-component v-bind:logado="logado"></view-products-component>
        </b-col>
        </b-row>
      </main>

    </b-container>
    <md-button v-if="logado" class="fab"> <i class="fa fa-shopping-cart" @click="modalCarrinho = !modalCarrinho"></i></md-button>
    <footer-component></footer-component>
  </div>
</template>

<script>
import ViewProductsComponent from './view-products-component';
import ToolbarComponent from './toolbar-component';
import FooterComponent from './footer-component';
import UserComponent from './user/formuser-component';
import LoginComponent from './user/formlogin-component';
import CartComponent from './cart/cart-component';
import DetailComponent from './produto/detailproduct-component';
import MenuComponent from './menu-component';

export default {
  name: 'home',
  data:()=>{
    return{
      admin: false,
      logado: false,
      username: '',
      message: null,
      modalShow: false,
      modalLogin: false,
      modalCadastrar: false,
      modalCarrinho: false,
      modalAdminLogin: false,
      product: {}
    }
  },
  methods:{
    verDetalhes:function(code_product){

      this.axios.get("http://localhost:3000/produtos/"+code_product)
      .then( (response) => {
       this.product.name = response.data.name;
       this.product.description = response.data.description;
       this.product.picture = "";
       this.product.image = response.data.image;
       this.product.price = response.data.price;
       this.product.quantity = response.data.quantity;
       this.product.category_name = response.data.category_name;
       this.product.code_product = response.data.code_product;
       this.modalShow = !this.modalShow;

      })
      .catch((error) => {
        console.log(error);
      });


    },
    login(){
      this.modalLogin = !this.modalLogin;
    },
    cadastrar(){
      this.modalCadastrar = !this.modalCadastrar;
    },
    logout(){
      let response = confirm('Deseja realmente sair?');
      if(response){
        this.logado = false;
        this.username = '';
        localStorage.removeItem('login');
      }
    },
    adminLogout(){
      let response = confirm('Deseja realmente sair?');
      if(response){
        localStorage.removeItem('admin');
      }
    },
    limparCarrinho(){

      Eventos.$emit('limparCarrinho');
      this.modalCarrinho = !this.modalCarrinho;
    }
  },
  created(){
    Eventos.$on('verDetalhes', (code_product) => {
      this.verDetalhes(code_product);
    }),
    Eventos.$on('login', (message) => {
      if(message){
        this.message = message;
      }
      this.login();
    }),
    Eventos.$on('logout', () => {
      this.logout();
    }),
    Eventos.$on('cadastrar', () => {
      this.cadastrar();
    }),
    Eventos.$on('cancelar', () => {
      if(this.modalCadastrar) this.modalCadastrar = !this.modalCadastrar;
      if(this.modalLogin) this.modalLogin = !this.modalLogin;
      if(this.modalAdminLogin) this.modalAdminLogin = !this.modalAdminLogin;
    }),
    Eventos.$on('logar', () => {
      if(this.modalLogin) this.modalLogin = !this.modalLogin;
      this.logado = true;
    }),
    Eventos.$on('adminLogin', () => {
      if(this.modalAdminLogin) this.modalAdminLogin = !this.modalAdminLogin;
      this.modalAdminLogin = !this.modalAdminLogin;
    }),
    Eventos.$on('adminLogout', () => {
      this.adminLogout();
    })
  },
  components: {
    'view-products-component': ViewProductsComponent,
    'toolbar-component': ToolbarComponent,
    'footer-component': FooterComponent,
    'user-component': UserComponent,
    'login-component': LoginComponent,
    'cart-component': CartComponent,
    'detail-component': DetailComponent,
    'menu-component': MenuComponent
  },
  beforeMount(){
    let user = JSON.parse(localStorage.getItem('login'));
    if(user != null){
      if(user.login){
        this.logado = true;
        this.username = user.username;
      }
    }

  }
}
</script>

<style lang="css">
 li.menulist{
   display: inline;
   color: #FFF;
 }
 #app{
 }
 .vieProducts{
 -moz-transform: scale(0.8, 0.8); /* Moz-browsers */
    zoom: 0.8; /* Other non-webkit browsers */
    zoom: 80%; /* Webkit browsers */
}
.modal{
    display: block !important; /* I added this to see the modal, you don't need this */
    width: 100%;
    z-index: 2;
}

/* Important part */
.modal-dialog{
    overflow-y: initial !important;
    min-width: 95%;
    max-width: 1000px;
}
.modal-body{
    max-height: 500px;
    width:  auto;
    overflow-y: auto;
}

.fab {
   width: 75px;
   height: 75px;
   background-color: black;
   border-radius: 50%;
   box-shadow: 0 6px 10px 0 #666;
   transition: all 0.1s ease-in-out;
   z-index: 3;

   font-size: 50px;
   color: white;
   text-align: center;
   line-height: 70px;

   position: fixed;
   right: 25px;
   bottom: 50px;
}

.fab:hover {
   box-shadow: 0 6px 14px 0 #666;
   transform: scale(1.05);
   color: black;
}

</style>
