<template>
	<div>
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
    name:"view-products-component",
		data:()=>{
	       return {
           products: [],
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
					let produto;
						axios.get("http://localhost:3000/produtos/"+code_product, {
      					headers: { 'Content-Type': 'application/json' }
    					})
							.then((response) => {
								produto  = response.data;
								this.cart.products = JSON.parse(localStorage.getItem('cart'));
								this.cart.products.push(produto);
								localStorage.setItem('cart', JSON.stringify(this.cart.products));
			        })
			        .catch((error) => {
			          console.log("Um erro ocorreu ao buscar produtos"+ error);
			        });
		    },
		    completeproduct(product) {
		      product.completed = !product.completed;
		      tarefaController.update(product);
		      this.products = lodash.sortBy(tarefaController.lista(), ["descricao"]);
		    },
		    removeproduct(idTarefa) {
		      tarefaController.delete({id:idTarefa});
					list = JSON.parse(localStorage.getItem('list'));
			    let elements = list.filter(function(user){
			      return user.id != params.id;
			    });
			    localStorage.setItem('list', JSON.stringify(elements));
		    }

		},
		beforeMount(){
      axios.get('http://localhost:3000/produtos')
        .then((response) => {
          console.log(response.data);

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
				this.adicionarAoCarrinho(code_product);

			}),
			Eventos.$on('verDetalhes', (code_product) => {
				// this.adicionarAoCarrinho(code_product);
        console.log("Vendo os Detalhes em VIEW "+ code_product);
			})
		},
		components: {
      'product-component': ProductComponent
  	}
	}
</script>
