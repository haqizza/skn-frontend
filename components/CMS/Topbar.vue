4<template>
  <div class="flex flex-row items-center justify-between p-8">
    <div class="text-dark text-xl font-bold">
      {{ title }}
    </div>
    <div class="flex flex-row">
      <div class="h-fit text-dark text-base self-center mr-4">
        {{ getUserData.name }}
      </div>
      <div id="userImage" class="w-10 h-10 bg-cover rounded-full outline outline-offset-2 outline-2 outline-slate-300">
        <img class="w-10 h-10 rounded-full" :src="getImgUrl(getUserData.img)" alt="User photo" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['title'],
  methods:{
    getImgUrl: (filename) => {
      return require('@/assets/img/' + filename)
    }
  },
  computed: {
    ...mapGetters(['getUserData'])
  }
}
</script>
