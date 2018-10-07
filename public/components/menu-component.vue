<template>
	<md-sidenav class="md-left"  ref="leftSidenav">

      <md-toolbar>
	        <h3 class="md-title">Menu</h3>
	    </md-toolbar>
	    <md-list>
	    	<md-list-item>
		        <router-link to="/"><strong style="color: black">Home </strong></router-link>
	      	</md-list-item>

			<md-list-item>
				<router-link to="/about"><strong style="color: black">About </strong></router-link>
			</md-list-item>

			<md-list-item>
				<router-link to="/contact"><strong style="color: black">Contact </strong></router-link>
			</md-list-item>
	    </md-list>

      <md-list v-if="admin">
	    	<md-list-item>
		        <router-link to="/produtos"><strong style="color: black">Products</strong></router-link>
	      	</md-list-item>

			<md-list-item>
				<router-link to="/fornecedores"><strong style="color: black">Suppliers </strong></router-link>
			</md-list-item>

			<md-list-item>
				<router-link to="/clientes"><strong style="color: black">Clients </strong></router-link>
			</md-list-item>
	    </md-list>
      <div class="" style="float: right">
        <md-button v-if="admin" class="md-raised md-warn" @click="adminLogout()">Admin Logout</md-button>
        <md-button v-if="!admin" class="md-raised md-primary" @click="adminLogin()" >Admin Login</md-button>
      </div>
	</md-sidenav>
</template>

<script>
	export default {
    data: ()=>({
        admin: false
    }),
    methods:{
      adminLogin(){
        this.$refs.leftSidenav.toggle();
        Eventos.$emit('adminLogin');
      },
      adminLogout(){
        this.$refs.leftSidenav.toggle();
        this.admin = false;
        Eventos.$emit('adminLogout');

      },
      adminCheck(){
        let user = JSON.parse(localStorage.getItem('admin'));
        if(user != null){
          if(user.login){
            this.admin = true;
          }
        }
      }
    },
    beforeMount() {
			Eventos.$on('abrir', () => {
				this.$refs.leftSidenav.toggle();
        this.adminCheck();
      })
		}
	}
</script>
