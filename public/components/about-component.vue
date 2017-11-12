<template >
  <div id="about">
    <header>
        <toolbar-component></toolbar-component>
    </header>
    <b-container class="bv-example-row">
      <b-row>
          <b-col cols="12" style="border: 2px solid red">
            <aside class="aside-oferta">
              <p>Somos uma loja virtual que vende livros de Tecnologia da Informação.</p>
            </aside>
          </b-col  >
      </b-row>

      <main>
        <b-row>

        </b-row>
      </main>


    </b-container>


  </div>
</template>

<script>
import ToolbarComponent from './toolbar-component';

export default {
  name: 'about',
  components: {
    'toolbar-component': ToolbarComponent
  }
}
</script>

<style lang="css">
</style>
