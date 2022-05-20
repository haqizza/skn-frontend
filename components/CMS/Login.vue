<template>
  <div class="w-1000 h-4/5 flex flex-row flex-wrap bg-white rounded-lg">
    <div class="min-w-300 w-35p h-full flex flex-col flex-wrap items-center justify-center">
      <div class="my-2">
        <img class="w-36" :src="imageUrl + 'LOGO.png'" alt="Logo Sinar Karya Nusa">
      </div>
      <p class="text-lg text-accentGray font-black tracking-wider my-2">CV. SINAR KARYA NUSA</p>
      <p class="text-lg font-black tracking-wider my-2">Login to Dashboard Admin</p>
      <form class="w-10/12" @submit.prevent="handleSubmit">
        <div class="flex flex-col w-full flex-wrap items-stretch justify-center text-xs my-2">

          <label class="text-tiny text-accentGray font-bold" for="email">Email</label>
          <input id="email" class="rounded-lg outline-none px-4 py-2 my-2 border border-slate-300" name="email" type="email" placeholder="Email Address" v-model="email" required>

          <label class="text-tiny text-accentGray font-bold" for="password">Password</label>
          <input id="password" class="rounded-lg outline-none px-4 py-2 my-2 border border-slate-300" name="password" :type="passwordInputType" placeholder="Password" v-model="password" required>

          <div class="flex flex-row flex-wrap items-center justify-start my-2">
            <input type="checkbox" id="visibility" name="visibility" @click="changePasswordVisibility">
            <label class="h-fit my-auto text-tiny text-grey pl-1.5" for="visibility">Show Password</label>
          </div>
          <input class="rounded-lg grow outline-none px-4 py-3 my-2 text-white font-bold bg-accentOrange hover:bg-amber-600" type="submit" value="Login">
        </div>
      </form>
    </div>
    <div class="w-65p h-full">
      <img :src="imageUrl + 'image10.jpeg'" alt="" class="object-cover w-full h-full">
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      imageUrl: process.env.assetsUrl,
      email: '',
      password: '',
      passwordInputType: 'password'
    }
  },
  methods: {
    login: async function() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }
        });
        console.log(response);
        this.$router.push("/cms");
      } catch (err) {
      }
    },
    fetchUserData: async function(authStatus){
      const userData = await this.$axios
        .$get(
          url,
          {
            params: {
              email: this.email,
              password: this.password,
            }
          }
      )
      Document.cookie('userData', userData, 60*60*24*90);
    },
    changePasswordVisibility: function() {
      this.passwordInputType = this.passwordInputType == 'password' ? 'text' : 'password';
    }
  },
}
</script>
