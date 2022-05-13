<template>
  <div>
    <Topbar title="Profile" />
    <div class="px-20 py-4 flex flex-row">
      <div class="mx-8">
        <table class="font-bold text-lg">
          <tr class="bottomp-8">
            <td class="pr-8">Name</td>
            <td class="right-colon px-20">{{ getUserData.name }}</td>
          </tr>
          <tr class="bottomp-8">
            <td class="pr-8">Email</td>
            <td class="right-colon px-20">{{ getUserData.email }}</td>
          </tr>
          <tr class="bottomp-8">
            <td class="pr-8">Contact Number</td>
            <td class="right-colon px-20">{{ getUserData.phone }}</td>
          </tr>
          <tr class="bottomp-8">
            <td class="pr-8">Address</td>
            <td class="right-colon px-20">{{ getUserData.address }}</td>
          </tr>
          <tr class="bottomp-8">
            <td class="pr-8">City</td>
            <td class="right-colon px-20">{{ getUserData.city }}</td>
          </tr>
          <tr class="bottomp-8">
            <td class="pr-8">Province/State</td>
            <td class="right-colon px-20">{{ getUserData.state }}</td>
          </tr>
          <tr class="bottomp-8">
            <td class="pr-8">Country</td>
            <td class="right-colon px-20">{{ getUserData.country }}</td>
          </tr>
        </table>
      </div>
      <div class="mx-8 flex flex-col justify-center items-center">
        <div id="profileImage" class="w-48 h-48 bg-cover rounded-full outline outline-offset-8 outline-2 outline-orange">
          <img class="w-48 h-48 rounded-full" :src="getImgUrl(getUserData.img)" alt="User photo" />
        </div>
        <NuxtLink to="profile/edit" class="px-8 py-2 mt-10 text-center text-white font-bold bg-orange rounded-full">
          Edit Profile
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  layout: 'cms',
  data() {
    return {

    }
  },
  methods: {
    getImgUrl: function(filename) {
      return require('@/assets/img/' + filename)
    }
  },
  computed: {
    ...mapGetters(['getUserData'])
  }
}
</script>
