<template lang="pug">
nav.navbar.is-primary.is-fixed-top
  .container
    .navbar-brand
      router-link.navbar-item(to='/') FCFM
      .navbar-burger.burger(:class='{ "is-active": isActive }'
      data-target='navbar-menu' @click='isActive = !isActive')
        span
        span
        span
    #navbar-menu.navbar-menu(:class='{ "is-active": isActive }')
      .navbar-end(@click='isActive = false')
        router-link.navbar-item(to='/') INICIO
        router-link.navbar-item(to='/facultad') FACULTAD
        router-link.navbar-item(to='/licenciaturas') LICENCIATURAS
        router-link.navbar-item(to='/alumnos') ALUMNOS
        router-link.navbar-item(to='/profesores') PROFESORES
        router-link.navbar-item(to='/exafcfm') EXAFCFM
        router-link.navbar-item(to='/posgrado') POSGRADO
        
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
