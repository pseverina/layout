<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="menu-bar">
      <b-navbar-brand>
        <img src="../assets/img/logo.svg" class="logo-mobile"/>
        <img src="../assets/img/logo-navbar.svg" class="logo-desktop"/>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto empty">
        <b-nav-item right>
          <img src="../assets/img/empty.svg"/>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-scroll-to="'.mts-services'" class="link-service">Онлайн сервисы</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" right>
            <b-button>Личный кабинет</b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
