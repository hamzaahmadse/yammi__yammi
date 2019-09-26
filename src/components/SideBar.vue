<template>
  <div class="sidebar" data-color="purple" data-image="assets/img/sidebar-1.jpg">
    <div data-color="green" data-image="img/sidebar-2.jpg" data-background-color="black" class="sidebar ps"
         style="background-image: url(&quot;./assets/img/sidebar-2.jpg&quot;);">
      <div class="sidebar-wrapper ps ps--active-x">
        <ul class="md-list nav md-theme-default">
          <li :class="{ 'active': $route.path==='/' }">

            <!----><router-link to="/" class="nav-link" active-class="active"><i class="far fa-chart-bar"></i>
            <p>Dashboard</p></router-link></li>
          <li :class="{ 'active': $route.path==='/online-shop' }"><router-link to="/online-shop" class="nav-link sidebar-menu-item"><i
            class="fas fa-cart-plus"></i>
            <p>Online Shop</p></router-link>
          </li>
          <li :class="{ 'active': $route.path==='/menu-card' }"><router-link to="/menu-card" class="nav-link sidebar-menu-item"><i
            class="fas fa-utensils"></i>
            <p>MenuCard</p></router-link></li>
          <li tag="li" :class="{ 'active': $route.path==='/offer' }"><router-link to="/offer" class="nav-link sidebar-menu-item"><i
            class="fas fa-percent"></i>
            <p>Offers </p></router-link>
          </li>
          <li :class="{ 'active': $route.path==='/order' }" ><router-link to="/order" class="nav-link sidebar-menu-item"><i
            class="fas fa-cart-arrow-down"></i>
            <p>Orders</p></router-link>
          </li>
          <li :class="{ 'active': $route.path==='/dinners' }"  tag="li" class=""><router-link to="/dinners" class="nav-link sidebar-menu-item"><i
            class="fas fa-birthday-cake"></i>
            <p>Dinners</p></router-link>
          </li>
          <li :class="{ 'active': $route.path==='/reservations' }" tag="li" class="">
            <router-link to="/reservations" class="nav-link sidebar-menu-item"><i
            class="fas fa-coffee"></i>
              <p>Reservations</p></router-link>
          </li>
          <li :class="{ 'active': $route.path==='/party-service' }"  tag="li" >
            <router-link to="/party-service" class="nav-link sidebar-menu-item"><i
            class="fas fa-glass-martini"></i>
              <p>Party Service</p></router-link>
          </li>
          <li :class="{ 'active': $route.path==='/reviews' }"  class="">
            <router-link to="/reviews" class="nav-link sidebar-menu-item"><i
            class="fas fa-star-half-alt"></i>
              <p>Reviews</p></router-link>
          </li>
          <li :class="{ 'active': $route.path==='/income' }" >
            <!----><router-link to="/income" class="nav-link">
            <!----><i class="fas fa-chart-line"></i>
            <p>Income</p></router-link>
          </li>

          <li :class="{ 'active': $route.path==='/invoice' }" >
            <!---->
            <!----><router-link to="/invoice" class="nav-link"><i class="fas fa-paperclip"></i>
            <p>Invoice</p></router-link>
          </li>
          <li :class="{ 'active': $route.path==='/pos-system' }" >
            <!---->
            <!----><router-link to="/pos-system" class="nav-link"><i class="fas fa-calculator"></i>
            <p>POS-System</p></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
    data () {
      return {
        active_el: 1
      }
    },
    methods: {
      activate (val) {
        this.active_el = val;
      }
    }
  }
</script>
