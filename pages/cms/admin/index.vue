<template>
  <div class="overflow-scroll">
    <Topbar title="Manage Admin" />
    <div class="main-container">
      <div class="m-4 font-bold text-lg">All Admin</div>
      <div class="flex flex-col">
        <div class="px-4 py-2 flex flex-row font-semibold text-textGray border-b border-solid border-slate-300">
          <div class="w-1/3">Email</div>
          <div class="w-1/3">Name</div>
          <div class="">Role</div>
        </div>
        <div v-for="(user, index) in users" :key="'user' + index" class="px-4 py-2 flex flex-row items-center font-medium border-b border-solid border-slate-300">
          <div class="w-1/3 py-4">
            {{ user.email }}
          </div>
          <div class="w-1/3">
            {{ user.nama }}
          </div>
          <div class="w-1/6 py-4 text-white ">
            <div v-if="user.groupId == 'CMSSuperAdmin'" class="w-fit px-6 py-2 bg-green-500 rounded-full">ADMIN</div>
            <div v-else class="w-fit px-6 py-2 bg-yellow-500 rounded-full">EDITOR</div>
          </div>
          <div class="w-1/6 justify-self-end flex flex-row justify-end">
            <NuxtLink :to="'/cms/admin/' + user.id" class="p-3 rounded-full hover:bg-slate-100">
              <mdicon name="pencil" size="20" class="h-fit" />
            </NuxtLink>
            <div v-if="user.groupId != 'CMSSuperAdmin'" @click="deleteUser(user.id)" class="p-3 rounded-full hover:bg-slate-100">
              <mdicon name="trash-can" size="20" class="h-fit" />
            </div>
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
  async asyncData(context){
    let users = await context.app.$axios.$get('/user',{
      headers: {
        'auth-token': context.app.$auth.strategy.token.get()
      }
    })
    .then(res => res.users);

    return { users };
  },
  methods: {
    deleteUser: function(userId) {
      this.$axios.$delete('user/'+ userId,{
        headers: {
          'auth-token': this.$auth.strategy.token.get()
        }
      });
      this.$nuxt.refresh()
    }
  }
}
</script>
