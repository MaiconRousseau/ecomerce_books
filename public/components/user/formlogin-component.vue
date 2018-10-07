<template lang="html">
  <div class="form">
      <h1 v-if="admin"> Bem-Vindo Admin 121</h1>
      <form class="formLogin" @submit.stop.prevent="logar" enctype="application/json" >
        <p v-if="error" style="color: red">{{error}}</p>
        <label for="username">Username:</label><input  v-model="username" required type="text" name="username" value=""><br>
        <label for="password">Password:</label><input v-model="password" required type="password" name="password" value=""><br>
        <md-button class="md-raised md-warn" @click="cancel" >Cancelar</md-button>
        <md-button class="md-raised md-primary" type="submit" >Login</md-button>
      </form>
  </div>
</template>

<script>
export default {
  title: 'Login',
  props:['admin'],
  data:()=>({
    username: '',
    password: '',
    error: null
  }),
  methods:{
    logar(){
      if(!this.admin){
        let parameters = {username: this.username, password:this.password};
        Vue.axios.post("http://localhost:3000/login", parameters)
        .then((response)=>{
          this.error = "Usuário ou senha incorretos";
          if(response.login == false){
            this.error = "Usuário ou senha incorretos";
          }else{
              let login = {username: this.username, login: true}
              localStorage.setItem('login', JSON.stringify(login));
              Eventos.$emit('logar');
          }
        })
        .catch((error)=>{
          this.error = "Não foi possivel buscar o usuário, ERRO INTERNO";
          console.log(error);
        });
      }else{
        if(this.username == "dion" && this.password == "admin"){
          let login = {username: this.username, login: true}
          localStorage.setItem('admin', JSON.stringify(login));
          alert("Admin Login Sucesso!");
          Eventos.$emit('loginAdmin');
          this.$router.push('/');
        }else{
          this.error = "Está não é uma conta admin";
        }
      }

    },
    cancel(){
      Eventos.$emit('cancelar');
    }
  }
}
</script>
<style lang="css">
.form {
  text-align: center;

}
.form md-button{
  float:  right;

}
</style>
