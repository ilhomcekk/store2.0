<template>
    <div class="back">
        <Navbar />
        <div class="seller">
            <div class="header">
                <div class="container mx-auto px-5">
                    <h1>Продажи на LogoName <br> по системе FBS (маркетплейс)</h1>
                    <p>Получайте заказы от клиентов, привозите товар и получайте большую комиссию от продаж</p>
                    <a href="#">Стать продавцом</a>
                </div>
            </div>
            <div class="container mx-auto px-5">
                <div class="aside">
                    <div class="aside__box">
                        <img src="../assets/image/image 5.png" alt="not found">
                        <div class="aside__text">
                            <div class="text__title">Выгодно</div>
                            <p>Комиссия 1–5%, отсутствие оплаты за складские операции, не надо замораживать сток на складе LogoName</p>
                        </div>
                    </div>
                    <div class="aside__box">
                        <img src="../assets/image/image 5 (1).png" alt="not found">
                        <div class="aside__text">
                            <div class="text__title">Быстро</div>
                            <p>Быстрая загрузка товара на сайт LogoName</p>
                        </div>
                    </div>
                    <div class="aside__box">
                        <img src="../assets/image/image 5 (2).png" alt="not found">
                        <div class="aside__text">
                            <div class="text__title">Удобно</div>
                            <p>Получайте заказ от клиента и привозите нам заказанный товар в удобный временной диапазон</p>
                        </div>
                    </div>
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
    .seller .header{
        background: url("../assets/image/image 37.png") no-repeat;
        background-size: cover;
        margin-top: 1rem;
        height: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .seller .header .container{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 60%;
    }
    .seller .header h1{
        font-size: 56px;
        color: #FFF;
    }
    .seller .header p{
        color: #FFF;
        font-size: 20px;
        width: 50%;
        font-weight: 100;
    }
    .seller .header a{
        background: linear-gradient(281.2deg, #15626B 8.26%, #1B7F8C 94.42%);
        border-radius: 8px;
        font-size: 17px;
        color: #FFF;
        width: 255px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .aside{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 5rem 0 3rem 0;
    }
    .aside .aside__box{
        width: 31%;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
    }
    .aside .aside__box img{
        width: 100%;
        object-fit: cover;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .aside .aside__box .aside__text{
        padding: 10px 10px 30px 10px;
    }
    .aside .aside__box .aside__text .text__title{
        font-weight: bold;
        font-size: 22px;
        margin-bottom: 10px;
    }
    .aside .aside__box .aside__text p{
        color: #666666;
    }
</style>