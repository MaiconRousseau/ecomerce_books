<template lang="html">

    <form class="formsupplier" id="myForm" @submit.stop.prevent="sendForm" enctype="application/json">
      <h1 style="text-align: center"> {{title}}</h1>
      <md-input-container>
        <label for="name">Name:</label><md-input name="name" maxlength="70" v-model="supplier.name" required placeholder="Type supplier name"> </md-input>
        <md-input name="code_supplier" readonly maxlength="70" v-model="supplier.code_supplier" required placeholder="Type supplier code of supplier"> </md-input>
      </md-input-container>
      <md-input-container>
      </label><md-input name="cnpj" v-model="supplier.cnpj" v-mask="'##.###.###/####-##'" mask="99.999.999/9999-99" required placeholder="Type DOC(CNPJ)"> </md-input>
      </md-input-container>
      <div style="text-align: right" class="actionButtons">
        <md-button  class="md-raised md-warn" @click="cancel">Cancel</md-button>
        <md-button  class="md-raised md-primary" type="submit" name="button">Send</md-button>
      </div>

    </form>

</template>

<script>
export default {
  props: ['code_supplier'],
  name:'formsupplier',
  data:()=> ({
    title: "Create Supplier",
    valid: false,
    supplier:{
      name: "",
      cnpj: '',
      code_supplier:"COD0"
    }
  }),
  methods:{
    sendForm(){
      if(this.valid && this.code_supplier == null){
        console.log(this.supplier);
        let fornecedor = {name: this.supplier.name, cnpj: this.supplier.cnpj, code_supplier: this.supplier.code_supplier};
        console.log("Enviar: "+ enviar);
        this.axios.post("http://localhost:3000/fornecedores", fornecedor, {
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(function (response) {
            console.log(response);
            Eventos.$emit('atualizarLista', "Fornecedor cadastrado com Sucesso!");
          })
          .catch(function (error) {
            console.log(error);
          });
        }else if (this.valid ) {
          this.axios.put("http://localhost:3000/fornecedores/"+this.code_supplier, this.supplier , {
              headers:{
                'Content-Type': 'application/json'
              }
            })
            .then(function (response) {
              console.log(response);
              Eventos.$emit('atualizarLista', "Fornecedor atualizado com Sucesso!");
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    },
    populateForm(){
        this.axios.get("http://localhost:3000/fornecedores/"+this.code_supplier)
        .then( (response) => {
         this.supplier.name = response.data.name;
         this.supplier.cnpj = response.data.cnpj;
         this.supplier.code_supplier = response.data.code_supplier;
        })
        .catch((error) => {
          console.log(error);
        });
        this.title = "Update Supplier";
    },
    cancel(){
      Eventos.$emit('cancelar');
    }
  },
  beforeMount: function(){
    if (this.code_supplier != null) {
      this.populateForm();
    }
  }
}
</script>

<style lang="css">


</style>
