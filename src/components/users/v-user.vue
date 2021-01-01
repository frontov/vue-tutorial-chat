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
      // console.log(this.userData.chat)
      // console.log(this.userData)
      //
      // this.$router.push({
      //   name: 'chat',
      //   params: {'id':this.userData.id}
      // })
      this.$router.push({
        name: 'chat',
        query: {'id': this.userData.id}
      })
      // this.SET_USER_TO_HEADER(this.userData)
    }
  },
  mounted() {
    // console.log(this.userData)
  }
}
</script>

<style scoped>

</style>