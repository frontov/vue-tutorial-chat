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
import {mapState, mapActions} from 'vuex'

export default {
  name: "v-user-chat",
  props: {},
  computed: {
    ...mapState([
      'chats'
    ]),
    // currentChat() {
    //   return this.chats.find((c) => {
    //     return c.id == this.id
    //   })
    // }
  },
  methods: {
    ...mapActions([
      'ADD_MESSAGE_TO_CHAT',
      'FETCH_CHATS',
      'SET_USER_TO_HEADER'
    ]),
    sendMessage() {
      let chat = {
        id: this.currentChat.chat.length,
        time: new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: 'numeric',
          minute: 'numeric'
        }),
        text: this.textValue,
        type: "own"
      }
      this.currentChat.chat.push(chat);

      this.ADD_MESSAGE_TO_CHAT({userId: this.currentChat.id, chat: this.currentChat}).then(() => {
        this.FETCH_CHATS();
        this.textValue = ""
      });
    }
  },
  components: {
    vMessage
  },
  data() {
    return {
      textValue: '',
      currentChat: {}
    }
  },
  mounted() {
    this.FETCH_CHATS()
        .then(() => {
          this.chats.find((chat) => {
            if (chat.id == this.$route.query.id) {
              this.currentChat = chat;
            }
          })
        })
        .then(() => {
          this.SET_USER_TO_HEADER(this.currentChat)
        });


  }
}
</script>

<style>

</style>

