<template>
  <!-- text-center text-right -->
  <div :class="'min-w-kpi min-h-kpi px-6 py-4 rounded-lg bg-accentOrange ' + ('text-' + align)">
    <p class="text-m text-dark font-semibold">{{ data.title }}</p>
    <h4 class="my-2 text-[42px] text-white font-bold">{{ data.value }}</h4>
  </div>
</template>

<script>
export default {
  props: ['data', 'align'],
  data() {
    return {
    }
  },
  methods:{
    setCardAlign: () => {
      this.cardClass += ' content-' + (this.align != '' ? this.align : 'start')
    }
  }
}
</script>
