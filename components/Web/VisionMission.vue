<template>
  <div class="py-20 px-32 bg-slate-300">
    <div class="p-20 flex flex-col items-center bg-cover bg-center bg-no-repeat">
      <h2 class="my-4 text-yellow-800">{{ compData.title }}</h2>
      <hr class="w-12 border-2 border-solid border-yellow-500">
      <div>
        <h3 class="my-4 text-center text-yellow-800">Visi</h3>
        <ul class="list-disc list-outside">
          <li v-for="(item, index) in compData.text.vision" :key="item + index">{{ item }}</li>
        </ul>
      </div>
      <div>
        <h3 class="my-4 text-center text-yellow-800">Misi</h3>
        <ul class="list-disc list-outside">
          <li v-for="(item, index) in compData.text.mission" :key="item + index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['compData'],
}
</script>
