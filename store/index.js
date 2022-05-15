export const state = () => ({
  dark: false,
  siteIdentity: {
    title: 'CV. Sinar Karya Nusa'
  },
  userData: {
    name: 'John Doe',
    email: 'john@doe.com',
    phone: '825301623',
    address: '19 Heyhurts Line',
    city: 'Mcallen',
    state: 'NY',
    country: 'US',
    role: 'administrator',
    img: 'home.jpg'
  },
  userProfile: {},
  storage: process.env.STRAPI_URL
})

export const getters = {
  getDark: (state) => state.dark,
  getUserData: (state) => state.userData,
  getSiteIdentity: (state) => state.siteIdentity
}

export const actions = {

}

export const mutations = {
  SET_DARK: (state, current) => (state.dark = current),
  SET_CURRENT_USERDATA: (state, current) => (state.userData = current),
  SET_CURRENT_SITEIDENTITY: (state, current) => (state.siteIdentity = current),
}
