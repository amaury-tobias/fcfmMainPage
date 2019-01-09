<template lang="pug">
.app
  section.hero.is-primary.is-medium
    .hero-head
      navBar
    .hero-body
      .container
        h1.title FACULTAD DE CIENCIAS FÍSICO MATEMÁTICAS
        h2.subtitle UNIVERSIDAD AUTÓNOMA DE NUEVO LEÓN
    .hero-foot
      nav.tabs.is-boxed
        .container
          ul
            li.is-active
              router-link(to='/') INICIO
            li
              router-link(to='/about') FACULTAD
            li
              router-link(to='/home') LICENCIATURAS
            li
              router-link(to='/about') ALUMNOS
            li
              router-link(to='/about') PROFESORES
            li
              router-link(to='/about') EXAFCFM
            li
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

$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
