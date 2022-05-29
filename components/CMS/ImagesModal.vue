<template>
  <div class="fixed inset-0 z-50 bg-neutral-500/50">
    <div class="w-4/5 h-4/5 mx-auto mt-20 flex flex-col bg-white border border-slate-300 rounded-xl">
      <div class="px-4 py-2 flex flex-row justify-between items-center">
        <div class="text-semibold text-lg">
          {{ title }}
        </div>
        <div @click="close()" class="p-2 hover:bg-slate-300 rounded-full">
          <mdicon name="close" size="22" />
        </div>
      </div>

      <div class="w-full grid grid-cols-3 overflow-scroll">
        <div v-for="(asset, index) in assets" :key="'asset' + index" @click="changeImage(asset.url)" class="w-80 h-40 m-2 border border-slate-300 rounded-lg overflow-hidden">
            <img :src="asset.url" class="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: ['title'],
    data() {
      return {
        assets: []
      }
    },
    async fetch() {
      this.assets = await this.$axios.$get(
        '/assets',
        {
          headers: {
            'auth-token': this.$auth.strategy.token.get()
          }
        }
      ).then((res) => res.assets);
    },
    methods: {
      close: function() {
        this.$emit('close');
      },
      changeImage: function(imageUrl) {
        this.$emit('change-image', imageUrl.split('/').pop());
      }
    },
  };
</script>
