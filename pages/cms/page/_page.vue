<template>
  <div class="overflow-scroll">
    <Topbar title="Manage Pages" />
    <div class="main-container">
      <div>
        <h3 class="mb-4 font-bold text-xl">All Pages</h3>
        <div class="flex flex-col">
          <div class="px-4 py-2 flex flex-row font-semibold text-textGray border-b border-solid border-slate-300">
            <div class="w-1/4">Page</div>
            <div class="w-1/5">Created By</div>
            <div class="w-1/5">Status</div>
            <div class="">Actions</div>
          </div>
          <div v-for="page in pages" :key="page.title" class="px-4 py-2 flex flex-row items-center font-medium border-b border-solid border-slate-300">
            <div class="w-1/4">{{ page.title }}</div>
            <div class="w-1/5">{{ page.creator }}</div>
            <div class="w-1/5">{{ page.status }}</div>
            <div class="w-[30%] py-4 flex flex-row text-white h-fit">
              <div class="px-4 py-1 mr-1 bg-blue-500 rounded-full">VIEW</div>
              <div class="px-4 py-1 mr-1 bg-yellow-500 rounded-full">EDIT</div>
              <div class="px-4 py-1 mr-1 bg-red-500 rounded-full">DELETE</div>
            </div>
            <div class=" p-3 rounded-full hover:bg-slate-100 ">
              <mdicon name="dots-vertical" size="20" class="h-fit" />
            </div>
          </div>
          <div class="m-4 place-self-end">
            <div class="w-fit py-2 px-4 flex flex-row items-center bg-orange text-white font-bold rounded-xl">
              <mdicon name="plus-circle" size="20" class="mr-2" />
              <div>Add New Page</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'cms',
  data() {
    return {
      pages: [
        {
          title: 'john19@gmail.com',
          creator: 'John Doe',
          status: 'admin'
        },
      ]
    }
  }
}
</script>
