<template>
  <div class="w-1/6 min-w-fit flex flex-col bg-dark">
    <div class=" py-4 flex flex-row items-center justify-center">
      <img class="w-14 pr-2" src="~/assets/img/logo.png" alt="Logo Sinar Karya Nusa">
      <p class="text-textGray font-xl font-bold">
        SKN Admin
      </p>
    </div>
    <!-- active-menu -->
    <NuxtLink to="/" class="flex flex-row flex-wrap px-6 py-3 text-textGray items-center">
      <mdicon name="home" size="20" class="mr-2" />
      <div class="text-bold">Home</div>
    </NuxtLink>
    <NuxtLink to="/cms/analytics" class="flex flex-row flex-wrap px-6 py-3 text-textGray items-center">
      <mdicon name="chart-pie" size="20" class="mr-2" />
      <div class="text-bold">Statistics</div>
    </NuxtLink>
    <NuxtLink to="/cms/asset" class="flex flex-row flex-wrap px-6 py-3 text-textGray items-center">
      <mdicon name="folder-image" size="20" class="mr-2" />
      <div class="text-bold">Manage Assets</div>
    </NuxtLink>
    <NuxtLink to="/cms/page" class="flex flex-row flex-wrap px-6 py-3 text-textGray items-center">
      <mdicon name="book-multiple" size="20" class="mr-2" />
      <div class="text-bold">Manage Pages</div>
    </NuxtLink>
    <NuxtLink to="/cms/template" class="flex flex-row flex-wrap px-6 py-3 text-textGray items-center">
      <mdicon name="collage" size="20" class="mr-2" />
      <div class="text-bold">Manage Templates</div>
    </NuxtLink>
    <NuxtLink to="/cms/theme" class="flex flex-row flex-wrap px-6 py-3 text-textGray items-center">
      <mdicon name="format-paint" size="20" class="mr-2" />
      <div class="text-bold">Manage Theme</div>
    </NuxtLink>
    <NuxtLink v-if="$auth.user.groupId == 'CMSSuperAdmin'" to="/cms/admin" class="flex flex-row flex-wrap px-6 py-3 text-textGray items-center">
      <mdicon name="account-group" size="20" class="mr-2" />
      <div class="text-bold">Manage Admins</div>
    </NuxtLink>
    <NuxtLink to="/cms/profile" class="flex flex-row flex-wrap px-6 py-3 text-textGray items-center">
      <mdicon name="account-tie" size="20" class="mr-2" />
      <div class="text-bold">Profile</div>
    </NuxtLink>
    <NuxtLink to="/cms/setting" class="flex flex-row flex-wrap px-6 py-3 text-textGray items-center">
      <mdicon name="cog" size="20" class="mr-2" />
      <div class="text-bold">Setting</div>
    </NuxtLink>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  .active-menu {
    background-color: #F39200 !important;
    align-self: end;
    color: white !important;
    width: 98%;
  }
</style>
