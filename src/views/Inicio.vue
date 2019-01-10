<template lang="pug">
.container
  Carousel
  .container.section
    Noticias
  .container
    Licenciaturas
</template>

<script>
import Carousel from '@/components/inicio/Carousel.vue'
import Noticias from '@/components/inicio/Noticias.vue'
import Licenciaturas from '@/components/inicio/Licenciaturas.vue'

export default {
  components: {
    Carousel,
    Noticias,
    Licenciaturas
  }    
}
</script>
