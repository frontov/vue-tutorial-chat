<template>
  <div class="v-users-list">
    <v-user
    v-for="chat in chats"
    :key="chat.id"
    :user-data="chat"/>
  </div>
</template>

<script>
import vUser from './v-user'
import {mapState, mapActions} from 'vuex'

export default {
  name: "v-users-list",
  components: {
    vUser
  },
  computed: {
    ...mapState([
      'chats'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_CHATS'
    ])
  },
  mounted() {
    this.FETCH_CHATS();
  }
}
</script>

<style scoped>

</style>