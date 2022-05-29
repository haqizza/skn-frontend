<template>
  <div>
    <Topbar
      title="CMSHomePage"
    />
    <div class="px-8 pt-5">
      <p class="font-semibold text-dark tracking-wider">Selamat Datang</p>
      <h3 class="font-bold text-5xl my-4">{{ $auth.user.nama }}</h3>
      <div class="grid grid-cols-4 grid-flow-row gap-8 mt-8">
        <div class="p-4 rounded-lg bg-accentOrange col-span-2 row-span-3">
          {{  }}
        </div>
        <KPICard
          v-for="item in highlight"
          :key="item.title"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  name: 'CMSHomePage',
  layout: 'cms',
  data() {
    return{
      pageTitle: 'Overview',
      highlight: [
        {
          title: 'Pages',
          value: '15'
        },
        {
          title: 'Admins',
          value: '10'
        },
        {
          title: 'Asset',
          value: '50'
        },
        {
          title: 'Templates',
          value: '12'
        },
      ]
    }
  }
}
</script>
