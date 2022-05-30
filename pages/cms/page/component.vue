<template>
  <div class="overflow-scroll">
      <Topbar :title="component.component" backButton=true />

      <ImagesModal
        title="Choose Image"
        :data="$data"
        v-show="isModalVisible"
        @close="closeModal()"
        @change-image="updateImage"
      >

      </ImagesModal>

      <div class="main-container flex flex-col my-6">
        <div class="flex flex-row justify-end">
          <div @click="updateComponent()" class="px-4 py-2 bg-accentOrange text-white rounded-xl">Save</div>
        </div>
        <input type="text" v-model="component.content.title" class="px-3 py-2 my-2 border border-slate-300 rounded-xl">
        <textarea v-if="component.content.text != undefined"  v-model="component.content.text" class="px-4 py-2 my-2 border border-slate-300 rounded-xl"></textarea>
        <!-- Image: array/not -->
        <div v-if="component.content.image != null" class="w-full">
          <h3  class="my-2">Image</h3>
          <div class="flex flex-row flex-wrap justify-evenly">
            <div
              v-for="(img, index) in component.content.image"
              :key="'image' + index"
              class="p-2 flex flex-col border border-slate-300 rounded-md"
            >
              <img :src="imageUrl + img.url" @click="showModal(index, '')" class="w-64">
              <input type="text" v-model="img.alt" class="px-3 py-1 border border-slate-300 rounded-xl">
            </div>
          </div>
        </div>
        <!-- card -->
        <div v-if="component.content.card != null" class="w-full">
          <h3>Card</h3>
          <div
            v-for="(card, index) in component.content.card"
            :key="'image' + index"
            class="p-2 flex flex-row border border-slate-300 rounded-md"
          >
            <h4>{{ 'Card-' + index }}</h4>
            <div class="w-fit my-2 mr-4 flex flex-col">
              <img :src="imageUrl + card.image.url" @click="showModal(index, 'card')" class="w-64 mb-2">
              <input type="text" v-model="card.image.alt" class="px-3 py-1 border border-slate-300 rounded-xl">
            </div>
            <div class="w-full flex flex-col justify-stretch">
              <input type="text" v-model="card.title" class="px-3 py-1 mb-2 border border-slate-300 rounded-xl">
              <textarea v-model="card.text" class="px-4 py-2 my-2 border border-slate-300 rounded-xl"></textarea>
            </div>
          </div>
        </div>
        <!-- Button -->
        <div v-if="component.content.button != null" class="w-full flex flex-col">
          <h3>Button</h3>
          <div
            v-for="(button, index) in component.content.button"
            :key="'button' + index"
            class="p-2 flex flex-col"
          >
            <h4>{{ 'Button-' + index }}</h4>
            <input type="text" v-model="button.text" class="px-4 py-2 my-2 border border-slate-300 rounded-xl">
            <input type="text" v-model="button.url" class="px-4 py-2 my-2 border border-slate-300 rounded-xl">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'cms',
  name: 'PageComponentEdit',
  async asyncData({ $axios, route, $auth }) {
    let component = await $axios.$get(
      '/components/' + route.query.id,
      {
        headers: {
          'auth-token': $auth.strategy.token.get()
        }
      }
    ).then((res) => res.component);
    return { component }
  },
  data() {
    return {
      imageUrl: process.env.assetsUrl,
      isModalVisible: false,
      currentImage: 0,
      card: false,
    }
  },
  methods: {
    updateComponent: async function(){
      const comp =  this.component;
      delete comp.pageId;

      await this.$axios.$put(
        '/components/' + this.$route.query.id,
        comp,
        {
          headers: {
            'auth-token': this.$auth.strategy.token.get()
          }
        }
      );
      this.$router.go(-1);
    },
    showModal: function(index, comp) {
      console.log(this.component)
      this.setCurrentImage(index, comp);
      this.isModalVisible = true;
    },
    closeModal: function() {
      this.isModalVisible = false;
    },
    setCurrentImage: function(index, comp) {
      this.currentImage = index;
      this.card = comp == 'card' ? true : false;
    },
    updateImage: function(img) {
      if(this.card == true){
        if(this.component.content.card != null) this.component.content.card[parseInt(this.currentImage)].image.url = img
      }
      else{
        if(this.component.content.image != null) this.component.content.image[parseInt(this.currentImage)].url = img
      }

      this.closeModal();
    }
  }
}
</script>
