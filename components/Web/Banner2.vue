<template>
  <div class="">
    <div class="w-full h-40 md:h-96">
      <img :src="imageUrl + image" alt="Pengiriman Barang" class="object-cover w-full h-full">
    </div>
  </div>
</template>

<script>
export default {
  props: ['image'],
  data() {
    return {
      imageUrl: process.env.assetsUrl,
    }
  },
}
</script>
