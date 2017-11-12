<template >
  <div id="footer" class="rodape">
  <b-row>
    <b-col cols="12"  >
      <p style="text-align: center"><md-button type="button" name="button"  class=" md-accent" ><i class="fa fa-download" aria-hidden="true"> Download</i></md-button></p>
      <b-row style="background-color: #FFF">

        <b-col cols="4" class="footerLeft">
          <div class="footerLeft_text">


          <strong>Nossa localização</strong>
            <p>UTPFR Ponta Grossa</p>

          <details >
            <p>
                Rua Cel. Pinheiro Machado 255<br />
                BR, Brasil<br />
                Tel: (42) 9912323-2323<br>
            </p>
          </details>
          2014 utfpr.edu.br | All Right Reserved
          </div>
        </b-col >

          <b-col cols="4"  class="footerCenter">

              <strong>Siga e curta nossas redes sociais</strong>
              <hr>
              <a href="#"><i class="fa fa-facebook-square fa-3x "></i></a>
              <a href="#"><i class="fa fa-twitter-square fa-3x "></i></a>
              <a href="#"><i class="fa fa-google-plus-square fa-3x c"></i></a>
              <a href="#"><i class="fa fa-linkedin-square fa-3x "></i></a>
              <a href="#"><i class="fa fa-pinterest-square fa-3x "></i></a>
              <p>
                Desenvolvido para a disciplina de Web
              </p>

          </b-col>


      </b-row>
      <b-row>
        <b-col style="text-align: center; color: #FFF" cols="12">
                &copy; 2017 | &nbsp; All Rights Reserved |  &nbsp; Email us: dionmaicon@tryus.software
        </b-col>
      </b-row>
  </b-col>
</b-row>

  </div>
</template>

<script>
export default {
  name: "footer",
  data:()=>{
    return{
      test:"Footer is working",
    }
  }
}
</script>

<style lang="css">
.rodape {
  background-color: #202621;
  border: 1px solid yellow;
  overflow: hidden;
}
.footerCenter {
  text-align: center;
}
.footerRight {
  text-align: center;
}
.footerLeft_text {
  text-align: left;
  margin: 5px;
}
</style>
