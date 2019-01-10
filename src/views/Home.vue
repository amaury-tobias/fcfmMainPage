<template lang="pug">
.container
  img(alt='Vue logo' src='../assets/logo.png')
  input(type='text' v-model='msg')
  a.button.is-primary(@click='send') Send
</template>


<script>

export default {
  name: 'home',
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
