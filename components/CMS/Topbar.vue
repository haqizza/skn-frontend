<template>
  <div class="flex flex-row items-center justify-between p-8">
    <div class="flex flex-row text-dark text-xl font-bold">
      <mdicon v-if="backButton" name="arrow-left" class="mr-3" />
      <div>
        {{ title }}
      </div>
    </div>
    <div class="flex flex-row">
      <div class="h-fit text-dark text-base self-center mr-4">
        {{ getUserData.name }}
      </div>
      <div id="userImage" class="w-10 h-10 bg-cover rounded-full outline outline-offset-2 outline-2 outline-slate-300">
        <img class="w-10 h-10 rounded-full" :src="imageUrl + getUserData.img" alt="User photo" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    title: {
      type: String
    },
    backButton: {
      default: false
    }
    },
  data() {
    return {
      imageUrl: process.env.assetsUrl
    }
  },
  methods:{
    goBack: function() {
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapGetters(['getUserData'])
  }
}
</script>
