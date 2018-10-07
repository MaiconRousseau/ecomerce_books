<template>

    <md-card style="max-width: 310px; background-color: rgba(255,255,255, 0)" >
      <md-card-media>
      <img class="image" v-if="image" :src="image"  alt="Produto"/>
      </md-card-media>

      <md-card-header>
      <div alt="Título" style="text-align: center "class="md-title"><strong>{{name}}</strong> </div>
      <div alt="Preço"class="md-subhead"> <strong style="color: red">R$ {{price}}</strong></div>
      </md-card-header>

      <md-card-actions>
      <md-button class=" md-primary"alt="AdicionarAoCarrinho" v-on:click="adicionarAoCarrinho(code_product)"><i class="material-icons">add_shopping_cart</i></md-button>
      <md-button class=" md-accent" alt= "Detalhar" v-on:click="verDetalhes(code_product)"><i class="material-icons">launch</i></md-button>
      </md-card-actions>

      <md-card-content >
        <p alt="Categoria" > {{category_name}}</p>
        <p alt="Descricao" style="overflow-y: hidden" > {{description}} </p>
      </md-card-content>
    </md-card>

</template>

<script>
	export default {
		props: ['code_product','price','name', 'description', 'image', 'category_name', 'category_id'],
		data: function () {
		  return {
        checked: this.checked,
        modalShow: false
      }
		},
		methods : {
			adicionarAoCarrinho(code_product){
				Eventos.$emit('adicionarAoCarrinho', code_product);
			},
      verDetalhes(code_product){
        Eventos.$emit('verDetalhes', code_product);
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
