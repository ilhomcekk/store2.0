<template>
    <div class="back">
        <Navbar />
        <Slide />
        <Magazin />
        <div class="container mx-auto mt-8 px-5">
            <Title />
            <div class="grid grid-cols-5 gap-3" >
                <div v-for="cart in carts.slice(0, 5)" :key="cart.id">
                    <Cart :cart="cart" />
                </div>
            </div>
            <div class="flex justify-center my-6">
                <button class="show__all">Показать еще</button>
            </div>
        </div>
        <div class="container mx-auto px-5 mt-12">
            <div class="grid grid-cols-4 gap-4">
                <div class="col-span-2">
                    <img class="w-full h-64" src="../assets/image/image 25.png" alt="">
                </div>
                <div class="col-span-1">
                    <img class="w-full h-64" src="../assets/image/image 26.png" alt="">
                </div>
                <div class="col-span-1">
                    <img class="w-full h-64" src="../assets/image/image 27.png" alt="">
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-12 px-5">
            <Title />
            <div class="grid grid-cols-5 gap-3">
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>
        </div>
        <div class="container mx-auto mt-8 px-5">
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
  computed: {
    carts () {
      return this.$store.getters.CARTS
    }
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
