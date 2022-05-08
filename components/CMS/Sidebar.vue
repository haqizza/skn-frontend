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
      :class="menuClass"
    >
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
      menuClass: 'flex flex-row flex-wrap px-6 py-2 text-textGray',
      menu: [
        {
          title: 'Home',
          icon: 'home',
          url: '/cms'
        },
        {
          title: 'Analytics',
          icon: '',
          url: '/cms/analytics'
        },
        {
          title: 'Manage Assets',
          icon: '',
          url: '/cms/asset'
        },
        {
          title: 'Manage Pages',
          icon: '',
          url: '/cms/page'
        },
        {
          title: 'Manage Templates',
          icon: '',
          url: '/cms/template'
        },
        {
          title: 'Manage Themes',
          icon: '',
          url: '/cms/theme'
        },
        {
          title: 'Manage Admins',
          icon: '',
          url: '/cms/admin'
        },
        {
          title: 'Profile',
          icon: '',
          url: '/cms/profile'
        },
        {
          title: 'Settings',
          icon: '',
          url: '/cms/setting'
        },
      ]
    }
  },
  methods:{
  }
}
</script>
