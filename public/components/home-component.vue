<template >
  <div id="home">

    <header style="position: fixed; width: 100% ; z-index: 3;">
        <toolbar-component ></toolbar-component>
    </header >


    <b-container class="bv-example-row" >
      <b-row >
        <canvas id="space" width="50" height="85">
            Espaço para publicidade
        </canvas>
        <nav class="home-nav" style="text-align: center; position: relative; width: 100%; z-index: 2; border: 1px solid yellow; display: block;  background-color: #202621" >
          <li class="menulist" ><router-link to="/">Home</router-link></li>
          <li class="menulist" ><router-link to="/about">About</router-link></li>
          <li class="menulist" ><router-link to="/contactus">Contact Us</router-link></li>
        </nav>
      </b-row>
      <b-row>
          <b-col cols="9" style="border: 2px solid red">
            <aside class="aside-oferta">

                <md-boards class="md-transparent" style="margin: 0px 0px 0px 0px; " :md-controls="true">
                  <md-board id="slide1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
                  </md-board>
                  <md-board id="slide2">
                    <p>Lorem ipsum doldflasdjflaskdjflasdjlor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
                  </md-board>
                </md-boards>
            </aside>
          </b-col  >
          <b-col cols="3" style="border: 1px solid green">
            <aside class="aside-adsense">
                <canvas id="canvas" width="50" height="300">
                    Espaço para publicidade
                </canvas>
            </aside>

          </b-col>

      </b-row>

      <main>
        <b-row>
        <b-col cols="2" style="border: 1px solid red">
            <section class="promocao">
              <p v-if="admin"> Admin</p>
              <p v-else> Categorias</p>
            </section>
        </b-col>
        <b-col class="viewProducts" style="border: 1px solid black">
            <view-products-component></view-products-component>
        </b-col>
        </b-row>
      </main>
    </b-container>
    <footer-component></footer-component>
  </div>
</template>

<script>
import ViewProductsComponent from './view-products-component';
import ToolbarComponent from './toolbar-component';
import FooterComponent from './footer-component';

export default {
  name: 'home',
  data:()=>{
    return{
      admin: false
    }
  },
  components: {
    'view-products-component': ViewProductsComponent,
    'toolbar-component': ToolbarComponent,
    'footer-component': FooterComponent
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
</style>
