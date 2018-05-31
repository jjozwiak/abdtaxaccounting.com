<template>
  <div>
    <header>
      <div class="lead container">
        <h1>About</h1>
      </div>
    </header>
    <section class="mb-5 mt-5">
      <div class="container">
        <section class="mb-5 mt-5">
          <h2>TLDR</h2>
          <p>Amber is a CPA
            and has an extensive background in tax. She thought she wanted
            to be an accounting PhD, but turns out that wasn’t the case so
            she opened her own tax practice instead. Amber likes the
            outdoors and dogs.</p>
        </section>
        <div class="row">
          <div class="col-md-4">
            <img
                src="~/assets/BioPic.jpg"
                alt="portrait of Amber Alfano" class="img-fluid">
          </div>
          <div class="col-md-8">
            <p>Amber Alfano is the owner and head CPA at ABD Tax Accounting LLC.
              Prior to opening her own practice, Amber spent the past decade
              immersed in the accounting world. Amber graduated with a
              Bachelors and Masters of Accounting from the University of
              Florida. After college and sitting for the CPA exam she went
              straight into the belly of the accounting beast and started
              working in Ernst & Young’s business tax division. Over the next
              5 years Amber specialized in the preparation of business tax
              returns for clients in the real estate, manufacturing and
              finance industries.</p>
            <p> In 2012 Amber’s love of academia and
              accounting lead her to Boulder and the University of Colorado to
              pursue a PhD in accounting. Thinking that university
              professorship was her true calling, Amber taught sections of the
              Introduction to Individual Income Tax class during her time at
              CU. Somewhere during the 5 years and countless hours of reading
              academic texts Amber realized that she missed her clients and
              the hands-on work of the practitioner’s world. In 2017 the
              desire to work won over the desire to teach and Amber left her
              PhD have completed all but her dissertation to open ABD Tax
              Accounting LLC.</p>
            <p>Amber spends most of her time away from tax reading, travelling
              or exploring the Colorado wilderness. She is an avid trail
              runner and hiker and a somewhat reluctant dirt bike rider. Amber
              is married and has two dogs whom she treats like children.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'About | ABD Tax Accounting LLC'
      }
    }
  }
</script>

<style scoped lang="scss">
  header {
    background-image: url('~/assets/about-header-alt-b&w.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 -100px;
    height: 250px;
    overflow: hidden;
    position: relative;

    &:before {
      background: rgba(11, 60, 93, 0.6);

      content: '';
      height: 250px;
      left: 0;
      position: absolute;
      -webkit-backface-visibility: hidden;
      width: 100%;
      z-index: 10;
    }
    h1 {
      color: #FFF;
    }
    .lead {
      bottom: 0;
      width: 100%;
      h1 {
        color: #FFF;
        font-family: Oswald;
        font-size: 2.5em;
        line-height: 1.6em;
        padding: 80px 0;
        position: relative;
        width: 100%;
        z-index: 100;
      }
    }
  }
</style>

