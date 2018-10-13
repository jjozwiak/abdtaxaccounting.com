<template>
  <footer>
    <div id="top-footer">
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-md-5 col-lg-4 footer-col footer-contact-info">
            <h4>Contact Info</h4>
            <p><strong>Amber Alfano, CPA</strong></p>
            <p>
              <strong><i class="fas fa-phone"></i></strong> 303-261-8151
              <br/>
              <strong><i class="fas fa-mobile-alt"></i></strong> 305-905-0222
              <br/>
              <strong><i class="far fa-envelope"></i></strong>
              <span>amber</span><span>@abdtaxaccounting</span>.com
            </p>
            <address>
              2505 Walnut Street, Suite 300<br/> Boulder, CO 80302
            </address>
          </div>
          <div class="col-md-4 col-lg-5 footer-col">
            <h4>Send Us an Email</h4>
            <form @submit="validate" action="https://formspree.io/amber@abdtaxaccounting.com" method="POST" class="footer-contact-form" novalidate>
              <div class="form-group row">
                <label for="contact-form-email-input" class="col-form-label sr-only">Your Email</label>
                <div class="col-sm-12">
                  <input type="hidden" name="_subject" value="Website Inquiry" />
                  <input v-model="email" id="contact-form-email-input" type="email" name="email" placeholder="Your Email" class="form-control">
                </div>
              </div>
              <div class="form-group row">
                <label for="contact-form-message-input" class="col-form-label sr-only">Message</label>
                <div class="col-sm-12">
                  <textarea v-model="message" id="contact-form-message-input" name="message" rows="5" placeholder="Message" class="form-control"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-3">
                  <input type="hidden" name="_next" v-bind:value="TYUrl" />
                  <input type="text" name="_gotcha" style="display:none" />
                  <input type="submit" value="Send" class="btn">
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-2 offset-lg-1 footer-col footer-social-media-links">
            <ul>
              <li class="pr-2">
                <a href="https://www.linkedin.com/in/amber-alfano-2b6050a"
                     target="_blank" rel="noopener">
                  <svg aria-labelledby="simpleicons-linkedin-icon"
                       role="img" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"><title
                      id="simpleicons-linkedin-icon">LinkedIn
                    icon</title>
                    <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ABDTax/" target="_blank" rel="noopener">
                  <svg aria-labelledby="simpleicons-facebook-icon"
                       role="img" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"><title
                      id="simpleicons-facebook-icon">Facebook
                    icon</title>
                    <path
                        d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="bottom-footer">
      <div class="container">
        <div class="row pt-1">
          <div class="col-sm-12">
            <p>&copy;2018 {{siteName}}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="errorModal" class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Error Message</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="alert alert-danger">
              <ul>
                <li v-if="errors[0]">{{errors[0]}}</li>
                <li v-if="errors[1]">{{errors[1]}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        siteName: process.env.siteName,
        baseURL: process.env.baseURL,
        TYUrl: process.env.baseURL + '/thanks',
        email: null,
        message: null,
        errors: []
      };
    },
    methods : {
      validate: function (e) {
        //reset error array
        this.errors = [];
        let validEmail = this.isValidEmail(this.email);
        let validMessage = this.isNotEmpty('Message', this.message);
        if (validEmail && validMessage) {
          return true;
        } else {
          this.showErrorMessage(this.errors);
        }

        e.preventDefault();
      },
      isValidEmail: function (email) {

        if (!this.isNotEmpty('Email', email)) {
          return false;
        }

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = re.test(String(email).toLowerCase());
        if (!isValid) {
          this.errors.push('Email is not valid.');
        }
        return isValid;
      },
      isNotEmpty: function(field, value) {
        if (value === null || value === '') {
          this.errors.push(field + ' field is required.');
          return false;
        } else {
          return true;
        }
      },
      showErrorMessage: function (message) {
        $('#errorModal').modal('show');
      }
    }
  };
</script>

<style scoped lang="scss">

  @import "../scss/_variables.scss";

  footer {
    background: $paper;
    color: $paper;
    h4 {
      color: #FFF;
      margin-bottom: 1em;
    }
    i {
      width: 25px;
    }
    address {
      margin: 0;
    }
    a {
      color: #FFF;
    }
    ul {
      margin: 0;
      padding: 0 15px;
    }
    .footer-social-media-links {
      display: flex;
      justify-content: space-between;
      ul {
        align-self: flex-end;
        padding: 0;
      }
      li {
        display: inline-block;
        list-style: none;
      }
      a {
        display: inline-block;
        svg {
          fill: $prussian-blue;
          transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
          -webkit-transition: all 0.3s ease;
          width: 30px;
        }
        &:hover {
          svg {
            fill: $paper;
            width: 30px;
          }
        }
      }
    }
  }

  .footer-contact-form {
    input, textarea {
      background: $paper;
      border: none;
      border-radius: 0;
      outline: none;
    }
    .btn {
      background: $prussian-blue;
      color: $paper;
      transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
      &:hover {
        background: $paper;
        color: $prussian-blue;
      }
    }
  }

  #top-footer {
    background: $lavender;
  }

  #bottom-footer {
    background: $prussian-blue;
    padding: 0.5em 0;
    p {
      font-size: .80em;
      margin: 0;
    }
  }

  .footer-col {
    margin-bottom: 2em;
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }
</style>
