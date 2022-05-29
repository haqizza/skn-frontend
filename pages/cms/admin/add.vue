<template>
  <div>
    <Topbar title="Add User" backButton=true />
    <div class="px-20 py-4 flex flex-row">
      <div class="mx-8">
        <form @submit.prevent="createUser()" method="post">
        <table class="font-bold text-lg">
          <tbody>
            <tr class="bottomp-8">
              <td class="pr-8">Name</td>
              <td class="px-20"><input class="px-2 py-1 border-2 border-accentOrange rounded-xl" v-model="user.nama" required /></td>
            </tr>
            <tr class="bottomp-8">
              <td class="pr-8">Phone</td>
              <td class="px-20"><input class="px-2 py-1 border-2 border-accentOrange rounded-xl" v-model="user.phone" required /></td>
            </tr>
            <tr class="bottomp-8">
              <td class="pr-8">Email</td>
              <td class="px-20">
                <input type="email" class="px-2 py-1 border-2 border-accentOrange rounded-xl" v-model="user.email" required />
              </td>
            </tr>
            <tr class="bottomp-8">
              <td class="pr-8">Password</td>
              <td class="px-20">
                <div class="flex-flex-col">
                  <input :type="passwordInputType" class="px-2 py-1 border-2 border-accentOrange rounded-xl" v-model="user.password" required />
                  <div>
                    <input type="checkbox" id="visibility" name="visibility" @click="changePasswordVisibility()">
                    <label class="h-fit my-auto text-sm text text-gray pl-1.5" for="visibility">Show Password</label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Create" class="px-8 py-2 text-center text-white font-bold bg-accentOrange rounded-full">
              </td>
            </tr>
          </tbody>
        </table>
        </form>
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
      user: {
        nama: '',
        email: '',
        password: '',
        phone: ''
      },
      passwordInputType: 'password'
    }
  },
  methods: {
    createUser: async function() {
      try{
        await this.$axios.$post('/user',
          {
            ...this.user,
            groupId: 'CMSSuperAdmin'
          },
          {
            headers: {
              'auth-token': this.$auth.strategy.token.get()
            }
          }
        );

        this.$router.go(-1);
      }catch(e){
        console.log(e);
      }
    },
    changePasswordVisibility: function() {
      this.passwordInputType = this.passwordInputType == 'password' ? 'text' : 'password';
    }
  }
}
</script>
