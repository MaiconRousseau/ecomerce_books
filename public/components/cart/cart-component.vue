<template lang="html">
    <div class="carrinho" >
      <div v-if="products.length == 0"class="">
          <h1 style="color: green">Not has items to display..</h1>
      </div>
      <div class="" v-for="product in products">
        <div class="">
          <md-avatar style="float: left; display: inline;"  class="md-large">
              <img :src="product.image" alt="ProductImage"></img>
          </md-avatar>
          <p  >{{product.name}} - Qtd: {{product.unidades}} - Price: R$ {{product.price * product.unidades}} </p> <br>

        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Carrinho",
  data:()=>({
    products: []
  }),
  created(){
    this.products = JSON.parse(localStorage.getItem('cart'));
    this.products = this.products.map((product)=> product);
  }

}
</script>

<style lang="css">
</style>
