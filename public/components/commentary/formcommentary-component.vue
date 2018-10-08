<template lang="html">
  <form class="formCommentary" @submit.stop.prevent="enviar" enctype="application/json" >
    <p v-if="error" style="color: red">{{error}}</p>
    <md-input-container>
        <label for="commentary">Comentário: </label><br>
        <md-textarea v-model="description" required type="text" placeholder="Leave your Comments" name="commentary" rows="6" required></md-textarea>

    </md-input-container>
    <md-button style="float: right"class="md-raised md-primary"  type="submit" >Send Commentary</md-button>
  </form>
</template>

<script>
export default {
  title: 'Comment',
  props:['code_product', 'username'],
  data:()=>({
    description: null,
    error: null
  }),
  methods:{
    enviar(){
      let parameters = {username: this.username, code_product: this.code_product, description: this.description};
      Vue.axios.post("http://localhost:3000/comentarios", parameters)
      .then((response)=>{
        alert("Obrigado pela seu comentário");
        console.log('response'+response.data);
      })
      .catch((error)=>{

      });

    },
    cancel(){
      Eventos.$emit('cancelar');
    }
  }
}
</script>

<style lang="css">
</style>
