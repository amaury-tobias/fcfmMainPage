<template lang="pug">
carousel(
  loop='true'
  perPage='1'
  autoplay='true'
  autoplayHoverPause='true'
  paginationPadding='3')
  slide(v-for='image in images')
    figure.image
      img(:src='image')
</template>

<script>
export default {
  data: function () {
    return {
      images: [
        '/carousel/1.jpg',
        '/carousel/2.jpg',
        '/carousel/3.jpg'
      ]
    }
  }
}
</script>


<style scoped>
img {
  height: 240px;
  width: 100% !important;
}
</style>
