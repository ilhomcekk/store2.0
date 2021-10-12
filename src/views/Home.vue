<template>
    <div class="back">
        <Navbar />
        <Slide />
        <Magazin />
        <div class="container mx-auto mt-8 px-5">
            <Title />
            <div class="grid grid-cols-5 gap-3">
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>
            <div class="flex justify-center my-6">
                <button class="show__all">Показать еще</button>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Slide from '../components/Slide.vue'
import Magazin from '../components/Magazin.vue'
import Cart from '../components/Cart.vue'
import Title from '../components/Title.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  data: () => ({

  }),
  methods: {

  },
  components: {
    Navbar,
    Slide,
    Magazin,
    Cart,
    Title,
    Footer
  }
}

</script>
<style scoped>
    .back {
        background-color: #E5E5E5;
    }
    .show__all {
        background: #058490;
        border-radius: 8px;
        font-size: 18px;
        line-height: 100%;
        color: #FFFFFF;
        padding: 10px 20px;
    }
</style>
