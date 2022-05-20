<template>
  <div>
    <Topbar title="Profile" />
    <div class="px-20 py-4 flex flex-row">
      <div class="mx-8">
        <table class="font-bold text-lg">
          <tbody>
            <tr class="bottomp-8">
              <td class="pr-8">Name</td>
              <td class="px-20"><input class="px-2 py-1 border-2 border-accentOrange rounded-xl" :value="getUserData.name" /></td>
            </tr>
            <tr class="bottomp-8">
              <td class="pr-8">Email</td>
              <td class="px-20">
                <input class="px-2 py-1 border-2 border-accentOrange rounded-xl" :value="getUserData.email" />
              </td>
            </tr>
            <tr class="bottomp-8">
              <td class="pr-8">Contact Number</td>
              <td class="px-20">
                <input class="px-2 py-1 border-2 border-accentOrange rounded-xl" :value="getUserData.phone" />
              </td>
            </tr>
            <tr class="bottomp-8">
              <td class="pr-8">Address</td>
              <td class="px-20">
                <input class="px-2 py-1 border-2 border-accentOrange rounded-xl" :value="getUserData.address" />
              </td>
            </tr>
            <tr class="bottomp-8">
              <td class="pr-8">City</td>
              <td class="px-20">
                <input class="px-2 py-1 border-2 border-accentOrange rounded-xl" :value="getUserData.city" />
              </td>
            </tr>
            <tr class="bottomp-8">
              <td class="pr-8">Province/State</td>
              <td class="px-20">
                <input class="px-2 py-1 border-2 border-accentOrange rounded-xl" :value="getUserData.state" />
              </td>
            </tr>
            <tr class="bottomp-8">
              <td class="pr-8">Country</td>
              <td class="px-20">
                <input class="px-2 py-1 border-2 border-accentOrange rounded-xl" :value="getUserData.country" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mx-8 flex flex-col justify-center items-center">
        <div id="profileImage" class="w-48 h-48 bg-cover rounded-full outline outline-offset-8 outline-2 outline-accentOrange">
          <img class="w-48 h-48 rounded-full" :src="getImgUrl(userData.img)" alt="User photo" />
        </div>
        <div class="flex flex-col">
          <div @click="saveProfile()" class="px-8 py-2 mt-10 text-center text-white font-bold bg-accentOrange rounded-full">
            Edit Profile
          </div>
          <div @click="goBack()" class="px-8 py-2 mt-4 text-center text-white font-bold bg-accentOrange rounded-full">
            Cancel
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  middleware: 'auth',
  layout: 'cms',
  data() {
    return {
      userData: {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: '',
        img: ''
      }
    }
  },
  methods: {
    ...mapMutations(['SET_CURRENT_USERDATA']),
    getImgUrl: function(filename) {
      return require('@/assets/img/' + (filename == '' ? 'home.jpg' : filename))
    },
    saveProfile: function() {
      this.$axios.$post('', this.userData)
      this.SET_CURRENT_USERDATA(this.userData);
    },
  },
  computed: {
    ...mapGetters(['getUserData']),
  }
}
</script>
