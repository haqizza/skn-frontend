<template>
  <div class="relative py-20 px-32 bg-[url(~/assets/img/bg-carte.png)] bg-cover overflow-hidden">
    <div class="absolute -right-2 top-0 flex flex-col items-end">
      <hr class="w-48 mb-6 border-8 border-solid border-orange-200 rounded-full">
      <hr class="w-28 border-8 border-solid border-orange-200  rounded-full">
    </div>
    <div class="p-20 flex flex-row align-stretch ">
      <div class="w-1/2 h-72 mx-4">
        <img src="~/assets/img/palletes.png" alt="Foto Pengiriman Barang" class="object-cover w-full h-full">
      </div>
      <div class="w-1/2 mx-4 flex flex-col">
        <h2 class="my-4 text-yellow-800">SINAR KARYA NUSA</h2>
        <hr class="w-12 border-2 border-solid border-yellow-500">
        <p class="my-4 text-lg">CV. Sinar Karya Nusa menyediakan berbagai pallet kayu yang bisa disesuaikan dengan kebutuhan anda.</p>
      </div>
    </div>
    <div class="absolute -left-2 bottom-0 flex flex-col">
      <hr class="w-48 mb-6 border-8 border-solid border-lime-600 rounded-full">
      <hr class="w-28 mb-6 border-8 border-solid border-lime-600  rounded-full">
      <hr class="w-16 border-8 border-solid border-lime-600  rounded-full">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: process.env.assetsUrl,
    }
  },
}
</script>
