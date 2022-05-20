<template>
  <div>
    <Topbar title="Manage Asset" backButton=true />
    <div class="main-container">
      <input class="p4 text-xl font-bold" v-model="content.title">
      <div>
          <client-only>
            <TipTapEditor />
          </client-only>
      </div>
      <div class="flex flex-row justify-end">
        <div @click="saveText()" class="px-12 py-4 rounded-2xl text-white font-bold bg-accentOrange">Submit</div>
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
      content: {
        title: 'Title desu',
        text: 'Default Text'
      }
    }
  },
  methods: {
    saveText: function(){

    }
  }
}
</script>
