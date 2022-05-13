export const state = () => ({
  userData: {
    name: 'John Doe',
    email: 'john@doe.com',
    phone: '825301623',
    address: '19 Heyhurts Line',
    city: 'Mcallen',
    state: 'NY',
    country: 'US',
    img: 'home.jpg'
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
