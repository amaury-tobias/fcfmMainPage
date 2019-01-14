<template lang="pug">
.app(ref='element')
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
  },
  mounted() {
    const loadingComponent = this.$loading.open({
      container: null
    })
    this.$http.get('/todos')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))
    .finally(() => {
      loadingComponent.close()
    })
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$primary: #0e3b65;
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
