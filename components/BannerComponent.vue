<template>
  <header>
    <div class="lead container">
      <h1>{{ text }}</h1>
    </div>
  </header>
</template>

<script>
  export default {
    props: ['text']
  }
</script>

<style scoped lang="scss">

  @import "~/scss/_variables.scss";

  header {
    background-image: url('~/assets/cairns-cropped-b&w-sm.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
    margin-top: 58px;
    overflow: hidden;
    position: relative;

    &:before {
      background: rgba(37, 93, 110, 0.7);
      content: '';
      height: 150px;
      left: 0;
      position: absolute;
      width: 100%;
      -webkit-backface-visibility: hidden;
      z-index: 10;
    }
    h1 {
      color: #FFF;
    }
    .lead {
      align-items: center;
      bottom: 0;
      display: flex;
      height: 100%;
      width: 100%;
      h1 {
        color: #FFF;
        font-family: Oswald;
        font-size: 2.5em;
        line-height: 1.6em;
        position: relative;
        width: 100%;
        z-index: 100;
      }
    }
    @media screen and (min-width: 768px) {
      background-image: url('~/assets/cairns-cropped-b&w-md.jpg');
      height: 300px;
      &:before {
        height: 300px;
      }
    }
    @media screen and (min-width: 1024px) {
      background-image: url('~/assets/cairns-cropped-b&w.jpg');
    }
  }

</style>


