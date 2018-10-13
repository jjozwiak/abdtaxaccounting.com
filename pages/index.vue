<template>
  <div>
    <div class="jumbotron jumbotron-fluid jumbotron-home">
      <div class="container lead">
        <p>ABD Tax Accounting LLC<br/> is a CPA firm in Boulder,
          Colorado<br/> specializing in tax preparation and tax<br/>
          planning for individuals and small businesses.</p>
      </div>
    </div>
    <section class="container">
      <div class="row home-intro">
        <div class="col-sm-12 text-md-center">
          <h1>Our Story</h1>
          <p>Our owner and head CPA once pursued a PhD in accounting
            and left her program with all but her dissertation (ABD)
            complete. As a nod to her unfinished degree our firm is
            named ABD Tax Accounting LLC. While a PhD didn’t work
            for her, you can let her extensive accounting knowledge work
            for you in all your tax-based needs. Contact us today
            for a free initial consultation to see if we can help.</p>
        </div>
      </div>
    </section>
    <section id="services">
      <div class="container">
        <div class="row mb-5 mt-5 pt-5 pb-5">
          <div class="col-sm-12">
            <h2>Services</h2>
          </div>
          <div class="col-md-4 mb-5">
            <nuxt-link to="/services#tax-return-preparation"
                       class="service-link">
              <div class="card text-left">
                <img class="card-img-top"
                     src="~/assets/paper_stack_sm.jpg"
                     alt="Stack of Color Coded Files">
                <div class="card-body">
                  <h3 class="card-title">Tax Return
                    Preparation</h3>
                </div>
                <div class="overlay">
                  <p>We prepare a wide range of both federal and state tax returns for individuals and small
                    businesses.</p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md-4 mb-5">
            <nuxt-link to="/services" class="service-link">
              <div class="card text-left">
                <img class="card-img-top"
                     src="~/assets/meeting.jpg"
                     alt="meeting">
                <div class="card-body">
                  <h3 class="card-title">Tax Planning</h3>
                </div>
                <div class="overlay">
                  <p>No one likes surprises when it comes to tax. We can help you plan the tax side of all your upcoming
                    financial changes from selling your home to planning for retirement.</p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md mb-5">
            <nuxt-link to="/services" class="service-link">
              <div class="card text-left">
                <img class="card-img-top"
                     src="~/assets/meeting_overhead.jpg"
                     alt="meeting">
                <div class="card-body">
                  <h3 class="card-title">Audit and IRS
                    Representation</h3>
                </div>
                <div class="overlay">
                  <p>From responding to tax notices to being audited by the IRS or state Department of Revenue, we can
                    help you through your contact with various tax authorities.</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials">
      <div class="container carousel-container mt-5 mb-5 text-center">
        <h2>Testimonials</h2>
        <div id="carouselId" class="carousel slide"
             data-ride="carousel">
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <p class="testimonial-quote">
                "As a lapsed CPA living abroad, I didn't have the time or interest in figuring out our family's income
                taxes last year. By spending just $40 more than TurboTax, ABD was able to save us almost $700 on our
                annual tax liability. We'll be clients for life!"
                <br/> &mdash; Mia Billetdeaux, Solopreneur
              </p>
            </div>
            <div class="carousel-item">
              <p class="testimonial-quote">
                "After starting my own web consulting company,
                I thought I'd use Turbo Tax like I had for years as an individual.
                I decided to hire ABD to compare results. I'm glad I did because ABD was
                able to maximize my deductions and saved me much more than TurboTax."<br/> &mdash; Jason Jozwiak, Plan B
                Dev
              </p>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselId"
             role="button" data-slide="prev">
            <i class="fas fa-angle-left"></i>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselId"
             role="button" data-slide="next">
            <i class="fas fa-angle-right"></i>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    scrollToTop: true,
    components: {},
    head() {
      return {
        title: 'Home',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'ABD Tax Accounting LLC is a CPA firm in Boulder, Colorado specializing in tax preparation ' +
            'and tax planning for individuals and small businesses.'
          },
          {hid: 'keywords', name: 'keywords', content: 'Boulder Tax Accounting, Boulder Tax Accountants, Boulder CPA'}
        ],
        link: [
          {rel: 'canonical', href: process.env.baseURL}
        ]
      }
    }
  }
</script>

<style scoped lang="scss">

  @import "~/scss/_variables.scss";

  .jumbotron-home {
    background-image: url('~/assets/red-rocks-alt-cropped-b&w-sm.jpg');
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 58px;
    overflow: hidden;
    position: relative;

    &:before {
      background: rgba(37, 93, 110, 0.9);
      bottom: -500px;
      content: '';
      height: 1000px;
      left: 0;
      position: absolute;

      width: 100%;
      z-index: 10;
    }

    .lead {
      bottom: 0;
      width: 100%;
      p {
        color: #FFF;
        font-family: Oswald;
        font-size: 1.5em;
        position: relative;
        text-align: left;
        width: 100%;
        z-index: 100;
        br {
          display: none;
        }
      }
    }
    @media screen and (min-width: 580px){
      background-image: url('~/assets/red-rocks-alt-cropped-b&w-md.jpg');

    }

    @media screen and (min-width: 768px) {
      background-color: transparent;
      background-image: url('~/assets/red-rocks-alt-cropped-b&w.jpg');
      height: 900px;
      &:before {
        display: block;
        transform: skewY(26.5deg);
        -webkit-transform: skewY(26.5deg);
        -moz-transform: skewY(26.5deg);
        -ms-transform: skewY(26.5deg);
        -o-transform: skewY(26.5deg);
        -webkit-backface-visibility: hidden;
      }
      .lead {
        margin-left: 0;
        max-width: 100%;
        padding: 0 80px 0 40px;
        position: relative;
        top: 360px;
        z-index: 100;
        p {
          font-size: 2em;
          line-height: 1.6em;
          br {
            display: block;
          }
        }
      }
    }

    @media screen and (min-width: 990px) {
      &:before {
        display: block;
        height: 1000px;
        transform: skewY(26.5deg);
        -webkit-transform: skewY(26.5deg);
        -moz-transform: skewY(26.5deg);
        -ms-transform: skewY(26.5deg);
        -o-transform: skewY(26.5deg);
        -webkit-backface-visibility: hidden;
      }
      .lead {
        p {
          font-size: 2.5em;
          line-height: 1.6em;
          /*br {*/
          /*display: block;*/
          /*}*/
        }
      }
    }

    @media screen and (min-width: 1200px) {
      &:before {
        height: 900px;
      }
    }
  }



  .home-intro {
    max-width: 850px;
    p {
      font-size: 1.2em;
    }

    @media screen and (min-width: 768px) {
      margin: 100px auto;
      p {
        font-size: 1.5em;
      }
    }
  }

  .card {
    border-radius: 0;
    height: 100%;
    position: relative;
    h3 {
      color: $copy;
    }
    a {
      &:hover {
        text-decoration: none !important;
      }
    }
    .card-img-top {
      border-radius: 0;
    }
    .overlay {
      background: rgba(37, 93, 110, 0.9);
      bottom: 0;
      color: #fff;
      font-size: 1em;
      left: 0;
      overflow: hidden;
      position: absolute;
      right: 0;
      transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s, padding 0.3s;
      -moz-transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s, padding 0.3s;
      -webkit-transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s, padding 0.3s;
      top: 100%;
      width: 100%;
      a {
        color: #FFF;
        &:hover {
          text-decoration: none !important;
        }
      }
      @media screen and (min-width: 1024px) {
        font-size: 1.2em;
      }

    }
    &:hover {
      a {
        text-decoration: none !important;
      }
      h3 {
        color: #FFF;
      }
      .card-body {
        background: #000;
      }
      .overlay {
        padding: 2em;
        top: 0;
      }
    }
  }

  #services {
    background: $paper;
    a:hover {
      text-decoration: none;
    }
  }

  .carousel-inner {
    height: auto;
  }

  .carousel-control-next,
  .carousel-control-prev {
    align-items: flex-start !important;
  }

  .testimonial-quote {
    display: block;
    margin: 0 auto;
    max-width: 800px;
    padding: 0 50px;
  }

  .carousel-container {
    @media screen and (max-width: 1024px){
      max-width: 100%;
    }
  }

  .fas {
    color: $prussian-blue;
    font-size: 2em;
  }
  .fa-angle-left {
    position: absolute;
    left: 0;
  }

  .fa-angle-right {
    position: absolute;
    right: 0;
  }
</style>
