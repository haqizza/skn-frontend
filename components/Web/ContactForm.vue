<template>
  <div class="py-12 flex flex-col items-center">
    <h2 class="mb-8 text-yellow-800">KIRIM KAMI PESAN</h2>
    <hr class="mb-8 w-12 border-2 border-solid border-yellow-500">
    <div class="flex flex-row">
      <div class="w-1/2 m-4 flex flex-col">
        <div class="mb-1">Nama</div>
        <input type="text" class="mb-4 px-2 px-1 border-2 border-accentOrange rounded-xl">
        <div class="mb-1">Email</div>
        <input type="email" class="mb-4 px-2 px-1 border-2 border-accentOrange rounded-xl">
        <div class="mb-1">No. Telp</div>
        <input type="text" class="mb-4 px-2 px-1 border-2 border-accentOrange rounded-xl">
        <div class="mb-1">Media Sosial</div>
        <input type="text" class="mb-4 px-2 px-1 border-2 border-accentOrange rounded-xl">
      </div>
      <div class="w-1/2 m-4">
        <div class="mb-1">Pesan</div>
        <textarea type="text" class="w-full h-full mb-4 px-2 px-1 border-2 border-accentOrange rounded-xl" placeholder="Tuliskan pesan Anda disini">
        </textarea>
      </div>
    </div>
    <div class="px-6 y-1 align-self-end bg-accentOrange hover:bg-slate-400">KIRIM</div>
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
