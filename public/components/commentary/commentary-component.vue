<template lang="html">
  <div class="commentary">
    <md-card style="width: auto">
      <md-title> What <strong>{{username}}</strong>, says about this book:</md-title>
      <p>{{description}}</p>
    </md-card>
  </div>
</template>

<script>
export default {
  props:['username', 'description']
}
</script>

<style lang="css">
</style>
