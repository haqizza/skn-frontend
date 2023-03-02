<template>
  <div class="py-12 flex flex-col items-center">
    <h2 class="mb-8 text-yellow-800">PROSES PEMBUATAN</h2>
    <hr class="mb-8 w-12 border-2 border-solid border-yellow-500">
    <p class="w-1/2 mb-8 text-center">CV. Sinar Karya Nusa membuat pallet kayu dengan metode Vacuum Klin Dryer yang membuat pallet lebih awet dan berkualitas.</p>
      <ClientOnly fallback-tag="span" fallback="Loading...">
        <carousel-3d>
          <slide v-for="(img, index) in carouselImages" :key="img.id" :index="index" class="!border-0 bg-transparent drop-shadow-md">
            <img :src="'/img/' + img.name" :alt="img.alt" class="object-cover h-full">
          </slide>
        </carousel-3d>
      </ClientOnly>
    <NuxtLink to="/proses" class="w-fit px-3 py-2 my-4 bg-accentOrange text-white font-semibold">LIHAT PROSES LENGKAP</NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselImages: [
        {
          id: "hm03i00",
          name: "palletes.png",
          alt: "Foto Pallet"
        },
        {
          id: "hm03i01",
          name: "palletes.png",
          alt: "Foto Pallet"
        },
        {
          id: "hm03i02",
          name: "palletes.png",
          alt: "Foto Pallet"
        },
        {
          id: "hm03i03",
          name: "palletes.png",
          alt: "Foto Pallet"
        },
        {
          id: "hm03i04",
          name: "palletes.png",
          alt: "Foto Pallet"
        }
      ]
    }
  },
}
</script>
