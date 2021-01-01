<template>
  <div class="v-contact-user-info">
    <div class="info__avatar"></div>
    <div class="info__content">
      <div class="info__name">
        <span>{{ contact_data.phone}}</span>
      </div>
      <div class="info__tools">
        <button class="start-call">Call</button>
        <button class="start-chat"
        @click="openChat">Chat</button>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: "v-contact-user-info",
  data() {
    return {
      contact_data: {}
    }
  },
  computed: {
    ...mapState([
      'contacts'
    ])
  },
  mounted() {
    this.contacts.find((contact) => {
      if (contact.id == this.$route.query.id) {
        this.contact_data = contact;
      }
    })
  },
  methods:{
    openChat(){
      this.FETCH_CHATS().
          then(()=>{
        this.$router.push({
          name: 'chat',
          query: {'id': this.contact_data.id}
        })
      })

    },
    ...mapActions([
      'FETCH_CHATS'
    ]),
  }
}
</script>

<style>

</style>