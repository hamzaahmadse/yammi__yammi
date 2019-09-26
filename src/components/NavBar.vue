<template>
  <nav class="navbar navbar-transparent navbar-absolute">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 custom-navbar">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div id="right-content">

            <button type="button" id="sidebarCollapse" class="navbar">

              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="logo">
            <a href="#" class="simple-text logo-mini">
              <div class="logo-img-left"><img src="./../assets/img/yami-yami-logo.png"></div>
            </a>
          </div>
          <div class="mainmenu_area">
            <ul>
<!--              <li><a href="customer.html"><i class="fas fa-user-circle"></i>Customer</a></li>-->
              <li><router-link to="/customer" active-class="active"><i class="fas fa-user-circle"></i>Customer</router-link></li>
              <li>
                <router-link to="/employeer" active-class="active"><i class="fas fa-briefcase"></i>Employeer</router-link></li>
              <li><router-link to="/delivary" active-class="active"><i class="fas fa-globe-europe"></i>Delivery
                Area</router-link></li>
              <li><router-link to="/manage-shop" active-class="active"><i class="fas fa-sliders-h"></i>Manage Shop</router-link></li>
              <li><router-link to="/opening-time" active-class="active"><i class="fas fa-clock"></i> Opening Times</router-link></li>
              <li><router-link to="/setting" active-class="active"><i class="flaticon-id-card"></i>Setting</router-link>
              </li>
            </ul>
          </div>
          <div class="user_right_avater dropdown show" data-toggle="dropdown" aria-haspopup="true"
               aria-expanded="false">
            <img src="img/faces/avatar.jpg" alt="avatar">
            <i class="fa fa-angle-down"></i>
          </div>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink"
               style="right: 20px;left: inherit;top: 48px;height: 170px;width: 200px;">
            <li><a href="my-profile.html"><i class="fas fa-user"></i>Owner name</a></li>
            <li><a href="my-profile.html"><i class="far fa-id-card"></i>Contract</a></li>
            <li><a href="my-profile.html"><i class="fas fa-id-card"></i>ID: 3465ffds</a></li>
            <div class="footer-icon">
              <svg class="icon_question">
                <use xlink:href="#question"></use>
              </svg>
              <li><a href="#">Logout</a></li>

              <svg class="icon_germany">
                <use xlink:href="#germany"></use>
              </svg>
            </div>
          </div>
          <div class="nav-right-section">
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">

                <ul class="dropdown-menu">
                  <li>
                    <a href="#">Mike John responded to your email</a>
                  </li>
                  <li>
                    <a href="#">You have 5 new tasks</a>
                  </li>
                  <li>
                    <a href="#">You're now friend with Andrew</a>
                  </li>
                  <li>
                    <a href="#">Another Notification</a>
                  </li>
                  <li>
                    <a href="#">Another One</a>
                  </li>
                </ul>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'NavBar'
  }
</script>
