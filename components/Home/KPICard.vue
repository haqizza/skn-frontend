<template>
  <div class="px-6 py-4 rounded-lg bg-orange">
    <p class="text-m text-dark font-semibold">{{ data.title }}</p>
    <h4 class="my-2 text-[42px] text-white font-bold">{{ data.value }}</h4>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>
