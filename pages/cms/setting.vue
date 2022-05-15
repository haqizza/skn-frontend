<template>
  <div>
    <Topbar title="Setting" />
    <div class="main-container">
      <h3 class="font-semibold text-xl mb-4">Basic Setting</h3>
      <p class="font-semibold text-base mb-2 ">Web Title</p>
      <input type="text" class="px-2 py-1 mb-2 text-base border-2 rounded-md" :value="getSiteIdentity.title" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  layout: 'cms',
  computed: {
    ...mapGetters(['getSiteIdentity'])
  }
}
</script>
