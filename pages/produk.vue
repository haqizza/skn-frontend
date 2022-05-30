<template>
  <div>
    <ProductLight>
      <component
        v-for="(component, index) in components"
        :key="'component'+index"
        :is="component.name"
        v-bind="component.props"
      />
    </ProductLight>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Product Pages',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Halaman yang menampilkan produk'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'pallet, palletKayu, skn, bekasi, sinar, karya, nusa, vacuum, pressure, awet, tahan, lama '
      }
    ],
  },
  async asyncData({ $axios }) {
    var components = []
    await $axios.$get(
      '/pages/product/components',
    ).then((res) =>{
      for(var i = 0; i < res.components.length; i++){
        components.push({
          name: res.components[i].component,
          props: {
            compData: res.components[i].content
          }
        })
      }
      }
    );
    return { components }
  },
  name: 'ProductPage',
}
</script>
