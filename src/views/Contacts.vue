<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-5 pages">
            <span>Главная страница / </span>
            <span> Контакты</span>
        </div>
        <div class="container mx-auto px-5">
            <div class="contacts__title">Контакты</div>
            <div class="contacts__boxes">
                <div class="box">
                    <img src="../assets/image/Screenshot_1 1.png" class="map" alt="not found">
                    <div class="boxes">
                        <div class="box"></div>
                    </div>
                </div>
                <div class="r__box"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'

export default {
  name: 'Home',
  data: () => ({

  }),
  methods: {

  },
  components: {
    Navbar
  }
}
</script>

<style scoped>
    .pages{
        padding: 2.5rem 1.25rem;
    }
    .pages span{
        color: #023047;
    }
    .contacts__title{
        font-size: 42px;
        color: #005964;
        margin-bottom: 2rem;
    }
    .contacts__boxes{
        display: flex;
        justify-content: space-between;
    }
    .contacts__boxes .box{
        width: 56%;
    }
    .contacts__boxes .box .map{
        width: 100%;
    }
    .contacts__boxes .r__box{
        width: 42%;
    }
</style>