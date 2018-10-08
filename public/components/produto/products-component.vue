<template lang="html">

  <div id="produtos" >
    <header style="position: fixed; width: 100% ; z-index: 3;">
        <!--  <toolbar-component v-bind:logado="logado" ></toolbar-component> -->
        <toolbar></toolbar>
    </header >

    <menu-component></menu-component>
    <b-row >
      <canvas id="space" width="50" height="65">
          Espaço para publicidade
      </canvas>
      <nav class="home-nav" style="text-align: center; position: relative; width: 100%; z-index: 2; border: 1px solid black; display: block;  background-color: #000" >
        <li  class="menulist" ><router-link to="/">     <span style="color: #FFF">    Home          </span> </router-link></li>
        <li  class="menulist" ><router-link to="/clientes">     <span style="color: #FFF">      Clientes      </span></router-link></li>
        <li  class="menulist" ><router-link to="/produtos">     <strong style="color: white">    Produtos      </strong> </router-link></li>
        <li  class="menulist" ><router-link to="/fornecedores"> <span style="color: #FFF">      Fornecedores  </span></router-link></li>
      </nav>
    </b-row>
    <div class="container" style="border: 1px solid black">
      <h1 style="text-align: center">{{title}}</h1>
      <md-button class="md-raised md-primary" @click="modalShow = !modalShow">
          Criar Novo
      </md-button>
      <!--  -------------------------------------------------------------------------------- -->
    <transition v-if="modalShow" name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              <form-product  v-bind:code_product="code_product"></form-product>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <!-- ------------------------------------------------------------------------------------------- -->
       <md-table md-sort="products">
       <md-table-header>
         <md-table-row>
           <md-table-head md-sort-by="code_product">Código</md-table-head>
           <md-table-head md-sort-by="name" >Título</md-table-head>
           <md-table-head md-sort-by="quantity" md-numeric>Estoque (Un)</md-table-head>
           <md-table-head md-sort-by="price" md-numeric>Preço</md-table-head>
           <md-table-head >Editar / Deletar</md-table-head>
         </md-table-row>
       </md-table-header>

       <md-table-body>
         <md-table-row v-for="product in products"  :key="product._id">
           <md-table-cell name="code_product">{{product.code_product}}</md-table-cell>
           <md-table-cell>{{product.name}}</md-table-cell>
           <md-table-cell>{{product.quantity}}</md-table-cell>
           <md-table-cell>{{product.price}}</md-table-cell>
           <md-table-cell>
             <md-button class="md-raised md-primary" @click="updateProduct(product.code_product)" md-tolltip="Editar" name="edit_button"><i class="material-icons">mode_edit</i>Update</md-button>
             <md-button class="md-raised md-warn" md-tooltip="Deletar" @click="deletar(product.name)"name="delete_button"><i class="material-icons">delete</i>Delete</md-button>
             </md-table-cell>
         </md-table-row>
       </md-table-body>
     </md-table>
    </div>
    <footer-product></footer-product>
  </div>
</template>

<script>
import FormProductComponent from './formproduct-component';
import AdminToolbarComponent from '../adminlayout/admintoolbar-component';
import AdminFooterComponent from '../adminlayout/adminfooter-component';
import MenuComponent from '../menu-component';

export default {
  name: "produtos",
  data:()=>({
      modalShow: false,
      message: '',
      title:"Administrar Produtos",
      products: [],
      code_product: null
  }),
  methods:{
    atualizarLista(){
      this.axios.get('http://localhost:3000/produtos')
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.log("Ocorreu um erro ao buscar produtos"+ error);
        });
    },
    updateProduct(code_product){
      this.code_product = code_product;
      this.modalShow = !this.modalShow;
    },
    cancelar(){
      this.modalShow = !this.modalShow;
      this.code_product = null;
    },
    deletar(name){
      confirm("Deseja realmente excluir o Produto: " + name);
    }
  },
  components:{
    'form-product' : FormProductComponent,
    'toolbar': AdminToolbarComponent,
    'footer-product': AdminFooterComponent,
    'menu-component': MenuComponent
  },
  created(){
    Eventos.$on('atualizarLista', (message) => {
      this.modalShow = !this.modalShow;
      this.code_product = null;
      this.message = message;
      this.atualizarLista();
    });
    Eventos.$on('cancelar', () =>{
      this.cancelar();
    });
  },
  beforeMount(){
    this.axios.get('http://localhost:3000/produtos')
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        this.message = "Ocorreu um erro ao buscar produtos"+ error;
      });
      let user = JSON.parse(localStorage.getItem('admin'));
      if(user == null){
        this.$router.push('/');
      }
  },

}

</script>

<style lang="css">
li.menulist{
  display: inline;
  color: #FFF;
}
.modal-mask {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: auto;
  max-width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
</style>
