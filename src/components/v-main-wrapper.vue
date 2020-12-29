<template>
  <div class="v-main-wrapper">
    <v-header></v-header>
    <router-view/>
    <v-bottom-nav></v-bottom-nav>
  </div>
</template>

<script>
import vHeader from '@/components/layouts/v-header'
import vBottomNav from '@/components/layouts/v-bottom-nav'
export default {
  name: "v-main-wrapper",
  props:{

  },
  components:{
    vHeader,
    vBottomNav
  },
  data(){
    return {}
  },
  computed:{

  }
}
</script>

<style>

</style>