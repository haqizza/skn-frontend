<template>
  <div>
    <h1 v-if="error.statusCode === 404">Halaman tidak ditemukan</h1>
    <h1 v-else>Terjadi kesalahan</h1>
    <NuxtLink to="/" class="font-medium">Halaman Utama</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
