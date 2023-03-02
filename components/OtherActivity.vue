<template>
  <div class="py-20 px-32 bg-slate-300">
    <div class="p-20 flex flex-col items-center bg-cover bg-center bg-no-repeat">
      <h2 class="my-4 text-yellow-800">PROSES LENGKAP</h2>
      <hr class="w-12 border-2 border-solid border-yellow-500 my-4">
      <div v-for="(item, index) in aktivitas" :key="'item' + index" class="flex flex-row my-4">
        <div class="h-60 w-96 mx-4">
          <img :src="'/img/' + item.image.name" :alt="item.image.alt" class="w-full h-full">
        </div>
        <div class="w-3/4 mx-4">
          <h3 class="my-4 text-left text-lime-800">{{ item.title }}</h3>
          <p class="my-4 text-lg">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aktivitas: [
        {
          id: "ac01c00",
          title: "Aktivitas 1",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt lorem vitae arcu iaculis, ac ultrices turpis vulputate. Praesent bibendum hendrerit velit pharetra dapibus. Donec tincidunt ornare scelerisque. Vestibulum a velit varius, feugiat risus at, placerat elit. Vivamus ac dictum metus, sed convallis risus. Aliquam iaculis magna vel nulla tristique, a sagittis turpis vehicula.",
          image: {
            name: "image12.jpeg",
            alt: "Aktivitas 1"
          }
        },
        {
          id: "ac01c01",
          title: "Aktivitas 2",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt lorem vitae arcu iaculis, ac ultrices turpis vulputate. Praesent bibendum hendrerit velit pharetra dapibus. Donec tincidunt ornare scelerisque. Vestibulum a velit varius, feugiat risus at, placerat elit. Vivamus ac dictum metus, sed convallis risus. Aliquam iaculis magna vel nulla tristique, a sagittis turpis vehicula.",
          image: {
            name: "image12.jpeg",
            alt: "Aktivitas 2"
          }
        }
      ]
    }
  },
}
</script>
