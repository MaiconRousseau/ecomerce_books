<template>
	<md-toolbar style="background-color: #202621; border: 1px solid yellow">
		<md-button class="md-icon-button" @click="openMenu">
			<md-icon>menu</md-icon>
		</md-button>

  		<h2 class="md-title" style="flex: 1"> <router-link style="color: white" to="/"><strong>Book</strong> Store </router-link></h2>

	  	<md-menu>
			<md-input-container>
				<i class="material-icons">search</i><md-input type="text" v-on:change="search()" v-model="searchterm"   placeholder="Pesquisar.." ></md-input>
			</md-input-container>

			<md-button md-menu-trigger>Área do Cliente</md-button>

		  <md-menu-content>
		    <md-menu-item>Cadastrar</md-menu-item>
		    <md-menu-item>Entrar</md-menu-item>
		  </md-menu-content>
		</md-menu>
	</md-toolbar>

</template>


<script>
	export default {
		data(){
			return {searchterm:""}
		},
		methods: {
			openMenu(){
	      		Eventos.$emit('abrir');
	    },
			search(){
				console.log(this.searchterm);
			}
		}
	}
</script>
