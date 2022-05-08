export const state = () => ({
  userData: {
    name: 'John Doe',
    img: 'image/home.jpg'
  },
  userProfile: {},
  storage: process.env.STRAPI_URL
})

export const getters = {
  getUserData: (state) => state.userData,
}

export const actions = {

}

export const mutations = {
  SET_CURRENT_USERDATA: (state, current) => (state.userData = current),
}
