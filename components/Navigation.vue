<template>
  <nav class="navbar fixed-top navbar-expand-md navbar-light">
    <!--<a class="navbar-brand" href="#">-->
    <!--<strong>ABD</strong>-->
    <!--<br/> Tax Accounting LLC</a>-->
    <button class="navbar-toggler hidden-lg-up" type="button"
            data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"
            v-on:click="toggleHamburger">
          <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mb-3 mb-md-0 mt-lg-0">
        <li class="nav-item first" v-on:click="clickMenuLink">
          <nuxt-link to="/" class="nav-link">Home</nuxt-link>
        </li>
        <li class="nav-item" v-on:click="clickMenuLink">
          <nuxt-link to="/about" class="nav-link">About</nuxt-link>
        </li>
        <li class="nav-item" v-on:click="clickMenuLink">
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
        toggleHamburger: function () {
          let hamburger = document.getElementById('nav-icon');
          hamburger.classList.toggle('open');
        },
        clickMenuLink: function () {
          $('.navbar-collapse').collapse('hide');
          this.toggleHamburger();
        }
      }
  };
</script>

<style scoped lang="scss">

  @import "../scss/_variables.scss";

  .navbar {
    background: $prussian-blue;
    .first {
      a {
        padding-left: 0;
      }
    }
    a {
      color: #FFF !important;
      font-weight: 100;
    }
    @media screen and (min-width: 768px) {
      padding-left: 40px;
    }
  }

  .navbar-toggler {
    padding: 0;
  }

  .navbar-nav {
    .nav-item {
      a {
        font-family: Oswald;
        font-size: 1.6em;
        transition: color 0.2s;
        &:hover {
          color: $lavender !important;
        }
      }
    }
    @media screen and (min-width: 768px) {
      .nav-item {
        a {
          font-size: 1.3em;
        }
      }
    }
  }

  #nav-icon {
    cursor: pointer;
    height: 32px;
    margin: 5px auto;
    position: relative;
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transition: .5s ease-in-out;
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    width: 40px;
    span {
      background: $paper;
      display: block;
      height: 3px;
      left: 0;
      opacity: 1;
      position: absolute;
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transition: .25s ease-in-out;
      -webkit-transition: .25s ease-in-out;
      -moz-transition: .25s ease-in-out;
      -o-transition: .25s ease-in-out;
      width: 100%;
      &:nth-child(1) {
        top: 0px;
      }

      &:nth-child(2), &:nth-child(3) {
        top: 15px;
      }

      &:nth-child(4) {
        top: 30px;
      }
    }

    &.open {
      span {
        &:nth-child(1) {
          left: 50%;
          top: 18px;
          width: 0%;
        }
        &:nth-child(2) {
          transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
        }
        &:nth-child(4) {
          left: 50%;
          top: 18px;
          width: 0%;
        }
      }
    }
  }
</style>
