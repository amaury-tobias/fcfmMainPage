<template lang="pug">
nav.navbar.is-primary.is-fixed-top
  .container
    .navbar-brand
      router-link.navbar-item(to='/') FCFM
      .navbar-burger.burger(v-bind:class='{ "is-active": isActive }'
      data-target='navbar-menu' @click='isActive = !isActive')
        span
        span
        span
    #navbar-menu.navbar-menu(v-bind:class='{ "is-active": isActive }')
      .navbar-end(@click='isActive = false')
        router-link.navbar-item(to='/') INICIO
        router-link.navbar-item(to='/about') FACULTAD
        router-link.navbar-item(to='/home') LICENCIATURAS
        router-link.navbar-item(to='/about') ALUMNOS
        router-link.navbar-item(to='/about') PROFESORES
        router-link.navbar-item(to='/about') EXAFCFM
        router-link.navbar-item(to='/about') POSGRADO
        
</template>

<script>
export default {
  data: function () {
    return {
      isActive: false
    }
  }
}
</script>
