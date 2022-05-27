<template>
  <div class="overflow-scroll">
      <Topbar :title="page.title" backButton=true />
      <div class="main-container mt-8">
        <div class="text-xl">Components</div>
        <div
          v-for="comp in components"
          :key="comp.id"
          class="h-full my-4 py-4 px-8 mr-6 flex flex-row text-lg items-center justify-between bg-white border border-slate-300 rounded-xl text-dark"
        >
          <div class="flex flex-row">
            <mdicon name="collage" size="26" class="mr-4" />
            <div>{{ comp.component }}</div>
          </div>
          <NuxtLink v-if="comp.content.title != 'Banner'" :to="'/cms/page/component?id=' + comp.id" class="p-2 hover:bg-slate-200 rounded-full">
            <mdicon name="pencil" size="26" />
          </NuxtLink>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  // middleware: 'auth',
  async asyncData({ $axios, route }) {
    let page = await $axios.$get(
      'http://127.0.0.1:4000/pages/' + route.params.page
    ).then((res) => res);

    let components = await $axios.$get(
      'http://127.0.0.1:4000/components/page/' + route.params.page
    ).then((res) => res);
    return { components, page }
  },
  layout: 'cms',
  data() {
    return {
      pageId: this.$route.params.page
    }
  },
  methods: {

  }
}
</script>
