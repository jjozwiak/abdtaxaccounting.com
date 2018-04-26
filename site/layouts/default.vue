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
html {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Oswald', sans-serif;
  font-weight: 100;
}

$prussian-blue: #0b3c5d;
$lavendar: #6d7993;
$paper: #e9ecef;
$gold-leaf: #D9B310;
$tangerine: #f19f4d;

.jumbotron-home {
  background-image: url('~/assets/red-rocks-cropped.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 1000px;
}

#services {
  background: $paper;
}

a.service-link {
  color: inherit;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
}

.card {
  position: relative;
  .overlay {
    padding: 2em;
    position: absolute;
    width: 100%;
    background: rgba(0,0,0, 0.8);
    color: #FFF;
    height: 100%;
    display: none;
  }
  &:hover {
    .overlay {
      display: block;
    }
  }
}

#services-content {
  img {
    width: 100%;
    height: 300px;
  }
}

footer {
  background: $paper;
  color: #FFF;
  .social-media-links {
    display: flex;
    justify-content: space-between;
    a {
      align-self: flex-end;
      display: inline-block;
      svg {
        width: 30px;
        fill: #FFF;
      }
      &:hover {
        svg {
          width: 30px;
          fill: $prussian-blue;
        }
      }
    }
  }
}

#top-footer {
  background: $lavendar;
  p {
    margin: 0;
  }
}

#bottom-footer {
  background: $prussian-blue;
  padding: 0.5em 0;
  p {
    font-size: .80em;
    margin: 0;
  }
}
</style>
