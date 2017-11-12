<template>
	<md-toolbar style="background-color: #202621; border: 1px solid yellow">
		<md-button class="md-icon-button" @click="openMenu">
			<md-icon>menu</md-icon>
		</md-button>

  		<h2 class="md-title" style="flex: 1"> <router-link style="color: white" to="/"><strong>Book</strong> Store Admin</router-link></h2>

	  	<md-menu>

			<md-button md-menu-trigger>Área do Administrador</md-button>

		  <md-menu-content>
		    <md-menu-item>Alterar Senha</md-menu-item>
		    <md-menu-item>Logout</md-menu-item>
		  </md-menu-content>
		</md-menu>
	</md-toolbar>

</template>


<script>
	export default {
		methods: {
			openMenu(){
	      		Eventos.$emit('abrir');
	    }
		}
	}
</script>
