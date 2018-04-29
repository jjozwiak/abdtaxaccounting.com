<template>
  <div id="services-content">
    <header>
      <div class="lead container">
        <h1>Services</h1>
      </div>
    </header>
    <section class="mb-5 mt-5">
      <div class="container">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Ullam quisquam rerum quos adipisci ipsam est labore itaque
          maxime, doloremque nulla. Numquam provident, alias saepe in
          sequi aspernatur eos rerum adipisci?</p>
      </div>
    </section>
    <section class="mb-5 mt-5 pb-5 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="~/assets/paper-stack-cropped.jpg" alt="" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h2 id="tax-return-preparation">Tax Return
              Preparation</h2>
            <p>Our modern return preparation software allows us to
              complete a wide variety of returns for you and your
              business. We also offer electronic filling of
              federal and most state returns.</p>
            <ul>
              <li>Individual</li>
              <li>Corporations / S-Corps</li>
              <li>Partnerships</li>
              <li>LLC/LLP</li>
              <li>State & Local Returns</li>
              <li>Quarterly Estimated Tax Payment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-5 mt-5 pb-5 pt-5 tax-planning">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>Tax Planning</h2>
            <p>Back in 1935 Federal Judge Learned Hand said "Anyone
              may arrange his affairs so that his taxes shall be
              as low as possible; he is not bound to choose that
              pattern which best pays the treasury. There is not
              even a patriotic duty to increase one's taxes.” A
              little bit of proactive tax planning is what can
              help you do just that. ABD Tax Accounting can help
              you look to the year(s) ahead and help you implement
              tax saving strategies to maximize your after-tax
              income.</p>
            <ul>
              <li>Buying/Selling a home</li>
              <li>Getting a divorce</li>
              <li>Buying/Selling or starting a business</li>
            </ul>
          </div>
          <div class="col-md-6">
            <img src="~/assets/services-tax-planning.jpg" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </section>
    <section class="mb-5 mt-5 pb-5 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="~/assets/services-audit-representation.jpg" alt="" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h2>Tax Audit Assistance and IRS Representation</h2>
            <p>Facing an audit of your tax return or getting a
              notice from the IRS can be a stressful experience
              for anyone, but you don’t have to face them alone.
              ABD Tax Accounting can help you resolve these
              matters and get back to a good standing with tax
              authorities.</p>
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
        title: 'Services | ABD Tax Accounting LLC'
      }
    }
  }
</script>

<style scoped lang="scss">

  @import "~/scss/_variables.scss";

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

  /*img {*/
    /*height: 300px;*/
    /*width: 100%;*/
  /*}*/

  a.service-link {
    color: inherit;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }

  .tax-planning {
    background: $paper;
  }
</style>