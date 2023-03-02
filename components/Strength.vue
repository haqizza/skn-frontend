<template>
  <div class="py-20 px-32 bg-slate-300">
    <div class="p-20 flex flex-col items-center bg-cover bg-center bg-no-repeat">
      <h2 class="my-4 text-yellow-800">Keunggulan Produk</h2>
      <hr class="w-12 mb-16 border-2 border-solid border-yellow-500">
      <div v-for="(item, index) in strength" :key="'image' + index" :index="index">
        <div v-if="index % 2 == 0" class="flex flex-row mb-12 mx-4">
          <div class="h-64 w-96">
            <img :src="'/img/' + item.image.name" :alt="item.image.alt" class="w-full h-full object-cover">
          </div>
          <div class="px-16 py-4">
            <h3 class="my-4 text-center text-lime-800">{{ item.title }}</h3>
            <p class="my-4 text-lg">{{ item.text }}</p>
          </div>
        </div>
        <div v-else class="flex flex-row mb-12 mx-4">
          <div class="px-16 py-4">
            <h3 class="my-4 text-center text-lime-800">{{ item.title }}</h3>
            <p class="my-4 text-lg">{{ item.text }}</p>
          </div>
          <div class="h-64 w-96 mx-4">
            <img :src="'/img/' + item.image.name" :alt="item.image.alt" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      strength: [
        {
          id: "pd02c00",
          title: "Keunggulan 1",
          text: "Deskripsi Keunggulan 1",
          image: {
            name: "image12.jpeg",
            alt: "Logo Sinar Karya Nusa"
          }
        },
        {
          id: "pd02c01",
          title: "Keunggulan 2",
          text: "Deskripsi Keunggulan 2",
          image: {
            name: "image12.jpeg",
            alt: "Logo Sinar Karya Nusa"
          }
        },
        {
          id: "pd02c02",
          title: "Keunggulan 3",
          text: "Deskripsi Keunggulan 3",
          image: {
            name: "image12.jpeg",
            alt: "Logo Sinar Karya Nusa"
          }
        }
      ]
    }
  },
}
</script>
