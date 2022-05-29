export const state = () => ({
  dark: false,
  siteIdentity: {
    title: 'CV. Sinar Karya Nusa'
  },
})

export const getters = {
  getDark: (state) => state.dark,
  isLoggedIn: (state) => state.loggedIn,
  getUserData: (state) => state.userData,
  getSiteIdentity: (state) => state.siteIdentity
}

export const actions = {

}

export const mutations = {
  SET_DARK: (state, current) => (state.dark = current),
  SET_LOGGEDIN: (state, current) => (state.loggedIn = current),
  SET_CURRENT_USERDATA: (state, current) => (state.userData = current),
  SET_CURRENT_SITEIDENTITY: (state, current) => (state.siteIdentity = current),
}
