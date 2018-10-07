<template>
  <div class="">
    <b-row>
      <b-col   cols="3">

       <img class="image"  style="max-width: 310px; background-color: rgba(255,255,255, 0)" v-if="image" :src="image"  alt="Produto"/>

      </b-col>

      <b-col>

        <div alt="Título" class="md-title"><strong>{{name}}</strong> </div>
        <div alt="Preço"class="md-subhead"> <strong style="color: red">R$ {{price}}</strong></div>
        <p alt="Categoria" > {{category_name}}</p>
        <p alt="Descricao" style="overflow-y: hidden" > {{description}} </p>

        <md-button style="float: right" class=" md-primary"alt="AdicionarAoCarrinho" v-on:click="adicionarAoCarrinho(code_product)"><i class="material-icons">add_shopping_cart</i> Adicionar ao Carrinho</md-button>

      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
      <div class="" v-if="logado">
          <formcommentary-component v-bind:code_product="code_product" v-bind:username="username" ></formcommentary-component>
      </div>
      <div class="" v-if="!logado">
          <p style="color: green">You can log(in) and to comment about this product.</p>
      </div>
    </b-col>
    </b-row>

    <b-row>
      <b-col cols='12'>
      <h1 class="md-title" >Commentaries</h1>
      <div class="" v-if="commentaries.length > 0" v-for="comment in commentaries">
          <commentary-component v-bind:description="comment.description" v-bind:username="comment.username" ></commentary-component>
      </div>
      <div class="" v-if="commentaries.length == 0" >
          <p style="color: green">Not has commentaries to display. Be first!</p>
      </div>
    </b-col>
    </b-row>

  </div>
</template>

<script>
  import CommentaryComponent from '../commentary/commentary-component';
  import FormCommentaryComponent from '../commentary/formcommentary-component';

	export default {
		props: ['logado','username','code_product','price','name', 'description', 'image', 'category_name', 'category_id'],
		data: function(){
      return{
        commentaries:[]
      }
    },
		methods : {
			adicionarAoCarrinho(code_product){
				Eventos.$emit('adicionarAoCarrinho', code_product);
			},
      buscarComentarios(){
        console.log("Buscando Cometarios");
        Vue.axios.get('http://localhost:3000/comentarios')
        .then((response)=>{
          this.commentaries = response.data.filter((comment)=> comment.code_product == this.code_product);
        })
        .catch((error)=>{
          console.log("Não foram localizado comentarios");
        })
      }
		},
    components:{
      'commentary-component': CommentaryComponent,
      'formcommentary-component': FormCommentaryComponent
    },
    beforeMount(){
      this.buscarComentarios();
    }
	}
</script>
<style>
.image {
  max-width: 300px;
  max-height: 270px;
  overflow: hidden;
}

</style>
