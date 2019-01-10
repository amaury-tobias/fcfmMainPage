<template lang="pug">
.container
  img(alt='Vue logo' src='../assets/logo.png')
  input(type='text' v-model='msg')
  a.button.is-primary(@click='send') Send
</template>


<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      msg: 'epale'
    }
  },
  methods: {
    send: async function () {
      this.msg = ''
    }
  }
}
</script>
