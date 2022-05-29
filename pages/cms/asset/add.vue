<template>
  <div >
    <Topbar title="Add Asset" backButton=true />
    <div class="main-container">
      <form id="uploadForm" enctype="multipart/form-data" @submit.prevent="addMedia()">
        <div class="border border-solid border-slate-400 rounded-2xl">
          <div class="mt-12 p-8 flex flex-row place-content-stretch rounded-b-2xl bg-slate-300">
            <div class="w-full h-80 relative place-content-center bg-transparent outline-dashed outline-slate-400 rounded-2xl">
              <input id="inputArea" @change="fileHandler(this)" type="file" name="file" class="custom-file-input opacity-0 h-80 w-full inset-0">
              <h2 id="uploadText" class="absolute top-1/3 left-1/3 right-1/3 text-center font-normal">Click to browse or drag and drop your files</h2>
            </div>
            <div hidden>
              <input type="text" id="filename" name="filename" v-model="fileData.filename">
              <input type="text" id="folder" name="folder" v-model="fileData.folder">
              <input type="text" id="type" name="type" v-model="fileData.type">
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-end">
          <input id="submitButton" type="submit" value="Submit" class="px-12 py-3 mt-3 rounded-2xl text-white font-bold bg-accentOrange">
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  middleware: 'auth',
  layout: 'cms',
  data() {
    return {
      fileData: {
        file: '',
        filename: '',
        folder: 'assets/',
        type: ''
      }
    }
  },
  methods: {
    addMedia: async function() {
      const form = document.getElementById('uploadForm');

      let data = new FormData(form);

      await this.$axios.$post(
        '/common/file',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'auth-token': this.$auth.strategy.token.get()
          }
        }
      );

      this.$router.go(-1);
    },
    fileHandler: () => {
      const inputEl = document.getElementById('inputArea');
      const inputText = document.getElementById('uploadText');
      const button = document.getElementById('submitButton');
      const name = document.getElementById('filename');
      const type = document.getElementById('type');

      const file = inputEl.files[0];

      name.value = file.name;
      type.value = file.type;
      console.log(file.type)

      if(file.type == 'image/png' || file.type == 'image/jpg' || file.type =='video/mp4'){
        inputText.innerHTML = inputEl.value.split("\\").pop();
        button.removeAttribute('hidden');
      }
      else{
        alert('File must be png or jpg image or mp4 video');
        button.setAttribute('hidden', true);
      }
    }
  }
}
</script>
