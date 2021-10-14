<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-5 pages">
            <span>Главная страница / </span>
            <span>Новости</span>
        </div>
        <div class="container mx-auto px-5">
            <div class="news__title">Новости</div>
        </div>
        <div class="container mx-auto px-5">
            <div class="news__boxes">
                <div class="box">
                    <img src="../assets/image/image 5 (4).png" alt="not found">
                    <div class="box__text">
                        <div class="box__title">В AliExpress представили портрет типичного покупателя в регионах</div>
                        <p>Петербуржцы закупаются пляжными сабо, омички — теплыми тапочками, а в Нижнем Новгороде заказывают жилеты с подогревом.</p>
                        <div class="n__date">
                            <a href="#">Подробно</a>
                            <span>24.04.2021</span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <img src="../assets/image/image 5 (4).png" alt="not found">
                    <div class="box__text">
                        <div class="box__title">В AliExpress представили портрет типичного покупателя в регионах</div>
                        <p>Петербуржцы закупаются пляжными сабо, омички — теплыми тапочками, а в Нижнем Новгороде заказывают жилеты с подогревом.</p>
                        <div class="n__date">
                            <a href="#">Подробно</a>
                            <span>24.04.2021</span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <img src="../assets/image/image 5 (4).png" alt="not found">
                    <div class="box__text">
                        <div class="box__title">В AliExpress представили портрет типичного покупателя в регионах</div>
                        <p>Петербуржцы закупаются пляжными сабо, омички — теплыми тапочками, а в Нижнем Новгороде заказывают жилеты с подогревом.</p>
                        <div class="n__date">
                            <a href="#">Подробно</a>
                            <span>24.04.2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-5">
            <div class="n-video-title">Видео новости</div>
        </div>
        <div class="container mx-auto px-5">
            <div class="n-video">
                <div class="video__box">
                    <div class="video__box-img">
                         <img src="../assets/image/image 3.png" alt="not found">
                         <i class="fa fa-play"></i>
                    </div>
                    <div class="box__title">Российская компания NameLogo планирует выход на рынок Узбекистана</div>
                    <p>Стороны обсудили возможное сотрудничество в сфере экспортных интернет-продаж текстильной и швейно-трикотажной промышленности с производителями Узбекистана.</p>
                    <a href="#">Подробно</a>
                </div>
                <div class="video__boxes">
                    <div class="box">
                        <div class="box__image">
                            <img src="../assets/image/Rectangle 621.png" alt="not found">
                            <i class="fa fa-play"></i>
                        </div>
                        <div class="box__text">
                            <div class="text__title">В топ-10 российских онлайн-магазинов впервые вошла интернет-аптека</div>
                            <p>OВ десятку крупнейших интернет-магазинов России по версии аналитического агентства Data Insight впервые вошла онлайн-аптека – apteka.ru. По итогам 2019 г. она поднялась с 13-го на 7-е место.</p>
                            <div class="n__date">
                                <a href="#">Подробно</a>
                                <span>30.04.2021</span>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <img src="../assets/image/image 9.png" alt="not found" class="box__img">
                        <div class="box__text">
                            <div class="text__title">Глава китайского Alibaba обсудил с Трампом создание рабочих мест в США</div>
                            <p>Глава китайской компании Alibaba обсудил с Дональдом Трампом создание миллиона новых рабочих мест, ранее китайский интернет-рынок TaoBao был внесен в черный список за поддельные товары на своем сайте</p>
                            <div class="n__date">
                                <a href="#">Подробно</a>
                                <span>12.04.2021</span>
                            </div>
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
    .pages{
        padding: 2.5rem 1.25rem !important;
    }
    .pages span{
        color: #023047 !important;
    }
    .news__title{
        font-size: 42px;
        color: #005964;
        margin-bottom: 2rem;
    }
    .news__boxes{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-bottom: 3rem;
    }
    .news__boxes .box{
        width: 31%;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    }
    .news__boxes .box img{
        width: 100%;
        object-fit: cover;
    }
    .news__boxes .box .box__text{
        padding: 15px 10px 10px 10px;
    }
    .news__boxes .box .box__text .box__title{
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 1rem;
    }
    .news__boxes .box .box__text p{
        color: #666666;
        margin-bottom: 20px;
    }
    .news__boxes .box .box__text .n__date{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .news__boxes .box .box__text .n__date a{
        background: linear-gradient(281.2deg, #15626B 8.26%, #1B7F8C 94.42%);;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px 15px;
        color: #FCF6F6;
    }
    .news__boxes .box .box__text .n__date span{
        color: #005964;
    }
    .n-video-title{
        font-size: 42px;
        color: #005964;
        margin-bottom: 2rem;
    }
    .n-video{
        display: flex;
        justify-content: space-between;
        padding-bottom: 3rem;
    }
    .n-video .video__box{
        width: 45%;
        padding-bottom: 20px;
    }
    .n-video .video__boxes{
        width: 53%;
    }
    .n-video .video__box .video__box-img{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .n-video .video__box .video__box-img i{
        position: absolute;
        color: #FFF;
        padding: 30px;
        border-radius: 50%;
        border: 2px solid #FFF;
        font-size: 28px;
        cursor: pointer;
    }
    .n-video .video__box .video__box-img img{
        width: 100%;
        object-fit: cover;
    }
    .n-video .video__box .box__title{
        font-weight: bold;
        font-size: 18px;
        margin: 10px 0 20px 0;
    }
    .n-video .video__box p{
        color: #666666;
        padding-bottom: 20px;
        width: 95%;
    }
    .n-video .video__box a{
        background: linear-gradient(281.2deg, #15626B 8.26%, #1B7F8C 94.42%);;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px 15px;
        color: #FCF6F6;
    }
    .n-video .video__boxes .box{
        display: flex;
        padding-bottom: 1.8rem;
    }
    .n-video .video__boxes .box .box__image{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.8rem;
        width: 1000px;
    }
    .n-video .video__boxes .box .box__image img{
        margin-right: 0 !important;
    }
    .n-video .video__boxes .box img{
        margin-right: 1.8rem;
    }
    .n-video .video__boxes .box .box__image i{
        position: absolute;
        color: #FFF;
        padding: 20px;
        border-radius: 50%;
        border: 2px solid #FFF;
        font-size: 20px;
        cursor: pointer;
    }
    .n-video .video__boxes .box .box__text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .n-video .video__boxes .box .box__text .text__title{
        font-weight: bold;
        font-size: 18px;
    }
    .n-video .video__boxes .box .box__text p{
        color: #666666;
    }
    .n-video .video__boxes .box .box__text .n__date{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .n-video .video__boxes .box .box__text .n__date a{
        background: linear-gradient(281.2deg, #15626B 8.26%, #1B7F8C 94.42%);;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px 15px;
        color: #FCF6F6;
    }
    .n-video .video__boxes .box .box__text .n__date span{
        color: #005964;
    }
</style>