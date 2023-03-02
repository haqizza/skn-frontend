<template>
  <div class="relative py-20 px-32 bg-[url(~/assets/img/bg-carte.png)] bg-cover overflow-hidden">
    <div class="absolute -right-2 top-0 flex flex-col items-end">
      <hr class="w-48 mb-6 border-8 border-solid border-orange-200 rounded-full">
      <hr class="w-28 border-8 border-solid border-orange-200  rounded-full">
    </div>
    <div class="p-20 flex flex-row align-stretch ">
      <div class="w-1/2 h-72 mx-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.3103421844959!2d107.01503517611813!3d-6.362799881941209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69913b21fd1085%3A0x9f9b81e1870d3c5!2sSinar%20karya%20nusa!5e0!3m2!1sen!2sid!4v1653054086758!5m2!1sen!2sid"
          class="w-full h-full"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="w-1/2 mx-4 flex flex-col">
        <h2 class="my-4 text-yellow-800">Lokasi</h2>
        <hr class="w-12 border-2 border-solid border-yellow-500">
        <p class="my-4 text-lg">CV. Sinar Karya Nusa <br>Jl. M.T Haryono-Setu, Taman Sari,<br> Kec.Setu, Bekasi, Jawa Barat (17320)</p>
      </div>
    </div>
    <div class="absolute -left-2 bottom-0 flex flex-col">
      <hr class="w-48 mb-6 border-8 border-solid border-lime-600 rounded-full">
      <hr class="w-28 mb-6 border-8 border-solid border-lime-600  rounded-full">
      <hr class="w-16 border-8 border-solid border-lime-600  rounded-full">
    </div>
  </div>
</template>

<script>
export default {
  props: ['compData'],
}
</script>
