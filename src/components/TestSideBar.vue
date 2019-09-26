<template>
  <div class="sidebar" data-color="purple" data-image="assets/img/sidebar-1.jpg">
    <div data-color="green" data-image="img/sidebar-2.jpg" data-background-color="black" class="sidebar ps"
         style="background-image: url(&quot;img/sidebar-2.jpg&quot;);">
      <div class="sidebar-wrapper ps ps--active-x">
        <ul class="md-list nav md-theme-default">
          <li class="">
            <!----><a href="dashboard.html" class="nav-link"><i class="far fa-chart-bar"></i>
            <p>Dashboard</p></a></li>
          <li to="/" tag="li" class=""><a href="online-shop.html" class="nav-link sidebar-menu-item"><i
            class="fas fa-cart-plus"></i>
            <p>Online Shop</p></a>
          </li>
          <li class=""><a href="menu-card.html" class="nav-link sidebar-menu-item"><i
            class="fas fa-utensils"></i>
            <p>MenuCard</p></a></li>
          <li to="/" tag="li" class=""><a href="offers.html" class="nav-link sidebar-menu-item"><i
            class="fas fa-percent"></i>
            <p>Offers </p></a>
          </li>
          <li to="/" tag="li" class=""><a href="order.html" class="nav-link sidebar-menu-item"><i
            class="fas fa-cart-arrow-down"></i>
            <p>Orders</p></a>
          </li>
          <li to="/" tag="li" class=""><a href="dinners.html" class="nav-link sidebar-menu-item"><i
            class="fas fa-birthday-cake"></i>
            <p>Dinners</p></a>
          </li>
          <li to="/" tag="li" class=""><a href="reservations.html" class="nav-link sidebar-menu-item"><i
            class="fas fa-coffee"></i>
            <p>Reservations</p></a>
          </li>
          <li to="/" tag="li" class=""><a href="party-service.html" class="nav-link sidebar-menu-item"><i
            class="fas fa-glass-martini"></i>
            <p>Party Service</p></a>
          </li>
          <li to="/" tag="li" class=""><a href="reviews.html" class="nav-link sidebar-menu-item"><i
            class="fas fa-star-half-alt"></i>
            <p>Reviews</p></a>
          </li>
          <li class="">
            <!---->
            <!----><a href="income.html" class="nav-link"><i class="fas fa-chart-line"></i>
            <p>Income</p></a>
          </li>

          <li class="">
            <!---->
            <!----><a href="invoice.html" class="nav-link"><i class="fas fa-paperclip"></i>
            <p>Invoice</p></a>
          </li>
          <li class="">
            <!---->
            <!----><a href="pos-system.html" class="nav-link"><i class="fas fa-calculator"></i>
            <p>POS-System</p></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TestSideBar'
  }
</script>
