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
          <NuxtLink v-if="comp.component != 'Banner'" :to="'/cms/page/component?id=' + comp.id" class="p-2 hover:bg-slate-200 rounded-full">
            <mdicon name="pencil" size="26" />
          </NuxtLink>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios, route, $auth }) {
    let page = await $axios.$get(
      '/pages/' + route.params.page,
      {
        headers: {
          'auth-token': $auth.strategy.token.get()
        }
      }
    ).then((res) => res.page);

    let components = await $axios.$get(
      '/pages/' + route.params.page + '/components',
      {
        headers: {
          'auth-token': $auth.strategy.token.get()
        }
      }
    ).then((res) => res.components);

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
