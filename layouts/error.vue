<template>
  <div>
    <banner-component text="Page Not Found"></banner-component>
    <div class="container mt-5 mb-5">
      <h1>Sorry :-(</h1>
      <p>The page you are looking for does not exist. Return to the <nuxt-link to="/">Home page</nuxt-link></p>
    </div>
  </div>
</template>

<script>
  import BannerComponent from '~/components/BannerComponent.vue';
  export default {
    components: {
      BannerComponent
    }
  }
</script>