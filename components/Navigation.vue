<template>
  <div>
    <!-- Mobile -->
    <div class="grid grid-cols-3 p-2 md:hidden">
      <mdicon id="menuButton" @click="toggleMenu" name="menu" size="42" class="text-accentOrange active:text-slate-300"  />
      <NuxtLink to="/" class="">
        <img src="/img/logo-dark.png" alt="Logo Sinar Karya Nusa" class="w-16 justify-self-center">
      </NuxtLink>
    </div>
    <div id="mobileNav" :class="{ hidden: isHidden }">
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
        <img src="/img/logo.png" alt="Logo Sinar Karya Nusa" class="w-16 mr-4 justify-self-center">
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
      isHidden: true,
    }
  },
  methods: {
    toggleMenu() {
      console.log("as");
      this.isHidden = this.isHidden ? false : true;
    }
  }
}
</script>
