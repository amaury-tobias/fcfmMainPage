<template lang="pug">
.app
  navBar
  section.hero.is-primary
    .hero-body
      .container
        h1.title FACULTAD DE CIENCIAS FÍSICO MATEMÁTICAS
        h2.subtitle UNIVERSIDAD AUTÓNOMA DE NUEVO LEÓN
    .hero-foot
      nav.tabs.is-boxed.is-hidden-touch
        .container
          ul
            li(ref='1' @click='activeRouter(1)')
              router-link(to='/') INICIO
            li(ref='2' @click='activeRouter(2)')
              router-link(to='/about') FACULTAD
            li(ref='3' @click='activeRouter(3)')
              router-link(to='/home') LICENCIATURAS
            li(ref='4' @click='activeRouter(4)')
              router-link(to='/about') ALUMNOS
            li(ref='5' @click='activeRouter(5)')
              router-link(to='/about') PROFESORES
            li(ref='6' @click='activeRouter(6)')
              router-link(to='/about') EXAFCFM
            li(ref='7' @click='activeRouter(7)')
              router-link(to='/about') POSGRADO
  section.section
    .container
      router-view        
</template>

<script>
import navBar from '@/components/NavBar.vue'

export default {
  components: {
    navBar
  },
  methods: {
    activeRouter: function (element) {
      Object.keys(this.$refs).forEach(key => {
        this.$refs[key].className = 'inactive'
      })
      this.$refs[`${element}`].className = 'is-active'
    }
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$primary: #002D4A;
$primary-invert: findColorInvert($primary);

$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert)
);

$link: #00C4FF;
$link-invert: $primary-invert;
$link-focus-border: $primary;

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
