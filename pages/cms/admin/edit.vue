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
            <tr>
              <td>
                <div @click="updateUser()" class="px-8 py-2 text-center text-white font-bold bg-accentOrange rounded-full">
                  Update
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'cms',
  data(){
    return {
      user: {}
    }
  },
  async fetch(){
    this.user = await this.$axios.$get('/user/' + this.$route.query.id,{
      headers: {
        'auth-token': this.$auth.strategy.token.get()
      }
    })
    .then(res => res.user);
  },
  methods: {
    updateUser: async function() {
      await this.$axios.$put('/user/' + this.$auth.user.userId, {
        nama: user.nama,
        phone: user.phone
      });

      this.$router.go(-1);
    }
  }
}
</script>
