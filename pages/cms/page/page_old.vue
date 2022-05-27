

<script>
export default {
  // middleware: 'auth',
  layout: 'cms',
  data() {
    return {
      pageId: this.$route.params.page,
      page:{
        id: 'home',
        title: 'Landing Page',
        url: '/'
      },
      da: (<LandingLight>
          <Navigation />
          <Banner />
          <Intro />
          <Product />
          <Production />
          <Activity />
          <Consult />
          <Footer />
        </LandingLight>
      )
    }
  },
  render(h){
    return (<div>
        <Topbar title={ this.page.title } backButton={ true } />
        <div class="mx-8 flex flex-row justify-between align-stretch">
          <input type="text" value={ this.page.title } class="w-4/5 px-6 py-2 text-2xl border border-slate-300 rounded-xl" />
          <div onclick="savePage()" class="py-4 px-10 bg-accentOrange text-xl text-white rounded-xl">
            Save
          </div>
        </div>
        <div class="h-4/6 mt-8 grid grid-cols-7 mx-8">
          <div class="h-full col-span-2 p-4 mr-6 bg-white border border-slate-300 rounded-xl overflow-scroll">
            <div class="text-xl">Components</div>
          </div>
        </div>
    </div>)
  },
  methods: {
    savePage: function() {

    }
  },
}
</script>
