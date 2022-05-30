<template>
  <div>
    <Topbar title="Edit Template" />
    <div class="main-container dark:bg-red">
      <div class="my-2">
        <h4 class="">Basic Template</h4>
      </div>
      <div class="flex flex-row">
        <img
          v-for="(theme, index) in themes"
          :key="'theme' + index"
          :src="theme.url"
          class="h-48 mr-4 border border-solid border-slate-300 rounded-md overflow-hidden"
          @click="changeTheme(theme.id)"
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
  async asyncData({ $axios, $auth }) {
    let themes = await $axios.$get(
      '/manifest/theme',
      {
        headers: {
          'auth-token': $auth.strategy.token.get()
        }
      }
    ).then((res) => res.themes);
    return { themes }
  },
  data() {
    return {
      assetUrl: process.env.assetsUrl,
    }
  },
  computed: {
    ...mapGetters(['getDark'])
  },
  async fetch() {
    let theme = await this.$axios.$get(
      '/theme',
      {
        headers: {
          'auth-token': this.$auth.strategy.token.get()
        }
      }
    ).then(res => res.theme.id);

    if (localStorage.theme === undefined) {
      if (
        theme == 2
        // window.matchMedia &&
        // window.matchMedia('(prefers-color-scheme: dark)')
        //   .matches
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
  fetchDelay: 300,
  methods: {
    ...mapMutations(['SET_DARK']),
    changeTheme: async function(id) {
      this.SET_DARK(!this.getDark);
      localStorage.theme = this.getDark ? 'dark' : 'light';

      await this.$axios.$put(
        '/manifest/theme',
        {
          id: id
        },
        {
          headers: {
            'auth-token': this.$auth.strategy.token.get()
          }
        }
      )
    }
  }
}
</script>
