<template>
  <div class="py-20 px-32 bg-slate-300">
    <div class="p-20 flex flex-col items-center bg-cover bg-center bg-no-repeat">
      <h2 class="my-4 text-yellow-800">AKTIVITAS LAIN</h2>
      <hr class="w-12 border-2 border-solid border-yellow-500">
      <div class="flex flex-row">
        <div class="h-80 w-96 mx-4">
          <img :src="imageUrl + 'image12.jpeg'" alt="Aktivitas 1" class="w-24 md:w-48 mb-3">
        </div>
        <div class="px-4 py-4 mx-4">
          <h3 class="my-4 text-center text-lime-800">Aktivitas 1</h3>
          <p class="my-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt lorem vitae arcu iaculis, ac ultrices turpis vulputate. Praesent bibendum hendrerit velit pharetra dapibus. Donec tincidunt ornare scelerisque. Vestibulum a velit varius, feugiat risus at, placerat elit. Vivamus ac dictum metus, sed convallis risus. Aliquam iaculis magna vel nulla tristique, a sagittis turpis vehicula. </p>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="h-80 w-96 mx-4">
          <img :src="imageUrl + 'image12.jpeg'" alt="Aktivitas 2" class="w-24 md:w-48 mb-3">
        </div>
        <div class="px-4 py-4 mx-4">
          <h3 class="my-4 text-center text-lime-800">Aktivitas 2</h3>
          <p class="my-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt lorem vitae arcu iaculis, ac ultrices turpis vulputate. Praesent bibendum hendrerit velit pharetra dapibus. Donec tincidunt ornare scelerisque. Vestibulum a velit varius, feugiat risus at, placerat elit. Vivamus ac dictum metus, sed convallis risus. Aliquam iaculis magna vel nulla tristique, a sagittis turpis vehicula. </p>
        </div>
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
