<template>
  <div class="overflow-scroll">
    <Topbar title="Manage Admin" />
    <div class="main-container">
      <div class="m-4 font-bold text-lg">All Admin</div>
      <div class="flex flex-col">
        <div class="px-4 py-2 flex flex-row font-semibold text-textGray border-b border-solid border-slate-300">
          <div class="w-2/5">Email</div>
          <div class="w-2/5">Name</div>
          <div class="">Role</div>
        </div>
        <div v-for="user in users" :key="user.user_name" class="px-4 py-2 flex flex-row items-center font-medium border-b border-solid border-slate-300">
          <div class="w-2/5 py-4">
            {{ user.user_email }}
          </div>
          <div class="w-2/5">
            {{ user.user_name }}
          </div>
          <div class="w-1/6 py-4 text-white ">
            <div v-if="user.role == 'admin'" class="w-fit px-6 py-2 bg-green-500 rounded-full">ADMIN</div>
            <div v-else class="w-fit px-6 py-2 bg-yellow-500 rounded-full">EDITOR</div>
          </div>
          <div class="p-3 rounded-full hover:bg-slate-100 justify-self-end">
            <mdicon name="dots-vertical" size="20" class="h-fit" />
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
  data() {
    return {
      users: [
        {
          user_email: 'john19@gmail.com',
          user_name: 'John Doe',
          role: 'admin'
        },
        {
          user_email: 'jane@gmail.com',
          user_name: 'Jane Doe',
          role: 'editor'
        },
        {
          user_email: 'example@gmail.com',
          user_name: 'Matt Damon',
          role: 'editor'
        },
        {
          user_email: 'ex@gmail.com',
          user_name: 'Robert Donwey',
          role: 'editor'
        },
        {
          user_email: 'exam@gmail.com',
          user_name: 'Janice Lee',
          role: 'editor'
        },
        {
          user_email: 'sample@gmail.com',
          user_name: 'Hendy Civil',
          role: 'editor'
        },
      ]
    }
  }
}
</script>
