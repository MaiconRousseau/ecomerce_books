<template >
  <div id="about">
    <header>
        <toolbar-component v-bind:logado="logado"></toolbar-component>
    </header>
    <menu-component></menu-component>
    <b-container class="bv-example-row">
      <b-row style="margin-top: 3px">
        <nav class="home-nav" style="text-align: center; position: relative; width: 100%; z-index: 2; border: 1px solid black; display: block;  background-color: #285C2B" >
          <li  class="menulist" ><router-link to="/">Home </router-link></li>
          <li class="menulist" ><router-link  to="/about"> <strong style="color: white">About </strong></router-link></li>
          <li style="color: white" class="menulist" ><router-link to="/contact">Contact </router-link></li>
        </nav>
      </b-row>

      <b-row>
          <b-col cols="12">
            <aside class="aside-oferta">
              <main>
                <h1>Sobre Nós</h1>

                <p>Somos uma loja virtual que vende livros de Tecnologia da Informação.</p>
              </main>

            </aside>
          </b-col  >
      </b-row>

      <main>
        <b-row>

        </b-row>
      </main>


    </b-container>

    <footer-component></footer-component>

  </div>
</template>

<script>
import ToolbarComponent from './toolbar-component';
import FooterComponent from './footer-component';
import MenuComponent from './menu-component';

export default {
  name: 'about',
  data:()=>({
    logado: false
  }),
  components: {
    'toolbar-component': ToolbarComponent,
    'footer-component': FooterComponent,
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
main{
   text-align: center;
}
</style>
