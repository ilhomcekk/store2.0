<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-5">
            <div class="order-menu">
                <ul>
                    <a href="#">Как сделать заказ</a>
                    <a href="#">Способы оплаты</a>
                    <a href="#">Доставка</a>
                    <a href="#">Возврат товара</a>
                    <a href="#">Откройте пункт выдачи</a>
                    <a href="#">Правила продажи</a>
                    <a href="#">Вопросы и ответы</a>
                </ul>
            </div>
        </div>
        <div class="container mx-auto px-5 requisites">
            <div class="requisites__title">Реквизиты</div>
            <div class="text">
                <span>Полное наименование</span>
                <p>Общество с ограниченной ответственностью «LogoName»</p>
            </div>
            <div class="text">
                <span>Генеральный директор</span>
                <p>Бакальчук Татьяна Владимировна</p>
            </div>
            <div class="text">
                <span>Наименование банка</span>
                <p>в Банк ВТБ (ПАО), г. Москва</p>
            </div>
            <div class="text">
                <span>Корреспондентский счет</span>
                <p>30101810700000000187</p>
            </div>
            <div class="text">
                <span>БИК</span>
                <p>044525187</p>
            </div>
            <div class="text">
                <span>Расчетный счет</span>
                <p>40702810500110000939</p>
            </div>
            <div class="text">
                <span>ИНН</span>
                <p>7721546864</p>
            </div>
            <div class="text">
                <span>КПП</span>
                <p>507401001</p>
            </div>
            <div class="text">
                <span>ОГРН</span>
                <p>1067746062449</p>
            </div>
            <div class="text">
                <span>Юридический адреc</span>
                <p>142181, Московская область, г. Подольск, деревня Коледино, Территория Индустриальный парк Коледино, д. 6, стр. 1</p>
            </div>
            <h3>Обращаем внимание, что данные реквизиты не предназначены для оплаты заказов</h3>
            <h3>Оплата заказа производится только через Личный кабинет</h3>
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
    .order-menu{
        padding: 1.5rem 0;
        margin-bottom: 1.5rem;
    }
    .order-menu ul{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .order-menu ul a{
        cursor: pointer;
        color: #023047;
    }
    .order-menu ul a:nth-child(3){
        color: #C211A7;
    }
    .order-menu ul a:hover{
        color: #C211A7;
    }
    .requisites .requisites__title{
        font-size: 42px;
        margin-bottom: 2rem;
        color: #005964;
    }
    .requisites .text{
        display: flex;
        margin: 1.5rem 0;
    }
    .requisites .text span{
        color: #898989;
        font-size: 20px;
        width: 25%;
    }
    .requisites h3{
        color: #023047;
        font-size: 20px;
        margin: 1rem 0;
    }
    .requisites .text p{
        color: #023047;
        margin-left: 5rem;
        font-size: 20px;
        width: 50%;
    }
</style>
