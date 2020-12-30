<template>
  <div class="v-user"
  @click="openChat">
    <div class="v-user__avatar"></div>
    <div class="v-user__info">
      <div class="info__name"> {{ userData.name }}</div>
      <div class="info__last-message"> {{ userData.chat[userData.chat.length - 1].text }}</div>
    </div>
    <div class="v-user__time">{{ userData.chat[userData.chat.length - 1].time }}</div>
  </div>
</template>

<script>
export default {
  name: "v-user",
  props: {
    userData: {
      type: Object,
      default: () => {
      }
    }
  },
  methods:{
    openChat(){
      this.$router.push({
        name: 'chat',
        params: {'messages':this.userData.chat, 'user':this.userData}
      })
    }
  }
}
</script>

<style scoped>

</style>