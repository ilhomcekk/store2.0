<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-5 pages">
            <span>Главная страница / </span>
            <span> FAQ</span>
        </div>
        <div class="container mx-auto px-5">
            <div class="questions__title">Часто задаемевый вопросы</div>
            <div class="questions__box">
                <div class="box">
                    <div class="questions__text">
                        <div class="text2">
                            <i class="fa fa-play"></i>
                            <p>Название любого вопроса из этой сферы деятельности?</p>
                        </div>
                    </div>
                    <div class="questions__text">
                        <div class="text2">
                            <i class="fa fa-play"></i>
                            <p>Название любого вопроса из этой сферы деятельности?</p>
                        </div>
                    </div>
                    <div class="questions__text">
                        <div class="text2">
                            <i class="fa fa-play"></i>
                            <p>Название любого вопроса из этой сферы деятельности?</p>
                        </div>
                        <div class="text__box">
                            <p>Лента LFD400S-G1-827-06 4052899953611 классом исполнения IP67 по проекту установлена на поверхности стеклянного фасада, под козырьком-отливом, и подключена к блокам OSRAM Optotronic OTi DALI 75/220-240/24, по 1-му на каждый комплект ленты(6м). Лента укреплена с помощью кабельных стяжек. Лента, установлена по периметру фасада на уровне 6-ти и 18м. Всего уложено 84м.</p>
                            <p>После монтажных работ конструкция отработала в режиме технического прогона с сентября по 3-ю декаду ноября. В процессе монтажа выявлено, что некоторые отрезки 6-ти метровой ленты имеют мерцание. Лента LFD400S-G1-827-06 4052899953611 классом исполнения IP67 по проекту установлена на поверхности стеклянного фасада, под козырьком-отливом, и подключена к блокам OSRAM Optotronic OTi DALI 75/220-240/24, по 1-му на каждый комплект ленты(6м).</p>
                        </div>
                    </div>
                    <div class="questions__text">
                        <div class="text2">
                            <i class="fa fa-play"></i>
                            <p>Название любого вопроса из этой сферы деятельности?</p>
                        </div>
                    </div>
                    <div class="questions__text">
                        <div class="text2">
                            <i class="fa fa-play"></i>
                            <p>Название любого вопроса из этой сферы деятельности?</p>
                        </div>
                    </div>
                    <div class="questions__text">
                        <div class="text2">
                            <i class="fa fa-play"></i>
                            <p>Название любого вопроса из этой сферы деятельности?</p>
                        </div>
                    </div>
                </div>
                <div class="c__box">
                    <div class="box__title">У вас есть вопросы</div>
                    <input type="text" placeholder="Ваше имя" />
                    <input type="email" placeholder="Ваш  e-mail" />
                    <textarea placeholder="Ваш отзыв"></textarea>
                    <button type="submit">Отправить вопрос</button>
                </div>
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
    .questions__title{
        font-size: 42px;
        color: #005964;
        margin-bottom: 2rem;
    }
    .questions__box{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .questions__box .box{
        width: 65%;
    }
    .questions__box .box .questions__text{
        display: flex;
        flex-direction: column;
        margin: 1.5rem 0;
        cursor: pointer;
        position: relative;
    }
    .questions__box .box .questions__text .text2{
        display: flex;
        align-items: center;
        padding-left: 1rem;
    }
    .questions__box .box .questions__text .text2 i{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 1.5rem;
        color: #FFF;
        background: linear-gradient(281.2deg, #15626B 8.26%, #1B7F8C 94.42%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        transition: 0.5s linear;
    }
    .questions__box .box .questions__text .text2 p{
        font-weight: bold;
        font-size: 22px;
    }
    .questions__box .box .questions__text .text__box{
        background: #F1EFED;
        border-radius: 10px;
        padding: 1.5rem 1.5rem 0 1.5rem;
        margin-top: 1.5rem;
        width: 80%;
    }
    .questions__box .box .questions__text .text__box p{
        color: #666666;
        margin-bottom: 1.5rem;
        font-size: 17px;
    }
    .c__box{
        background: #FFECF5;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 450px;
        padding: 1rem 2rem;
        width: 30%;
        margin-left: 4rem;
    }
    .c__box .box__title{
        color: #023047;
        font-size: 26px;
        font-weight: bold;
    }
    .c__box input{
        padding: 10px;
        border-radius: 8px;
        outline: none;
    }
    .c__box textarea{
        padding: 10px 10px 3rem 10px;
        outline: none;
        border-radius: 8px;
    }
    .c__box button{
        background: linear-gradient(90deg, #C311A7 3.86%, #A91BA5 100.16%);
        border-radius: 8px;
        color: #FFF;
        padding: 15px 30px;
        margin: 0 auto;
    }
</style>
