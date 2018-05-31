<template>
  <div>
    <navigation/>
    <nuxt/>
    <footer-component/>
  </div>
</template>

<script>
  import Navigation from '~/components/Navigation.vue'
  import FooterComponent from '~/components/FooterComponent.vue'

  export default {
    components: {
      Navigation,
      FooterComponent
    }
  }
</script>

<style lang="scss">
  @import "../scss/_variables.scss";
  @import "../scss/_global.scss";
</style>
