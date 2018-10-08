<template>
	<div>
		<nav class="categoias" aria="Categorias" style="text-align: center">
		<md-button type="button" @click="changeCategory('Data Science')" name="button">Data Science</md-button><md-button type="button" @click="changeCategory('Engenharia de Software')" name="button">Engenharia de Software</md-button><md-button type="button" @click="changeCategory('Sistemas Operacionais')" name="button">Sistemas Operacionais</md-button><md-button type="button" @click="changeCategory('Redes')" name="button">Redes</md-button></md-button>
		</nav>
		<md-layout>
			<div v-for="product in products"  :key="product._id">
	      <md-layout md-flex="33" style="margin: 1px 1px 1px 1px">
			  	<product-component
	        v-bind:description="product.description" v-bind:id="product._id.toString()" v-bind:code_product="product.code_product"
	        v-bind:price="product.price" v-bind:name="product.name" v-bind:category_name="product.category_name"
	        v-bind:image="product.image" v-bind:category_id="product.category_id"
	        >
	      </product-component>
	    </md-layout>
		 </div>
 </md-layout>
	</div>
</template>

<script>

	import ProductComponent from './product-component.vue';
	import lodash from "lodash";

	export default {
		props:['logado'],
    name:"view-products-component",
		data:()=>{
	       return {
           products: [],
					 allProducts: [],
					 test: 'nata',
					 cart:{
						 products:[],
						 total: 0,
						 token: 'HUK573JHJB'
					 }
         }
	  },
		methods: {
		    adicionarAoCarrinho: function(code_product) {

					let cart = JSON.parse(localStorage.getItem('cart'));

					if(cart == null){
						localStorage.setItem('cart', JSON.stringify(this.cart.products));
					}

					let produto;
						this.axios.get("http://localhost:3000/produtos/"+code_product, {
      					headers: { 'Content-Type': 'application/json' }
    					})
							.then((response) => {
								produto  = response.data;
								this.cart.products = JSON.parse(localStorage.getItem('cart'));

								let achou = false;
								for (var i = 0; i < this.cart.products.length; i++) {
									if (this.cart.products[i].name  == produto.name){
										this.cart.products[i].unidades += 1;
										achou = true;
										break;
									}
								}
								if(!achou){
										produto.unidades = 1;
										this.cart.products.push(produto);
								}

								alert("Produto Adicionado ao Carrinho");
								localStorage.setItem('cart', JSON.stringify(this.cart.products));

			        })
			        .catch((error) => {
			          console.log("Um erro ocorreu ao buscar produtos"+ error);
			        });
		    },
				changeCategory(category){
					this.products = this.allProducts.filter(product => product.category_name == category);
				},
				pesquisarEmProdutos(consulta){
					this.products = this.allProducts.filter(product => product.name.includes(consulta));
				},
				limparCarrinho(){
					localStorage.removeItem('cart');
					this.cart.products = [];
					alert("O Carrinho está limpo!")
				}
		},
		beforeMount(){
      this.axios.get('http://localhost:3000/produtos')
        .then((response) => {
          console.log(response.data);
					this.allProducts = response.data;
          this.products = response.data;
        })
        .catch((error) => {
          console.log("Um erro ocorreu ao buscar produtos"+ error);
        });
				this.cart.products = JSON.parse(localStorage.getItem('cart'));
				if (this.cart.products == null) {
					localStorage.setItem('cart', JSON.stringify([]));
				}
	  },
		created() {
			Eventos.$on('adicionarAoCarrinho', (code_product) => {
				if(this.logado){
						this.adicionarAoCarrinho(code_product);
				}else{
					Eventos.$emit('login');
				}

			}),
			Eventos.$on('limparCarrinho', () => {
				this.limparCarrinho();
			}),
			Eventos.$on('pesquisarEmProdutos', (consulta) => {
				this.pesquisarEmProdutos(consulta);
			})
		},
		components: {
      'product-component': ProductComponent
  	}
	}
</script>
