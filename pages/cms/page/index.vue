<template>
  <div class="overflow-scroll">
    <Topbar title="Manage Pages" />
    <div class="main-container">
      <div>
        <h3 class="mb-4 font-bold text-xl">All Pages</h3>
        <div class="flex flex-col">
          <div class="px-4 py-2 flex flex-row font-semibold text-textGray border-b border-solid border-slate-300">
            <div class="w-3/4">Page</div>
            <div class="">Actions</div>
          </div>
          <div v-for="page in pages" :key="page.title" class="px-4 py-2 flex flex-row items-center font-medium border-b border-solid border-slate-300">
            <div class="w-3/4">{{ page.title }}</div>
            <div class=" py-4 flex flex-row text-white h-fit">
              <a :href="page.url" target='_blank' class="px-4 py-1 mr-2 bg-sky-600 rounded-full">VIEW</a>
              <NuxtLink :to="'/cms/page/' + page.id" class="px-4 py-1 bg-green-600 rounded-full">EDIT</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // middleware: 'auth',
  layout: 'cms',
  async asyncData(context) {
    const pages = await context.app.$axios.$get(
      '/pages',
      {
        headers: {
          'auth-token': context.app.$auth.strategy.token.get()
        }
      }
    ).then((res) => res.pages);
    return { pages }
  },
  data() {
    return {
    }
  }
}
</script>
