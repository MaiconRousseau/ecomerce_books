<template lang="html">

  <div id="produtos" >
    <toolbar></toolbar>
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

          <div class="modal-header">
            <slot name="header">
              Criar Novo Produto
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <formproduct></formproduct>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="modalShow = !modalShow">

              </button>
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
             <md-button class="md-raised md-primary" md-tolltip="Editar" name="edit_button"><i class="material-icons">mode_edit</i>Update</md-button>
             <md-button class="md-raised md-warn" md-tooltip="Deletar" name="delete_button"><i class="material-icons">delete</i>Delete</md-button>
             </md-table-cell>
         </md-table-row>
       </md-table-body>
     </md-table>
    </div>
  </div>
</template>

<script>
import FormProductComponent from './formproduct-component';
import AdminToolbarComponent from '../adminlayout/admintoolbar-component';

export default {
  name: "produtos",
  data:()=>{
    return {
      modalShow: false,
      title:"Administrar Produtos",
      products: [],
    }
  },
  components:{
    'formproduct' : FormProductComponent,
    'toolbar': AdminToolbarComponent
  },
  created(){
    console.log("Ta aqui");
  },
  beforeMount(){
    axios.get('http://localhost:3000/produtos')
      .then((response) => {
        console.log(response.data);

        this.products = response.data;
      })
      .catch((error) => {
        console.log("Um erro ocorreu ao buscar produtos"+ error);
      });
  },

}

</script>

<style lang="css">

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
