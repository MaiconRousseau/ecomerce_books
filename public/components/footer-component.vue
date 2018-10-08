<template >
  <div id="footer" class="rodape">
  <b-row>
    <b-col cols="12"  >
      <p style="text-align: center"><md-button type="button" name="button"  class=" md-accent" ><i class="fa fa-download" aria-hidden="true"> Download</i></md-button></p>
      <b-row style="background-color: #FFF">

        <b-col cols="4" class="footerLeft">
          <div class="footerLeft_text">


          <strong>Nossa localização</strong>
            <p>Ponta Grossa</p>

          <details >
            <p>
                Av. Julia Wanderley, 1190<br />
                BR, Brasil<br />
                Tel: (54) 99145-1740<br>
            </p>
          </details>
          2018 tryus.software | All Right Reserved
          </div>
        </b-col >

          <b-col cols="4"  class="footerCenter">

              <strong>Siga e curta nossas redes sociais</strong>
              <hr>
              <a href="#"><i class="fa fa-facebook-square fa-3x "></i></a>
              <a href="https://twitter.com/_dionmaicon"><i class="fa fa-twitter-square fa-3x "></i></a>
              <a href="#"><i class="fa fa-google-plus-square fa-3x c"></i></a>
              <a href="https://linkedin.com/in/dionmaicon"><i class="fa fa-linkedin-square fa-3x "></i></a>
              <a href="#"><i class="fa fa-pinterest-square fa-3x "></i></a>
              <p>
                Desenvolvido por @dionmaicon
              </p>

          </b-col>


      </b-row>
      <b-row>
        <b-col style="text-align: center; color: #FFF" cols="12">
                &copy; 2018 | &nbsp; All Rights Reserved |  &nbsp; Email us: dionmaicon@outlook.com
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
