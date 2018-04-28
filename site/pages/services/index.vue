<template>
  <div id="services-content">
    <section class="mb-5 mt-5">
      <div class="container">
        <h1>Services</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Ullam quisquam rerum quos adipisci ipsam est labore itaque
          maxime, doloremque nulla. Numquam provident, alias saepe in
          sequi aspernatur eos rerum adipisci?</p>
      </div>
    </section>
    <section class="mb-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="https://picsum.photos/200/300/?blur" alt="">
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
    <section class="mb-5 mt-5">
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
            <img src="https://picsum.photos/200/300/?blur" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="mb-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="https://picsum.photos/200/300/?blur" alt="">
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

  img {
    height: 300px;
    width: 100%;
  }

  a.service-link {
    color: inherit;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }

</style>