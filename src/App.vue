<template lang="pug">
.app
  navBar
  section.hero.is-primary
    .hero-body
      .container
        h1.title FACULTAD DE CIENCIAS FÍSICO MATEMÁTICAS
        h2.subtite UNIVERSIDAD AUTÓNOMA DE NUEVO LEÓN
  section.section
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

$link: #00C4FF;
$link-invert: $primary-invert;
$link-focus-border: $primary;

$card-header-background-color: $primary;
$card-header-color: $white;

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
