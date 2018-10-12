<template>
  <div id="services-content">
    <banner-component text="Thank You"></banner-component>
    <section>
      <div class="container mt-5 mb-5">
          <p>Your message has been sent. We will get back to you shortly.</p>
      </div>
    </section>
  </div>
</template>

<script>
  import BannerComponent from '~/components/BannerComponent.vue'
  export default {
    scrollToTop: true,
    components: {
      BannerComponent
    },
    head() {
      return {
        title: 'Thank You'
      }
    }
  }
</script>
