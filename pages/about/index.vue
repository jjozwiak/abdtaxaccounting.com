<template>
  <div id="about-content">
    <banner-component text="About"></banner-component>
    <section class="about-section mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2>Amber Alfano</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <img
                src="~/assets/amber_alfano_headshot.jpg"
                alt="portrait of Amber Alfano" class="img-fluid mb-4">
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
            <h3>TLDR</h3>
            <p>Amber is a CPA
              and has an extensive background in tax. She thought she wanted
              to be an accounting PhD, but turns out that wasn’t the case so
              she opened her own tax practice instead. Amber likes the
              outdoors and dogs.</p>
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
        title: 'About',
        meta: [
          { hid: 'description', name: 'description', content: 'Amber Alfano is the owner and head CPA at ABD Tax Accounting LLC. Prior to opening her own practice, Amber spent the past decade immersed in the accounting world.' },
          { hid: 'keywords', name: 'keywords', content: 'Tax Services, Boulder Tax Services, Boulder CPA, Amber Alfano, Amber Alfano CPA'}
        ],
        link: [
          { rel: 'canonical', href: process.env.baseURL + '/about' }
        ]
      }
    }
  }
</script>
