<template>
  <div>
    <Navigation />
    <Banner2 image="image7.jpeg" />
    <Consult />
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: process.env.assetsUrl,
    }
  },
}
</script>
