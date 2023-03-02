<template>
  <div class="py-20 px-24 bg-slate-300">
    <div class="p-20 flex flex-col content-center bg-cover bg-center bg-no-repeat">
      <div class="mx-4 flex flex-col items-center">
        <h2 class="my-4 text-center text-yellow-800">PROSES LENGKAP</h2>
        <hr class="w-12 x-auto border-2 border-solid border-yellow-500">
      </div>
      <div v-for="(item, index) in proses" :key="'process' + index" class="flex flex-row my-4 justify-start items-center">
        <div v-if="index % 2 == 0" class="w-24 h-24 rotate-45 flex flex-row items-center justify-center bg-accentOrange rounded-xl">
          <h2 class="w-fit h-fit -rotate-45 text-4xl text-white">{{ index + 1 }}</h2>
        </div>
        <div v-else class="w-24 h-24 rotate-45 flex flex-row items-center justify-center bg-lime-800 rounded-xl">
          <h2 class="w-fit h-fit -rotate-45 text-4xl text-white">{{ index + 1 }}</h2>
        </div>
        <div class="w-1/2 px-16 py-4 mx-4 ">
          <h3 class="my-4 text-left text-lime-800">{{ item.title }}</h3>
          <p class="my-4 text-lg">{{ item.text }}</p>
        </div>
        <div class="h-60 w-96 mx-4">
          <img :src="'/img/' + item.image.name" :alt="item.image.alt" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proses: [
        {
          id: "pc02c00",
          title: "Pengaplikasian Obat Anti Rayap",
          text: "Deskripsi",
          image: {
            name: "image1.jpeg",
            alt: "Pengaplikasian Obat Anti Rayap"
          }
        },
        {
          id: "pc02c01",
          title: "Vacuum Drying Kayu",
          text: "Deskripsi",
          image: {
            name: "image26.jpeg",
            alt: "Vacuum Drying Kayu"
          }
        },
        {
          id: "pc02c02",
          title: "",
          text: "Deskripsi",
          image: {
            name: "image27.jpeg",
            alt: "Logo Sinar Karya Nusa"
          }
        },
        {
          id: "pc02c03",
          title: "Penghalusan Permukaan Kayu",
          text: "Deskripsi",
          image: {
            name: "image9.jpeg",
            alt: "Penghalusan Permukaan Kayu"
          }
        },
        {
          id: "pc02c04",
          title: "Pembuatan Pallet",
          text: "Deskripsi",
          image: {
            name: "image8.jpeg",
            alt: "Pembuatan Pallet"
          }
        }
      ]
    }
  },
}
</script>
