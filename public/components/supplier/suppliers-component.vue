<template lang="html">

  <div id="fornecedores" >
    <header style="position: fixed; width: 100% ; z-index: 3;">
        <!--  <toolbar-component v-bind:logado="logado" ></toolbar-component> -->
        <toolbar></toolbar>
    </header >

    <menu-component></menu-component>
    <div class="container" style="border: 1px solid black">
      <b-row >
        <canvas id="space" width="50" height="65">
            Espaço para publicidade
        </canvas>
        <nav class="home-nav" style="text-align: center; position: relative; width: 100%; z-index: 2; border: 1px solid black; display: block;  background-color: #000" >
          <li  class="menulist" ><router-link to="/">             <span style="color: #FFF">    Home          </span> </router-link></li>
          <li  class="menulist" ><router-link to="/clientes">     <span style="color: #FFF">  Clientes      </span></router-link></li>
          <li  class="menulist" ><router-link to="/produtos">     <span style="color: #FFF">  Produtos      </span> </router-link></li>
          <li  class="menulist" ><router-link to="/fornecedores"> <strong style="color: white">    Fornecedores  </strong></router-link></li>
        </nav>
      </b-row>
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
              <form-supplier  v-bind:code_supplier="code_supplier"></form-supplier>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <!-- ------------------------------------------------------------------------------------------- -->
       <md-table md-sort="suppliers">
       <md-table-header>
         <md-table-row>
           <md-table-head md-sort-by="code_supplier">Código</md-table-head>
           <md-table-head md-sort-by="name" >Título</md-table-head>
           <md-table-head md-sort-by="cnpj" >CNPJ</md-table-head>
           <md-table-head >Editar / Deletar</md-table-head>
         </md-table-row>
       </md-table-header>

       <md-table-body>
         <md-table-row v-for="supplier in suppliers"  :key="supplier._id">
           <md-table-cell name="code_supplier">{{supplier.code_supplier}}</md-table-cell>
           <md-table-cell>{{supplier.name}}</md-table-cell>
           <md-table-cell>{{supplier.cnpj}}</md-table-cell>
           <md-table-cell>
             <md-button class="md-raised md-primary" @click="updateSupplier(supplier.code_supplier)" md-tolltip="Editar" name="edit_button"><i class="material-icons">mode_edit</i>Update</md-button>
             <md-button class="md-raised md-warn" md-tooltip="Deletar" name="delete_button"><i @click="deletar(supplier.name)" class="material-icons">delete</i>Delete</md-button>
             </md-table-cell>
         </md-table-row>
       </md-table-body>
     </md-table>
    </div>
    <footer-supplier></footer-supplier>
  </div>
</template>

<script>
import FormSupplierComponent from './formsupplier-component';
import AdminToolbarComponent from '../adminlayout/admintoolbar-component';
import AdminFooterComponent from '../adminlayout/adminfooter-component';
import MenuComponent from '../menu-component';
export default {
  name: "fornecedores",
  data:()=>({
      modalShow: false,
      message: '',
      title:"Administrar Fornecedores",
      suppliers: [],
      code_supplier: null
  }),
  methods:{
    atualizarLista(){
      this.axios.get('http://localhost:3000/fornecedores')
        .then((response) => {
          this.suppliers = response.data;
        })
        .catch((error) => {
          console.log("Ocorreu um erro ao buscar fornecedores"+ error);
        });
    },
    updateSupplier(code_supplier){
      this.code_supplier = code_supplier;
      this.modalShow = !this.modalShow;
    },
    cancelar(){
      this.modalShow = !this.modalShow;
      this.code_supplier = null;
    },
    deletar(name){
      confirm("Deseja realmente excluir o Fornecedor: " + name);
    }
  },
  components:{
    'form-supplier' : FormSupplierComponent,
    'toolbar': AdminToolbarComponent,
    'footer-supplier': AdminFooterComponent,
    'menu-component': MenuComponent
  },
  created(){
    Eventos.$on('atualizarLista', (message) => {
      this.modalShow = !this.modalShow;
      this.code_supplier = null;
      this.message = message;
      this.atualizarLista();
    });
    Eventos.$on('cancelar', () =>{
      this.cancelar();
    });
  },
  beforeMount(){
    this.axios.get('http://localhost:3000/fornecedores')
      .then((response) => {
        this.suppliers = response.data;
      })
      .catch((error) => {
        this.message = "Ocorreu um erro ao buscar em fornecedores"+ error;
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
