<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-5 pages">
            <span>Главная страница / </span>
            <span>Новости подробно</span>
        </div>
        <div class="container mx-auto px-5">
            <div class="mnews__title">Российская компания Wildberries планирует <br> выход на рынок Узбекистана</div>
        </div>
        <div class="container mx-auto px-5">
            <div class="mnews__boxes">
                <div class="box">
                    <div class="box__image">
                        <img src="../assets/image/image 3.png" alt="not found">
                        <span>08.02.2021</span>
                    </div>
                    <p>Стороны обсудили возможное сотрудничество в сфере экспортных интернет-продаж текстильной и швейно-трикотажной промышленности с производителями Узбекистана.
                        ТАШКЕНТ, 5 мар - Sputnik. Российская компания LogoName рассматривает рынок Узбекистана как очень перспективный, сообщает Ассоциация "Узтекстиль".</p>
                    <p>На днях в Ассоциации прошла встреча руководства с представителями российского онлайн-ритейлера Wildberries, где узбекская компания была ознакомлена с
                        действующей бизнес-моделью, со спецификой интернет-торговлиВ частности, стороны обсудили возможное сотрудничество в сфере экспортных интернет-продаж текстильной и швейно-трикотажной промышленности с производителями Узбекистана.</p>
                    <p>LogoName выразили повышенную заинтересованность входа на рынок электронной коммерции Узбекистана, а также проработали вопрос входа на рынок с
                        инвестированием своих средств в экономику страны", - говорится в сообщении.</p>
                    <div class="sidebar">
                        <img src="../assets/image/image 3.png" alt="not found" class="sidebar__img">
                        <div class="sidebar__box">
                            <img src="../assets/image/Rectangle 623.png" alt="not found">
                            <img src="../assets/image/Rectangle 624.png" alt="not found">
                        </div>
                    </div>
                    <div class="shows">
                        <a href="#">Telegram</a>
                        <span>|</span>
                        <a href="#">Facebook</a>
                        <span><i class="fa fa-eye"></i> 1023</span>
                    </div>
                </div>
                <div class="box">
                    <div class="box__title">Последние новости</div>
                    <div class="late__box">
                        <img src="../assets/image/Rectangle 621 (1).png" alt="not found">
                        <div class="late__text">
                            <div class="late__title">Бренды отказываются от "черной пятницы" из-за изменения климата</div>
                            <p>По мнению активистов, день всемирных распродаж заставляет людей покупать ненужные вещи и тем самым вредить природе.....</p>
                            <div class="n__date">
                                <a href="#">Подробно</a>
                                <span>09.04.2021</span>
                            </div>
                        </div>
                    </div>
                    <div class="late__box">
                        <img src="../assets/image/Rectangle 621 (2).png" alt="not found">
                        <div class="late__text">
                            <div class="late__title">AliExpress запустил в России интернет-магазин "Лоукостер"</div>
                            <p>Новый интернет-магазин будет рассчитан на аудиторию до 25 лет, а также на тех, кто хочет купить известные бренды с доставкой из России....</p>
                            <div class="n__date">
                                <a href="#">Подробно</a>
                                <span>15.04.2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
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
    .pages{
        padding: 2.5rem 1.25rem;
    }
    .pages span{
        color: #023047;
    }
    .mnews__title{
        font-size: 42px;
        color: #005964;
        margin-bottom: 2rem;
    }
    .mnews__boxes{
        display: flex;
        justify-content: space-between;
        padding-bottom: 3rem;
    }
    .mnews__boxes .box:first-child{
        width: 64%;
    }
    .mnews__boxes .box:first-child .box__image{
        position: relative;
        margin-bottom: 2.5rem;
    }
    .mnews__boxes .box:first-child .box__image img{
        width: 100%;
    }
    .mnews__boxes .box:first-child .box__image span{
        position: absolute;
        top: 35px;
        left: 35px;
        background: #374C91;
        border-radius: 2px;
        color: #FFF;
        padding: 10px;
    }
    .mnews__boxes .box:first-child p{
        margin: 22px 0;
        color: #666666;
    }
    .mnews__boxes .box:nth-child(2){
        width: 34%;
    }
    .mnews__boxes .box:first-child .sidebar{
        display: flex;
        justify-content: space-between;
        margin-top: 2.5rem;
        margin-bottom: 1rem;
    }
    .mnews__boxes .box:first-child .sidebar .sidebar__img{
        width: 58%;
        height: 440px;
        object-fit: cover;
    }
    .mnews__boxes .box:first-child .sidebar .sidebar__box{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .mnews__boxes .box:first-child .sidebar .sidebar__box img{
        margin-bottom: 20px;
    }
    .mnews__boxes .box:first-child .shows span{
        margin: 0 5px;
        color: #374C91;
    }
    .mnews__boxes .box:first-child .shows a{
        color: #374C91;
        cursor: pointer;
    }
    .mnews__boxes .box:first-child .shows span:last-child{
        margin-left: 5rem;
        color: #374C91;
    }
    .mnews__boxes .box:nth-child(2) .box__title{
        font-size: 32px;
        color: #005964;
        margin: 0 0 1rem 0;
        font-weight: bold;
    }
    .mnews__boxes .box:nth-child(2) .late__box{
        padding-bottom: 15px;
        margin: 1rem 0;
    }
    .mnews__boxes .box:nth-child(2) .late__box img{
        width: 100%;
    }
    .mnews__boxes .box:nth-child(2) .late__box .late__text{
        padding-right: 15px;
    }
    .mnews__boxes .box:nth-child(2) .late__box .late__title{
        font-weight: bold;
        font-size: 18px;
        width: 90%;
        margin-top: 1rem;
    }
    .mnews__boxes .box:nth-child(2) .late__box p{
        color: #666666;
        margin: 1.5rem 0 1rem 0;
    }
    .mnews__boxes .box:nth-child(2) .late__box .n__date{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .mnews__boxes .box:nth-child(2) .late__box .n__date a{
        background: linear-gradient(281.2deg, #15626B 8.26%, #1B7F8C 94.42%);;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px 15px;
        color: #FCF6F6;
    }
    .mnews__boxes .box:nth-child(2) .late__box .n__date span{
        color: #005964;
    }
</style>