<template>
  <div>
    <Topbar title="Profile" />
    <div class="px-20 py-4 flex flex-row">
      <div class="mx-8">
        <table class="font-bold text-lg">
          <tr class="bottomp-8">
            <td class="pr-8">Name</td>
            <td class="right-colon px-20">{{ $auth.user.nama }}</td>
          </tr>
          <tr class="bottomp-8">
            <td class="pr-8">Email</td>
            <td class="right-colon px-20">{{ $auth.user.email }}</td>
          </tr>
          <tr class="bottomp-8">
            <td class="pr-8">Contact Number</td>
            <td class="right-colon px-20">{{ $auth.user.phone }}</td>
          </tr>
          <tr>
            <td>
              <NuxtLink to="profile/edit" class="px-8 py-2 mt-10 text-center text-white font-bold bg-accentOrange rounded-full">Edit</NuxtLink>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'cms',
  data() {
    return {
      imageUrl: process.env.assetsUrl
    }
  }
}
</script>
