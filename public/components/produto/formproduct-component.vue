<template lang="html">

    <form class="formproduct" id="myForm" @submit.stop.prevent="sendForm" enctype="multipart/form-data">
      <md-input-container >
      <label for="category_name">Category</label>
      <md-select name="category_name"  required id="category_name" v-model="product.category_name">
        <md-option style="z-index: 2" v-for="category in categories"  :key="category.category_name" :value="category.category_name" >{{category.category_name}}</md-option>
      </md-select>
      </md-input-container>
      <md-input-container>
        <label for="name">Name:</label><md-input name="name" maxlength="70" v-model="product.name" required placeholder="Type product name"> </md-input>
        <md-input name="code_product" maxlength="70" v-model="product.code_product" required placeholder="Type product code of product"> </md-input>
      </md-input-container>
      <md-input-container>
      <label for="description">Description:</label><md-textarea maxlength="250" v-model="product.description" name="description" required placeholder="Type description"> </md-textarea>
      </md-input-container>
      <md-input-container>
        <label>Add an Image for product</label>
        <md-file v-on:input="fileCheck()" id="picture" v-model="product.picture" required accept="image/*"></md-file>
      </md-input-container>
      <md-input-container>
      </label><md-input name="price" v-model="product.price" min="10"  max="200" type="number" required placeholder="Type price for sale"> </md-input>
      <md-input  type="number" min="1" v-model="product.quantity" max="50" name="quantity" required placeholder="Type a quantity in stock"> </md-input>
      </md-input-container>

      <md-button class="md-raised md-primary" type="submit" name="button">Enviar</md-button>
    </form>

</template>

<script>
export default {
  name:'formproduct',
  data:()=> ({
    title: "Create Product",
    valid: false,
    categories:[],
    product:{
      name: "",
      description:"",
      picture: null,
      price: 10,
      quantity:1,
      category_name:"",
      code_product:"HUS8907"
    }
  }),
  methods:{
    fileCheck(){
      if (typeof FileReader !== "undefined") {
        let size = document.getElementById('picture').files[0].size;
        size = size/1000000;
        if (size <= 1) {
          this.valid = true;
        }else{
          console.log("File should be less than 1mb");
          this.valid = false;
        }

      }
    },
    sendForm(){
      if(this.valid){
        var myForm = document.getElementById('myForm');
        var formData = new FormData(myForm);
        formData.append('picture', document.getElementById('picture').files[0]);
        console.log(formData);
        axios.post("http://localhost:3000/produtos", formData , {
            headers:{
              'Content-Type': 'multipart/form-data'

            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  },
  created:function(){
    this.categories = [
      {category_name: "Engenharia de Software", description:"Livros de Engenharia de Software"},
      {category_name: "Sistemas Operacionais", description:"Livros de Sistemas Operacionais"},
      {category_name: "Data Science", description:"Livros de Data Science"},
      {category_name: "Redes", description:"Livros de redes de computadores"}
    ]
  }

}
</script>

<style lang="css">


</style>
