<template>
  <div class="overflow-scroll">
      <Topbar :title="component.component" backButton=true />
      <div class="main-container flex flex-col my-6">
        <input type="text" v-model="component.content.title" class="px-3 py-2 my-2 border border-slate-300 rounded-xl">
        <textarea v-if="component.content.text != undefined"  v-model="component.content.text" class="px-4 py-2 my-2 border border-slate-300 rounded-xl"></textarea>
        <!-- Image: array/not -->
        <div v-if="component.content.image != undefined" class="w-full">
          <h3  class="my-2">Image</h3>
          <div v-if="(component.content.image instanceof Array)" class="flex flex-row flex-wrap justify-evenly">
            <div
              v-for="(img, index) in component.content.image"
              :key="'image' + index"
              class="p-2 flex flex-col border border-slate-300 rounded-md"
            >
              <img :src="imageUrl + img.url" class="w-64">
              <input type="text" v-model="img.alt" class="px-3 py-1 border border-slate-300 rounded-xl">
            </div>
          </div>
          <div v-else class="w-fit p-2 my-2 flex flex-col border border-slate-300 rounded-md">
            <img :src="imageUrl + component.content.image.url" class="w-64 my-2">
            <input type="text" v-model="component.content.image.alt" class="px-3 py-1 border border-slate-300 rounded-xl">
          </div>
        </div>
        <!-- card -->
        <div v-if="component.content.card != undefined" class="w-full">
          <h3>Card</h3>
          <div
            v-for="(card, index) in component.content.card"
            :key="'image' + index"
            class="p-2 flex flex-row border border-slate-300 rounded-md"
          >
            <div class="w-fit my-2 mr-4 flex flex-col">
              <img :src="imageUrl + card.image.url" class="w-64 mb-2">
              <input type="text" v-model="card.image.alt" class="px-3 py-1 border border-slate-300 rounded-xl">
            </div>
            <div class="w-full flex flex-col justify-stretch">
              <input type="text" v-model="card.title" class="px-3 py-1 mb-2 border border-slate-300 rounded-xl">
              <textarea v-model="card.text" class="px-4 py-2 my-2 border border-slate-300 rounded-xl"></textarea>
            </div>
          </div>
        </div>
        <!-- Button -->
        <div v-if="component.content.button != undefined" class="w-full flex flex-col">
          <h3>Button</h3>
          <input type="text" v-model="component.content.button.text" class="px-4 py-2 my-2 border border-slate-300 rounded-xl">
          <input type="text" v-model="component.content.button.url" class="px-4 py-2 my-2 border border-slate-300 rounded-xl">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  // middleware: 'auth',
  async asyncData({ $axios, route }) {
    let component = await $axios.$get(
      'http://127.0.0.1:4000/components/' + route.query.id
    ).then((res) => res);
    console.log
    return { component }
  },
  layout: 'cms',
  data() {
    return {
      imageUrl: process.env.assetsUrl,
    }
  },
  methods: {

  }
}
</script>
