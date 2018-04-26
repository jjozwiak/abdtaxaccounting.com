<template>
  <div>
    <div class="jumbotron jumbotron-fluid jumbotron-home">
      <div class="container">
        <p class="lead">ABD Tax Accounting LLC is a CPA firm in Boulder, Colorado specializing in tax preparation and tax planning for individuals
          and small businesses.</p>
      </div>
    </div>
    <section class="container">
      <div class="row mb-5 mt-5">
        <div class="col-sm-12">
          <h1>Our Story</h1>
          <p>Our owner and head CPA once pursued a PhD in accounting and left her program with all but her dissertation (ABD)
            complete. As a nod to her unfinished degree our firm is named ABD Tax Accounting LLC. While a PhD didn’t work for
            her, you can let her extensive accounting knowledge work for you in all your tax-based needs. Contact us today
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
            <nuxt-link to="/services#tax-return-preparation" class="service-link">
              <div class="card text-left">
                <img class="card-img-top" src="~/assets/paper-stack-cropped.jpg" alt="stack of files">
                <div class="card-body">
                  <h3 class="card-title">Tax Return Preparation</h3>
                </div>
                <div class="overlay">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea atque harum repudiandae autem vero explicabo repellendus fugiat aut, ratione quidem pariatur rerum adipisci laboriosam quas tenetur laborum. Quisquam, ipsum laudantium.</p>
                  <p><a href="#">Learn More</a></p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md-4">
            <nuxt-link to="/services" class="service-link">
              <div class="card text-left">
                <img class="card-img-top" src="~/assets/meeting-cropped.jpg" alt="meeting">
                <div class="card-body">
                  <h3 class="card-title">Tax Planning</h3>
                </div>
                <div class="overlay">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea atque harum repudiandae autem vero explicabo repellendus fugiat aut, ratione quidem pariatur rerum adipisci laboriosam quas tenetur laborum. Quisquam, ipsum laudantium.</p>
                  <p><a href="#">Learn More</a></p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md">
            <nuxt-link to="/services" class="service-link">
              <div class="card text-left">
                <img class="card-img-top" src="~/assets/meeting-alt-cropped.jpg" alt="meeting">
                <div class="card-body">
                  <h3 class="card-title">Audit and IRS Representation</h3>
                </div>
                <div class="overlay">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea atque harum repudiandae autem vero explicabo repellendus fugiat aut, ratione quidem pariatur rerum adipisci laboriosam quas tenetur laborum. Quisquam, ipsum laudantium.</p>
                  <p><a href="#">Learn More</a></p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials">
      <div class="container mb-5 mt-5">
        <h2>Testimonials</h2>
        <div id="carouselId" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselId" data-slide-to="0" class="active"></li>
            <li data-target="#carouselId" data-slide-to="1"></li>
            <li data-target="#carouselId" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <blockquote>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid in dolor commodi laboriosam quis exercitationem, quas,
                neque suscipit nobis dicta officia perferendis. Nesciunt ab iste inventore accusantium magni voluptates.
              </blockquote>
            </div>
            <div class="carousel-item">
              <blockquote>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid in dolor commodi laboriosam quis exercitationem, quas,
                neque suscipit nobis dicta officia perferendis. Nesciunt ab iste inventore accusantium magni voluptates.
              </blockquote>
            </div>
            <div class="carousel-item">
              <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid in dolor commodi laboriosam quis exercitationem, quas,
              neque suscipit nobis dicta officia perferendis. Nesciunt ab iste inventore accusantium magni voluptates.
              </blockquote>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {

  },
  head() {
    return {
      title: 'Home | ABD Tax Accounting LLC'
    }
  }
}
</script>
