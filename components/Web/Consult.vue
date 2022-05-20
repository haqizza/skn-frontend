<template>
  <div class="w-full my-8 grid grid-cols-2 overflow-hidden">
    <div class="w-full h-80">
      <img :src="imageUrl + 'image10.jpeg'" alt="Foto Palet" class="object-cover object-center w-full h-full">
    </div>
    <div class="w-full h-80 flex flex-col justify-center bg-accentOrange ">
      <div class="w-5/6 px-16">
        <h1 class="mb-4 text-white font-black">INGIN BERKONSULTASI DENGAN KAMI?</h1>
        <p class="my-4 text-white font-bold tracking-wider">Kami selalu siap untuk menjawab pertanyaan anda</p>
        <NuxtLink class="w-fit px-3 py-2 my-4 bg-white text-accentOrange font-bold" to="/aktivitas">KONTAK KAMI</NuxtLink>
      </div>
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
