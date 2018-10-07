<template lang="html">
  <div id="users" >
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
          <li  class="menulist" ><router-link to="/">     <span style="color: #FFF">    Home          </span> </router-link></li>
          <li  class="menulist" ><router-link to="/clientes">     <strong style="color: white"> Clientes      </strong></router-link></li>
          <li  class="menulist" ><router-link to="/produtos">     <span style="color: #FFF">    Produtos      </span> </router-link></li>
          <li  class="menulist" ><router-link to="/fornecedores"> <span style="color: #FFF">    Fornecedores  </span></router-link></li>
        </nav>
      </b-row>
      <h1 style="text-align: center">{{title}}</h1>
       <md-table md-sort="users">
       <md-table-header>
         <md-table-row>
           <md-table-head md-sort-by="name" >Nome</md-table-head>
           <md-table-head md-sort-by="cnpj" >CPF</md-table-head>
           <md-table-head >Deletar</md-table-head>
         </md-table-row>
       </md-table-header>

       <md-table-body>
         <md-table-row v-for="user in users"  :key="user._id">
           <md-table-cell>{{user.name}}</md-table-cell>
           <md-table-cell>{{user.cpf}}</md-table-cell>
           <md-table-cell>
             <md-button class="md-raised md-warn" md-tooltip="Deletar" @click="deletar(user.name)" name="delete_button"><i class="material-icons">delete</i>Delete</md-button>
             </md-table-cell>
         </md-table-row>
       </md-table-body>
     </md-table>
    </div>
    <footer-user></footer-user>
  </div>
</template>

<script>
import FormUserComponent from './formuser-component';
import AdminToolbarComponent from '../adminlayout/admintoolbar-component';
import AdminFooterComponent from '../adminlayout/adminfooter-component';
import MenuComponent from '../menu-component';

export default {
  name: "users",
  data:()=>({
      message: '',
      title:"Administrar Clientes",
      users: []
  }),
  methods:{
    atualizarLista(){
      this.axios.get('http://localhost:3000/users')
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.log("Ocorreu um erro ao buscar em users"+ error);
        });
    },
    deletar(name){
      confirm("Deseja realmente excluir o Cliente: " + name);
    }
  },
  components:{
    'form-user' : FormUserComponent,
    'toolbar': AdminToolbarComponent,
    'footer-user': AdminFooterComponent,
    'menu-component': MenuComponent
  },
  created(){
    Eventos.$on('atualizarLista', (message) => {
      this.message = message;
      this.atualizarLista();
    });
  },
  beforeMount(){
    this.axios.get('http://localhost:3000/users')
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        this.message = "Ocorreu um erro ao buscar usuários"+ error;
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
</style>
