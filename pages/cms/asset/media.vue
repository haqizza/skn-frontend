<template>
  <div>
    <Topbar title="Manage Asset" backButton=true />
    <div class="main-container">
      <form enctype="multipart/form-data" @submit.prevent="saveMedia()">
        <div class="border border-solid border-slate-400 rounded-2xl">
            <div class="mt-12 p-8 flex flex-row place-content-stretch rounded-b-2xl bg-slate-300">
              <div class="w-full h-80 relative place-content-center bg-transparent outline-dashed outline-slate-400 rounded-2xl">
                <input id="inputArea" @change="fileHandler(this)" type="file" name="inputFile" class="custom-file-input opacity-0 h-80 w-full inset-0 z-50">
                <h2 id="uploadText" class="absolute top-1/3 left-1/3 right-1/3 text-center font-normal z-10">Click to browse or drag and drop your files</h2>
              </div>
            </div>
        </div>
        <div class="flex flex-row justify-end">
          <div class="px-12 py-3 mt-3 rounded-2xl text-white font-bold bg-orange">Submit</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'cms',
  data() {
    return {
    }
  },
  methods: {
    saveMedia: function() {
    },
    fileHandler: () => {
      const inputEl = document.getElementById('inputArea');
      const inputText = document.getElementById('uploadText');

      inputText.innerHTML = inputEl.value.split("\\").pop();
    }
  },
  mounted() {
  }
}
</script>
