<template>
  <div class="v-contact-list">
    <v-contact-user
        v-for="contact in contacts"
        :key="contact.id"
        :contact-data="contact"
        @toContactInfo="toContactInfo(contact)"
    />
  </div>
</template>

<script>
import vContactUser from './v-contact-user'
import {mapActions, mapState} from 'vuex'

export default {
  name: "v-contact-list",
  components: {
    vContactUser
  },
  methods: {
    ...mapActions([
      'FETCH_CONTACTS',
      'SET_USER_TO_HEADER'
    ]),
    toContactInfo(contact) {
      this.$router.push({
        name: 'contact',
        query: {'id': contact.id}
      })
      this.SET_USER_TO_HEADER(contact)
    }
  },
  computed: {
    ...mapState([
      'contacts'
    ])
  },
  mounted() {
    this.FETCH_CONTACTS();
  }
}
</script>

<style>

</style>