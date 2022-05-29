<template>
  <div class="overflow-scroll">
    <Topbar title="Manage Templates" />
    <div class="main-container">
      <div>
        <h3 class="mb-4 font-bold text-xl">All Templates</h3>
        <div class="flex flex-col">
          <div class="px-4 py-2 flex flex-row font-semibold text-textGray border-b border-solid border-slate-300">
            <div class="w-1/4">Template</div>
            <div class="w-1/5">Created By</div>
            <div class="w-1/5">Status</div>
            <div class="">Actions</div>
          </div>
          <div v-for="template in templates" :key="template.title" class="px-4 py-2 flex flex-row items-center font-medium border-b border-solid border-slate-300">
            <div class="w-1/4">{{ template.title }}</div>
            <div class="w-1/5">{{ template.creator }}</div>
            <div class="w-1/5">{{ template.status }}</div>
            <div class="w-[30%] py-4 flex flex-row text-white h-fit">
              <div class="px-4 py-1 mr-1 bg-blue-500 rounded-full">VIEW</div>
              <div class="px-4 py-1 mr-1 bg-yellow-500 rounded-full">EDIT</div>
              <div class="px-4 py-1 mr-1 bg-red-500 rounded-full">DELETE</div>
            </div>
            <div class=" p-3 rounded-full hover:bg-slate-100 ">
              <mdicon name="dots-vertical" size="20" class="h-fit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // middleware: 'auth',
  layout: 'cms',
  data() {
    return {
      templates: [
        {
          title: 'Home',
          creator: 'John Doe',
          status: 'Published'
        },
        {
          title: 'About',
          creator: 'John Doe',
          status: 'Published'
        },
        {
          title: 'Contact',
          creator: 'John Doe',
          status: 'Published'
        }
      ]
    }
  }
}
</script>
