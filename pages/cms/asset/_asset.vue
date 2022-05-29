<template>
  <div class="overflow-scroll">
    <Topbar title="Manage Assets" />
    <div class="main-container">
      <div class="flex flex-row justify-between items-center">
        <div class="mb-4 font-bold text-xl">All Assets</div>
        <NuxtLink to="/cms/asset/add" class="h-fit px-4 py-2 flex flex-row items-center bg-accentOrange text-white rounded-xl">
          <mdicon name="plus-circle" size="20" class="h-fit" />
          <div class="ml-2">Add</div>
        </NuxtLink>
      </div>
      <div class="w-fit grid grid-cols-3 flex-wrap">
        <div v-for="(asset, index) in assets" :key="'asset' + index" class="w-80 m-2 flex flex-col border border-slate-300 rounded-lg overflow-hidden">
          <div class="h-40 w-full flex flex-col overflow-hidden">
            <img :src="asset.url" class="object-cover" />
          </div>
          <h5 class="p-3">{{ asset.nama.split("/").pop() }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'cms',
  async asyncData({ $axios, $auth }) {
    let assets = await $axios.$get(
      '/assets',
      {
        headers: {
          'auth-token': $auth.strategy.token.get()
        }
      }
    ).then((res) => res.assets);
    return { assets }
  },
  data() {
    return {
      assetUrl: process.env.assetsUrl,
    }
  }
}
</script>
