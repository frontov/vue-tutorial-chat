<template>
  <div class="v-header">
    <div class="v-header__back"
         v-if="!isRoot">
      <i class="material-icons"
         @click="goBack">
        keyboard_arrow_left
      </i>
      <span>back</span>
    </div>
    <div class="v-header__user-info"
         v-if="!isRoot">
      <span>{{ currentChatUser.name }}</span>
    </div>
    <div class="v-header__right-side"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "v-header",
  props: {},
  data() {

  },
  computed: {
    ...mapState([
      "currentChatUser"
    ]),
    isRoot() {
      return this.$route.path === '/';
    }
  },
  mounted() {
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>