<template>
  <nav class="navbar fixed-top navbar-expand-md navbar-light">
    <!--<a class="navbar-brand" href="#">-->
    <!--<strong>ABD</strong>-->
    <!--<br/> Tax Accounting LLC</a>-->
    <button class="navbar-toggler hidden-lg-up" type="button"
            data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"
            v-on:click="toggleMenu"
    >
          <div id="nav-icon3">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item first">
          <nuxt-link to="/" class="nav-link">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/about" class="nav-link">About</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/services" class="nav-link">Services</nuxt-link>
        </li>
        <li class="nav-item last">
          <a href="https://abdtaxaccounting.securefilepro.com/portal/login.aspx" target="_blank" rel="noopener" class="nav-link">Client Portal</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
      methods: {
        toggleMenu: function () {
          let hamburger = document.getElementById('nav-icon3');
          hamburger.classList.toggle('open');
        }
      }
  };
</script>

<style scoped lang="scss">

  @import "../scss/_variables.scss";

  .navbar {
    background: $prussian-blue;
    /*padding-left: 40px;*/
    .first {
      a {
        padding-left: 0;
      }
    }
    a {
      color: #FFF !important;
      font-weight: 100;
    }

  }

  .navbar-toggler {
    padding: 0;
  }

  .navbar-nav {
    .nav-item {
      a {
        font-family: Oswald;
        font-size: 1.1em;
        transition: color 0.2s;
        &:hover {
          color: $lavender !important;
        }
      }
    }
  }

  #nav-icon3 {
    width: 40px;
    height: 32px;
    position: relative;
    margin: 5px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
  }

  #nav-icon3 span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: $paper;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  #nav-icon3 span:nth-child(1) {
    top: 0px;
  }

  #nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
    top: 15px;
  }

  #nav-icon3 span:nth-child(4) {
    top: 30px;
  }

  #nav-icon3.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  #nav-icon3.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon3.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
</style>
