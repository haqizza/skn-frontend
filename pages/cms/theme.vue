<template>
  <div>
    <Topbar title="Edit Template" />
    <div class="main-container dark:bg-red">
      <div class="my-2">
        <h4 class="">Basic Template</h4>
      </div>
      <div class="flex flex-row">
        <img
          src="~/assets/img/black-theme.png"
          class="h-48 mr-4 border border-solid border-slate-300 rounded-md overflow-hidden"
          @click="toggleDarkMode()"
        >
        <img
          src="~/assets/img/white-theme.png"
          class="h-48 mr-4 border border-solid border-slate-300 rounded-md overflow-hidden"
          @click="toggleDarkMode()"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  middleware: 'auth',
  layout: 'cms',
  computed: {
    ...mapGetters(['getDark'])
  },
  mounted() {
    if (localStorage.theme === undefined) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)')
          .matches
      ) {
        localStorage.theme = 'dark';
        this.SET_DARK(true);
      } else {
        localStorage.theme = 'light';
      }
    } else {
      this.SET_DARK(localStorage.theme === 'dark');
    }
  },
  methods: {
    ...mapMutations(['SET_DARK']),
    toggleDarkMode: function() {
        this.SET_DARK(!this.getDark);
        localStorage.theme = this.getDark ? 'dark' : 'light';
      }
  }
}
</script>
