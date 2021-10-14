<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-5">
            <div class="delivery-menu">
                <ul>
                    <li>Как сделать заказ</li>
                    <li>Способы оплаты</li>
                    <li>Доставка</li>
                    <li>Возврат товара</li>
                    <li>Откройте пункт выдачи</li>
                    <li>Правила продажи</li>
                    <li>Вопросы и ответы</li>
                </ul>
            </div>
        </div>
        <div class="container mx-auto px-12">
            <div class="delivery">
                <div class="delivery__title">Доставка</div>
            </div>
        </div>
        <div class="container mx-auto px-12">
            <div class="delivery-boxes">
                <div class="delivery__box">
                    <div class="box_title">Быстро доставим любой Ваш заказ по всей России</div>
                    <div class="d__boxes">
                        <div class="d__box">
                            <img src="../assets/image/Vector (1).png" alt="not found">
                            <p>Бесплатная доставка</p>
                        </div>
                        <div class="d__box">
                            <img src="../assets/image/Vector (2).png" alt="not found">
                            <p>Доставка круглый год в России</p>
                        </div>
                        <div class="d__box">
                            <img src="../assets/image/Vector (3).png" alt="not found">
                            <p>Возврат товара при примерке</p>
                        </div>
                    </div>
                </div>
                <div class="delivery__box">
                    <img src="../assets/image/image 39.png" alt="not found">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Slide from '../components/Slide.vue'
import Magazin from '../components/Magazin.vue'
import Cart from '../components/Cart.vue'
import Title from '../components/Title.vue'

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
    Title
  }
}
</script>

<style scoped>
    .delivery-menu{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 0 3rem 0;
    }
    .delivery-menu ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .delivery-menu ul li{
        list-style-type: none;
        color: #023047;
        cursor: pointer;
    }
    .delivery-menu ul li:hover{
        color: #C211A7;
    }
    .delivery-menu ul li:nth-child(3){
        color: #C211A7;
    }
    .delivery .delivery__title{
        font-size: 42px;
        color: #005964;
        margin-bottom: 2rem;
    }
    .delivery-boxes{
        display: flex;
        justify-content: space-between;
        border-radius: 8px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        padding: 3rem;
    }
    .delivery-boxes .delivery__box:first-child{
        width: 55%;
    }
    .delivery-boxes .delivery__box:first-child .box_title{
        font-size: 42px;
        color: #023047;
        margin-bottom: 2rem;
    }
    .delivery-boxes .delivery__box:nth-child(2){
        width: 45%;
        display: flex;
        align-items: end;
    }
    .delivery-boxes .delivery__box .d__boxes{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .delivery-boxes .delivery__box .d__boxes .d__box{
        width: 50%;
        display: flex;
        align-items: center;
        padding: 1.8rem 0;
    }
    .delivery-boxes .delivery__box .d__boxes .d__box p{
        color: #898989;
        font-size: 20px;
        margin-left: 1rem;
    }
</style>