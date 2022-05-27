<template>
  <div>
    <Topbar title="Edit User" backButton=true />
    <div class="px-20 py-4 flex flex-row">
      <div class="mx-8">
        <table class="font-bold text-lg">
          <tbody>
            <tr class="bottomp-8">
              <td class="pr-8">Name</td>
              <td class="px-20"><input class="px-2 py-1 border-2 border-accentOrange rounded-xl" v-model="user.nama" /></td>
            </tr>
            <tr class="bottomp-8">
              <td class="pr-8">Contact Number</td>
              <td class="px-20">
                <input class="px-2 py-1 border-2 border-accentOrange rounded-xl" v-model="user.phone" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mx-8 flex flex-col justify-center items-center">
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
export default {
  middleware: 'auth',
  layout: 'cms',
  async asyncData($axios, route, $auth){
    let user = await $axios.$get('/user' + route.params.admin,{
      headers: {
        'auth-token': $auth.strategy.token.get()
      }
    })
    .then(res => res.user);

    return { user };
  },
  methods: {
    saveProfile: async function() {
      await this.$axios.$put('/user/' + this.$auth.user.userId, {
        nama: user.nama,
        phone: user.phone
      });

      let resUser = await this.$axios.$get('/user/' + this.$auth.user.userId,
      {
        headers: {
          'auth-token': this.$auth.strategy.token.get()
        }
      });

      this.$auth.setUser({
        userId: this.$auth.user.userId,
        ...resUser.user
      })
      this.$router.go(-1);
    }
  }
}
</script>
