<template>
  <div>
    <!-- Mobile -->
    <div class="grid grid-cols-3 p-2 md:hidden">
      <div @click="toggleMenu()">
        <mdicon id="menuButton" name="menu" size="42" class="text-accentOrange active:text-slate-300"  />
      </div>
      <NuxtLink to="/" class="">
        <img :src="imageUrl + 'LOGO.png'" alt="Logo Sinar Karya Nusa" class="w-16 justify-self-center">
      </NuxtLink>
    </div>
    <div id="mobileNav" class="hidden">
      <div class="flex flex-col">
        <NuxtLink to="/tentang" class="p-2 text-base text-dark  hover:text-accentOrange hover:border-b-2 hover:border-solid hover:border-accentOrange">
          Tentang Kami
        </NuxtLink>
        <NuxtLink to="/produk" class="p-2 text-base text-dark  hover:text-accentOrange hover:border-b-2 hover:border-solid hover:border-accentOrange">
          Produk
        </NuxtLink>
        <NuxtLink to="/proses" class="p-2 text-base text-dark  hover:text-accentOrange hover:border-b-2 hover:border-solid hover:border-accentOrange">
          Proses
        </NuxtLink>
        <NuxtLink to="/aktivitas" class="p-2 text-base text-dark  hover:text-accentOrange hover:border-b-2 hover:border-solid hover:border-accentOrange">
          Aktivitas Lain
        </NuxtLink>
        <NuxtLink to="/kontak" class="p-2 text-base text-dark  hover:text-accentOrange hover:border-b-2 hover:border-solid hover:border-accentOrange">
          Kontak
        </NuxtLink>
      </div>
    </div>
    <!-- Desktop -->
    <div class="hidden py-2 px-4 md:flex md:flex-row justify-start align-items-center">
      <NuxtLink to="/" class="w-fit">
        <img :src="imageUrl + 'LOGO.png'" alt="Logo Sinar Karya Nusa" class="w-16 mr-4 justify-self-center">
      </NuxtLink>
      <NuxtLink to="/tentang" class="w-fit p-2 mx-1 text-lg font-semibold text-dark  hover:text-accentOrange hover:border-b-2 hover:border-solid hover:border-accentOrange">
        Tentang Kami
      </NuxtLink>
      <NuxtLink to="/produk" class="w-fit p-2 mx-1 text-lg font-semibold text-dark  hover:text-accentOrange hover:border-b-2 hover:border-solid hover:border-accentOrange">
        Produk
      </NuxtLink>
      <NuxtLink to="/proses" class="w-fit p-2 mx-1 text-lg font-semibold text-dark  hover:text-accentOrange hover:border-b-2 hover:border-solid hover:border-accentOrange">
        Proses
      </NuxtLink>
      <NuxtLink to="/aktivitas" class="w-fit p-2 mx-1 text-lg font-semibold text-dark  hover:text-accentOrange hover:border-b-2 hover:border-solid hover:border-accentOrange">
        Aktivitas Lain
      </NuxtLink>
      <NuxtLink to="/kontak" class="w-fit p-2 mx-1 text-lg font-semibold text-dark  hover:text-accentOrange hover:border-b-2 hover:border-solid hover:border-accentOrange">
        Kontak
      </NuxtLink>
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
  methods: {
    toggleMenu: function() {
      console.log("asd")
      const menu = document.getElementById('mobileNav');
      menu.classList.toggle('hidden');
    }
  }
}
</script>
