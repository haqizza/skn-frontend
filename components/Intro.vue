<template>
  <div class="w-4/5 my-16 lg:my-20 m-auto z-40">
      <div class="lg:p-20 flex flex-row align-stretch bg-[url(~/assets/img/bg1.png)] bg-cover bg-center bg-no-repeat">
        <div class="w-1/2 mx-4 flex flex-col">
          <h2 class="my-4 text-yellow-800">SINAR KARYA NUSA</h2>
          <hr class="w-12 border-2 border-solid border-yellow-500">
          <p class="my-4 text-lg">Sejak didirikan pada 1998, CV. Sinar Karya Nusa telah memenuhi kebutuhan pallet kayu Industri dalam negeri untuk kebutuhan ekspor maupun pemakaian internal perusahaan</p>
          <NuxtLink class="w-fit px-3 py-2 my-4 bg-accentOrange text-white font-semibold" to="/tentang">Tentang Kami</NuxtLink>
        </div>
        <div class="w-1/2 h-72 mx-4">
          <img src="/img/image17.jpeg" alt="Foto Pengiriman Barang" class="object-cover w-full h-full">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['compData'],
  data() {
    return {
      data: {},
      
    }
  },
}
</script>
