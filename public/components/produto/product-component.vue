<template>

    <md-card flex="25">
      <md-card-media>
      <img class="image" v-if="image" :src="image"  alt="Produto"/>
      </md-card-media>

      <md-card-header>
      <div alt="Título" class="md-title"><strong>{{name}}</strong> </div>
      <div alt="Preço"class="md-subhead"> <strong style="color: red">R$ {{price}}</strong></div>
      </md-card-header>

      <md-card-actions>
      <md-button class="md-raised md-primary"alt="AdicionarAoCarrinho" v-on:click="adicionarAoCarrinho(code_product)">Adicionar ao Carrinho</md-button>
      <md-button class="md-raised md-accent" alt= "Detalhar" v-on:click="verDetalhes(code_product)">Detalhar</md-button>
      </md-card-actions>

      <md-card-content>
        <p alt="Categoria" >Categoria: {{category_name}}</p>
        <p alt="Descricao" >Descrição: {{description}} </p>
      </md-card-content>
    </md-card>

</template>

<script>
	export default {
		props: ['code_product','price','name', 'description', 'image', 'category_name', 'category_id'],
		data: function () {
		  return { checked: this.checked }
		},
		methods : {
			adicionarAoCarrinho(code_product){
				Eventos.$emit('adicionarAoCarrinho', code_product);
        console.log("Adicionando ao Carrinho");
			},
      verDetalhes(){
        //openModal
        console.log("Modal Abrindo");
      },
      converteBase64(data){
        return new Buffer(data, 'binary').toString('base64');
      }
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
