<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <RouterLink to="/" class="navbar-brand orange-text">
        <img src="/img/nlgameshop.png" alt="Logo Een Game Shop" class="logo-image" />
        NL CLOTHING SHOP
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" :class="{ 'active': $route.path === '/' }">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/cart" class="nav-link" :class="{ 'active': $route.path === '/cart' }">Winkelwagen</RouterLink>
          </li>
        </ul>
      </div>
      <div class="position-relative">
        <span class="badge text-orange rounded-pill cart-icon-bg" id="cart-icon">
          <i class="las la-shopping-cart icon-size text-white"></i>
        </span>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <span id="cart-amount"></span>
          <span class="visually-hidden">Items in cart</span>
        </span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.orange-text {
  color: orange !important;
}

.cart-icon-bg {
  background-color: orange;
}
</style>
