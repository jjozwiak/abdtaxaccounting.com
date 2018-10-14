<template>
  <div id="services-content">
    <banner-component text="Services"></banner-component>
    <section class="mt-5 mb-5 mb-md-0 mt-md-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="~/assets/paper_stack_lg.jpg" alt="Stack of Color Coded Files" class="img-fluid mb-4">
          </div>
          <div class="col-md-6">
            <h2 id="tax-return-preparation">Tax Return Preparation</h2>
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
    <section class="tax-planning mb-5 mb-md-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6 order-2">
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
          <div class="col-md-6 order-1">
            <img src="~/assets/services-tax-planning.jpg" alt="Man in suit using a calculator and computer" class="img-fluid mb-4">
          </div>
        </div>
      </div>
    </section>
    <section class="mb-5 mb-md-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="~/assets/services-audit-representation.jpg" alt="Overhead view of a meeting where people are analyzing charts and graphs" class="img-fluid mb-4">
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
  import BannerComponent from '~/components/BannerComponent.vue'
  export default {
    scrollToTop: true,
    components: {
      BannerComponent
    },
    head() {
      return {
        title: 'Services',
        meta: [
          { hid: 'description', name: 'description', content: 'ABD Tax Accounting LLC offers a variety of tax services for individuals and small businesses.' },
          { hid: 'keywords', name: 'keywords', content: 'Tax Services, Boulder Tax Services, Boulder CPA'}
        ],
        link: [
          { rel: 'canonical', href: process.env.baseURL + '/services' }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">

  @import "~/scss/_variables.scss";

  a.service-link {
    color: inherit;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }

  .tax-planning {
    @media screen and (min-width: 768px) {
      background: $paper;
    }
  }

  .row {
    @media screen and (min-width: 768px) {
      padding-bottom: 100px;
      padding-top: 100px;
    }
  }

  .order-1 {
    order: 1;
  }

  .order-2 {
    order: 2;
  }

  @media screen and (min-width: 768px) {
    .order-1 {
      order: 2;
    }

    .order-2 {
      order: 1;
    }
  }
</style>