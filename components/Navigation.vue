<template>
  <nav class="navbar fixed-top navbar-expand-md navbar-light">
    <!--<a class="navbar-brand" href="#">-->
    <!--<strong>ABD</strong>-->
    <!--<br/> Tax Accounting LLC</a>-->
    <button class="navbar-toggler hidden-lg-up" type="button"
            data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
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
          <a class="nav-link" href="#">Client Portal</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">

  @import "../scss/_variables.scss";

  .navbar {
    background: $prussian-blue;
    padding-left: 40px;
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

</style>
