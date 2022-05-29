<template>
  <div>
    <Topbar title="Setting" />
    <div class="main-container">
      <h3 class="font-semibold text-xl mb-4">Basic Setting</h3>
      <p class="font-semibold text-base mb-2 ">Favicon</p>
      <div class="w-fit flex flex-col">
        <div class="w-44 p-4 p-2 flex flex-row justify-between items-center bg-gray-200 border border-slate-300 rounded-md">
          <div class="w-14 h-14">
            <img :src="manifest.favicon.url" :alt="manifest.favicon.name" class="w-full h-full object-contain">
          </div>
          <div>
            Custom
          </div>
          <div @click="showFavicons()" class="p-2 hover:bg-slate-300 rounded-full">
            <mdicon name="chevron-down" size="18" />
          </div>
        </div>
        <div id="favList" hidden>
          <div v-for="(icon, index) in favicons" :key="'icon' + index" class="w-44 p-4 p-2 bg-gray-200 border border-slate-300 rounded-md">
            <div class="w-14 h-14">
              <img :src="icon.url" :alt="icon.name" class="w-full h-full object-contain">
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <p class="font-semibold text-base mb-2 mt-4 ">Web Title</p>
      <input type="text" class="px-2 py-1 mb-2 text-base border-2 rounded-md" :value="manifest.title" />
      <div @click="updateManifest()" class="w-fit px-6 py-2 my-2 text-bold text-white bg-accentOrange rounded-lg">
        Save
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'cms',
  data() {
    return {
      favicons: [],
      manifest: {
        title: 'CV. Sinar Karya Nusa',
        favicon: {
          id: '1',
          url: 'https://tauhiidcoder.com/favicon/logo.ico',
          name: 'Logo Sinar Karya Nusa'
        }
      },
      favListHidden: true,
      imageUrl: process.env.assetsUrl,
    }
  },
  async fetch() {
    this.favicons = await this.$axios.$get(
      '/manifest/favicons',
      {
        headers: {
          'auth-token': this.$auth.strategy.token.get()
        }
      }
    ).then((res) => res.favicons);
  },
  methods: {
    showFavicons: function(){
      console.log('a');
      const el = document.getElementById('favList');
      if(el.hidden == true) {
        el.removeAttribute('hidden')
      }
      else {
        el.setAttribute('hidden', true)
      };
    },
    updateManifest: async function() {
      this.favicons = await this.$axios.$put(
        '/manifest',
        {
          title: this.manifest.title,
          favicon: this.manifest.favicon.id
        },
        {
          headers: {
            'auth-token': this.$auth.strategy.token.get()
          }
        }
      ).then((res) => res.favicons);

      this.$nuxt.refresh();
    }
  }
}
</script>
