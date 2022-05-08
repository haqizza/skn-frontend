<template>
  <div class="w-1/6 flex flex-col bg-dark">
    <div class=" py-4 flex flex-row items-center justify-center">
      <img class="w-14 pr-2" src="~/assets/img/logo.png" alt="Logo Sinar Karya Nusa">
      <p class="text-textGray font-xl font-bold">
        SKN Admin
      </p>
    </div>
    <!-- active-menu -->
    <NuxtLink
      v-for="item in menu"
      id="link"
      :key="item.title"
      :to="item.url"
      class="flex flex-row flex-wrap px-6 py-3 text-textGray items-center"
    >
      <mdicon :name="item.icon" size="20" class="mr-2" />
      <div class="text-bold">
        {{ item.title }}
      </div>
    </NuxtLink>
  </div>
</template>

<script>

export default {
  data() {
    return{
      menu: [
        {
          title: 'Home',
          icon: 'home',
          url: '/cms'
        },
        {
          title: 'Analytics',
          icon: 'chart-pie',
          url: '/cms/analytics'
        },
        {
          title: 'Manage Assets',
          icon: 'folder-image',
          url: '/cms/asset'
        },
        {
          title: 'Manage Pages',
          icon: 'book-multiple',
          url: '/cms/page'
        },
        {
          title: 'Manage Templates',
          icon: 'collage',
          url: '/cms/template'
        },
        {
          title: 'Manage Themes',
          icon: 'format-paint',
          url: '/cms/theme'
        },
        {
          title: 'Manage Admins',
          icon: 'account-group',
          url: '/cms/admin'
        },
        {
          title: 'Profile',
          icon: 'account-tie',
          url: '/cms/profile'
        },
        {
          title: 'Settings',
          icon: 'cog',
          url: '/cms/setting'
        },
      ]
    }
  },
  methods:{
  }
}
</script>
