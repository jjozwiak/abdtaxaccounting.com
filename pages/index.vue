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
          <div class="col-md-4">
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
                  <p>We prepare a wide range of both federal and state tax returns for individuals and small businesses.</p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md-4">
            <nuxt-link to="/services" class="service-link">
              <div class="card text-left">
                <img class="card-img-top"
                     src="~/assets/meeting.jpg"
                     alt="meeting">
                <div class="card-body">
                  <h3 class="card-title">Tax Planning</h3>
                </div>
                <div class="overlay">
                  <p>No one likes surprises when it comes to tax.  We can help you plan the tax side of all your upcoming financial changes from selling your home to planning for retirement.</p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md">
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
                  <p>From responding to tax notices to being audited by the IRS or state Department of Revenue, we can help you through your contact with various tax authorities.</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials">
      <div class="container mt-5 mb-sm-5 text-center">
        <h2>Testimonials</h2>
        <div id="carouselId" class="carousel slide"
             data-ride="carousel">
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <p class="testimonial-quote">
                "Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Fuga aliquid in dolor commodi
                laboriosam quis exercitationem, quas,
                neque suscipit nobis dicta officia perferendis.
                Nesciunt ab iste inventore accusantium magni
                voluptates."<br/> &mdash; Firstname Lastname
              </p>
            </div>
            <div class="carousel-item">
              <p class="testimonial-quote">
                After starting my own web consulting company,
                I thought I'd use Turbo Tax like I had for years as an individual.
                I decided to hire ABD to compare results. I'm glad I did because ABD was
                able to maximize my deductions and saved me much more than Turbo Tax.<br/>  &mdash; Jason Jozwiak, Plan B Development LLC
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
    components: {},
    head() {
      return {
        title: 'Home',
        meta: [
          { hid: 'description', name: 'description', content: 'ABD Tax Accounting LLC is a CPA firm in Boulder, Colorado specializing in tax preparation and tax planning for individuals and small businesses.' },
          { hid: 'keywords', name: 'keywords', content: 'Boulder Tax Accounting, Boulder Tax Accountants, Boulder CPA'}
        ],
        link: [
          { rel: 'canonical', href: process.env.baseURL }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">

  @import "~/scss/_variables.scss";

  .jumbotron-home {
    background-color: $teal;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 58px;
    overflow: hidden;
    position: relative;
    @media screen and (min-width: 768px) {
      background-color: transparent;
      background-image: url('~/assets/red-rocks-alt-cropped-b&w.jpg');
      height: 900px;
    }
  }

  .jumbotron-home .lead {
    bottom: 0;
    width: 100%;
    p {
      color: #FFF;
      font-family: Oswald;
      font-size: 1.5em;

      text-align: left;
      width: 100%;
      z-index: 100;
      br {
        display: none;
      }
    }
    @media screen and (min-width: 768px) {
      font-size: 2.5em;
      line-height: 1.6em;
      padding: 0 80px 0 40px;
      position: relative;
      margin-left: 0;
      top: 333px;
      z-index: 100;
      p {
        br {
          display: block;
        }
      }
    }
  }

  .jumbotron-home:before {
    background: rgba(37, 93, 110, 0.9);
    bottom: -500px;
    content: '';
    display: none;
    height: 900px;
    left: 0;
    position: absolute;
    transform: skewY(26.5deg);
    -webkit-transform: skewY(26.5deg);
    -moz-transform: skewY(26.5deg);
    -ms-transform: skewY(26.5deg);
    -o-transform: skewY(26.5deg);
    -webkit-backface-visibility: hidden;
    width: 100%;
    z-index: 10;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  .home-intro {
    max-width: 850px;
    p {
      font-size: 1.2em;
    };
    @media screen and (min-width: 768px) {
      margin: 100px auto;
      p {
        font-size: 1.5em;
      }
    }
  }

  .card {
    border-radius: 0;
    margin-bottom: 2em;
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
      color: #fff;
      overflow: hidden;
      position: absolute;
      top: 100%; right: 0; bottom: 0; left: 0;
      transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s, padding 0.3s;
      -moz-transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s, padding 0.3s;
      -webkit-transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s, padding 0.3s;
      width: 100%;
      a {
        color: #FFF;
        &:hover {
          text-decoration: none !important;
        }
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
    height: 150px;
  }

  .carousel-control-next,
  .carousel-control-prev {
    align-items: flex-start !important;
  }

  .testimonial-quote {
    display: block;
    margin: 0 auto;
    max-width: 800px;
  }

  .fas {
    color: $prussian-blue;
    font-size: 2em;
  }
</style>
