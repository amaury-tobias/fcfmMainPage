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
  mounted: function () {
    this.sockets.subscribe('message', (data) => {
      this.msg = data
      console.log(this.msg)
    })
  },
  methods: {
    send: async function () {
      await this.$socket.emit('emit_method', this.msg)
      this.msg = ''
    }
  }
}
</script>
