<template>
	<md-toolbar style="background-color: #202621; border: 1px solid yellow">
		<md-button class="md-icon-button" @click="openMenu">
			<md-icon>menu</md-icon>
		</md-button>

  		<h2 class="md-title" style="flex: 1"> <router-link style="color: white" to="/"><strong>Book</strong> Store </router-link></h2>

	  	<md-menu>
			<md-input-container>
				<i class="material-icons">search</i><md-input type="text" @change="search()" v-model="searchterm"   placeholder="Pesquisar.." ></md-input>
			</md-input-container>

			<md-button v-if="logado" md-menu-trigger>Bem-vindo {{procurarNome()}} </md-button>
			<md-button v-if="!logado" md-menu-trigger>Área do Cliente</md-button>

		  <md-menu-content>
		    <md-menu-item v-if="!logado" @click="cadastrar()">Cadastrar</md-menu-item>
		    <md-menu-item v-if="!logado "@click="login()">Entrar</md-menu-item>
				<md-menu-item v-if="logado"@click="logout()">Sair</md-menu-item>
		  </md-menu-content>
		</md-menu>
	</md-toolbar>

</template>


<script>
	export default {
		props: ['logado'],
		data(){
			return {
				searchterm:"",
			}
		},
		methods: {
			procurarNome(){
				let user = JSON.parse(localStorage.getItem('login'));
				return user.username;
			},
			openMenu(){
	      Eventos.$emit('abrir');
	    },
			search(){
				Eventos.$emit('pesquisarEmProdutos',this.searchterm);
			},
			login(){
				Eventos.$emit('login');
			},
			cadastrar(){
				Eventos.$emit('cadastrar');
			},
			logout(){
				Eventos.$emit('logout');
			}
		}
	}
</script>
