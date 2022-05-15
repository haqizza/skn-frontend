<template>
  <div>
    <Topbar title="Manage Assets" />
    <div class="main-container">
      <h3 class="mb-4 font-bold text-xl">All Assets</h3>
      <div class="flex flex-row">
        <div v-for="asset in assets" :key="asset.title" class="w-80 m-2 flex flex-col border border-slate-300 rounded-lg overflow-hidden">
          <div class="h-48 w-full flex flex-col place-content-center overflow-hidden">
            <mdicon
              v-if="asset.type === 'text'"
              name="note-text-outline"
              size="48"
              class=" place-self-center"
            />
            <mdicon
              v-else-if="asset.type === 'video'"
              name="play-circle-outline"
              size="48"
              class=" place-self-center"
            />
            <img v-else :src="assetUrl + 'image11.jpeg'" class="object-cover">
          </div>
          <div>
            <h4 class="px-3 pt-3 text-lg font-bold">{{ asset.title }}</h4>
            <p class="px-3 pb-3 text-base">{{ asset.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'cms',
  data() {
    return {
      assetUrl: process.env.assetsUrl,
      assets: [
        {
          title: 'Text1',
          type: 'text',
          desc: 'Lorem Ispum'
        },
        {
          title: 'Image',
          type: 'image',
          desc: 'Lorem Ispum'
        },
        {
          title: 'Video',
          type: 'video',
          desc: 'Lorem Ispum'
        }
      ]
    }
  }
}
</script>
