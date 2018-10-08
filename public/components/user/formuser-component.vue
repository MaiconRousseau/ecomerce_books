<template lang="html">

    <form class="formuser" id="myForm" @submit.stop.prevent="validate" enctype="application/json">
      <h1 style="text-align: center"> {{title}} </h1>
      <md-input-container>
        <label for="username">Username:</label><md-input name="username" maxlength="15" v-model="user.username" required placeholder="Type Username"> </md-input>
      </md-input-container>
      <md-input-container>
        <label for="name">Name:</label><md-input name="name" maxlength="70" v-model="user.name" required placeholder="Type your name"> </md-input>
      </md-input-container>
      <md-input-container>
    </label><md-input name="cpf" v-mask="'###.###.###-##'"  v-model="user.cpf" required placeholder="Type your DOC(CPF)"></md-input>
    </md-input-container>
        <md-input-container>
        </label><md-input name="email"  v-model="user.email" type="email" required placeholder="Type your email"> </md-input>
        </md-input-container>
        <md-input-container>
      </label><md-input name="password" type="password" v-model="user.password" required placeholder="Type your Password"> </md-input>
      </label><md-input name="password_repeat" type="password" v-model="passwordRepeat"  required placeholder="Re-type your Password"> </md-input>
      <p  style="color: red" v-if="passwordRepeat == null"> As senhas não são iguais.</p>
      </md-input-container>
      <div style="text-align: right" class="actionButtons">
        <md-button  class="md-raised md-warn" @click="cancel">Cancel</md-button>
        <md-button  class="md-raised md-primary" type="submit" name="button">Send</md-button>
      </div>

    </form>

</template>

<script>
export default {
  props: ['code_user'],
  name:'formuser',
  data:()=> ({
    title: "Create Account",
    valid: false,
    passwordRepeat: '',
    user:{
      name: "",
      username: '',
      cpf: '',
      email: '',
      password : ''
    }
  }),
  methods:{
    sendForm(){
        if(this.valid){
        let user = {name: this.user.name, username: this.user.username, cpf: this.user.cpf, password: this.user.password, email: this.user.email};
        this.axios.post("http://localhost:3000/users", user, {
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(function (response) {
            Eventos.$emit('cancelar');
            Eventos.$emit('login', "Usuário Cadastrado com Sucesso!");
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    },
    validate(){
      if(this.user.password == this.passwordRepeat){
        this.valid = true;
        this.sendForm();
      }else{
        this.valid = false;
        this.passwordRepeat = null;
      }
    },
    cancel(){
      Eventos.$emit('cancelar');
    }
  }
}
</script>

<style lang="css">


</style>
