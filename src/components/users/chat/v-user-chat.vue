<template>
  <div class="v-user-chat">
    <v-message
        v-for="message in currentChat.chat"
        :key="message.id"
        :message="message"
    ></v-message>
    <div class="input__field">
      <input
          type="text"
          class="v-user-chat__textfield"
          v-model="textValue"
          @keypress.enter="sendMessage">
      <i class="material-icons"
         @click="sendMessage">send</i>

    </div>

  </div>
</template>

<script>
import vMessage from './v-message'
import {mapState} from 'vuex'

export default {
  name: "v-user-chat",
  props: {
    id: {
      type: String,
      default: () => '0'
    },
    user: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    ...mapState([
      'chats'
    ]),
    currentChat() {
      return this.chats.find((c) => {
        return c.id == this.id
      })
    }
  },
  methods: {
    sendMessage() {

    }
  },
  components: {
    vMessage
  },
  data() {
    return {
      textValue: ''
    }
  },
  mounted() {
    // console.log(this.$route.params)
    // console.log(this.id)
    // console.log(this.chats)
    console.log(this.currentChat)
  }
}
</script>

<style scoped>

</style>