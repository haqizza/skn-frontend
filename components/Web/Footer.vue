<template>
  <div>
    <div class="p-8 mt-8 grid grid-cols-4 bg-gray-100 ">
      <div class="mx-3 place-self-center">
        <img :src="imageUrl + 'LOGO.png'" alt="Logo Sinar Karya Nusa" class="w-24 md:w-48 mb-3">
      </div>
      <div class="mx-3">
        <h3 class="my-3 font-bold text-yellow-800">KONTAK KAMI</h3>
        <hr class="w-8 my-3 border-2 border-solid border-accentOrange">
        <div class="my-3 flex flex-row ">
          <mdicon name="map-marker-outline" size="28" class="mr-2 text-accentOrange" />
          <p  class="text-base font-medium ">
            CV. Sinar Karya Nusa<br>
            Jl. M.T Haryono-Setu, Taman Sari,<br>
            Kec.Setu, Bekasi, Jawa Barat (17320).<br>
          </p>
        </div>
        <div class="my-3 flex flex-row ">
          <mdicon name="phone-outline" size="28" class="mr-2 text-accentOrange " />
          <a href="" class="text-base font-medium hover:text-accentOrange">085232-xxxxx</a>
        </div>
        <div class="my-3 flex flex-row ">
          <mdicon name="email-outline" size="28" class="mr-2 text-accentOrange" />
          <a href="mailto:" class="text-base font-medium hover:text-accentOrange">info@sinarkaryanusa.id </a>
        </div>
      </div>
      <div class="mx-3">
        <h3 class="my-3 font-bold text-yellow-800">KONTAK KAMI</h3>
        <hr class="w-8 my-3  border-2 border-solid border-accentOrange">
        <div class="my-3 flex flex-col">
          <NuxtLink to="/tentang" class="my-1 text-base hover:text-accentOrange">TENTANG KAMI</NuxtLink>
          <NuxtLink to="/produk" class="my-1 text-base hover:text-accentOrange">PRODUK</NuxtLink>
          <NuxtLink to="/proses" class="my-1 text-base hover:text-accentOrange">PROSES</NuxtLink>
          <NuxtLink to="/aktivitas" class="my-1 text-base hover:text-accentOrange">AKTIVITAS LAIN</NuxtLink>
        </div>
      </div>
      <div class="mx-3">
        <h3 class="my-3 font-bold text-yellow-800">MEDIA SOSIAL</h3>
        <hr class="my-3 w-8 border-2 border-solid border-accentOrange">
        <div class="my-3 flex flex-col">
          <a href="facebook.com" class="my-1 text-base hover:text-accentOrange">FACEBOOK</a>
          <a href="instagram.com" class="my-1 text-base hover:text-accentOrange">INSTAGRAM</a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="p-3 text-center bg-neutral-500">
      <h4 class="text-white">&copy; 2022 CV SINAR KARYA NUSA</h4>
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
