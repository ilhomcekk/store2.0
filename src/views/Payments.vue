<template>
    <div class="back">
        <Navbar />
        <div class="info__menu">
            <div class="container mx-auto px-5">
                <ul>
                    <a href="#"><img src="../assets/image/Vector (5).png" alt="not found">Главная</a>
                    <a href="#"><img src="../assets/image/Vector (6).png" alt="not found"> Избранные</a>
                    <a href="#"><img src="../assets/image/Vector (7).png" alt="not found"> Мои заказы</a>
                    <a href="#"><img src="../assets/image/Group (1).png" alt="not found"> Мои сообщения</a>
                    <a href="#"><img src="../assets/image/Vector (12).png" alt="not found"> Мои платежи</a>
                    <a href="#"><img src="../assets/image/Vector (9).png" alt="not found"> Мои данные</a>
                </ul>
            </div>
        </div>
        <div class="container mx-auto px-5 pages">
            <span>Главная страница / </span>
            <span> Мои платежи</span>
        </div>
        <div class="container mx-auto px-5">
            <div class="payment__title">Мои платежи</div>
        </div>
        <div class="container mx-auto px-5">
            <table style="width:100%">
                <tr>
                    <th>ID заказа</th>
                    <th>Дата платежа</th>
                    <th>Сумма заказа</th>
                    <th>Способ оплаты</th>
                    <th>Статус платежа</th>
                </tr>
                <tr>
                    <td>№23</td>
                    <td>23.09.21</td>
                    <td>2000 ₽</td>
                    <td><img src="../assets/image/visa-card-png-4 1.png" alt="not found"></td>
                    <td>Исполнен</td>
                </tr>
                <tr>
                    <td>№45</td>
                    <td>23.09.21</td>
                    <td>2000 ₽</td>
                    <td><img src="../assets/image/visa-card-png-4 1.png" alt="not found"></td>
                    <td>Не исполнено</td>
                </tr>
                <tr>
                    <td>№123</td>
                    <td>23.09.21</td>
                    <td>2000 ₽</td>
                    <td><img src="../assets/image/visa-card-png-4 1.png" alt="not found"></td>
                    <td>Исполнено</td>
                </tr>
                <tr>
                    <td>№55</td>
                    <td>23.09.21</td>
                    <td>2000 ₽</td>
                    <td><img src="../assets/image/visa-card-png-4 1.png" alt="not found"></td>
                    <td>Не исполнено</td>
                </tr>
                <tr>
                    <td>№89</td>
                    <td>23.09.21</td>
                    <td>2000 ₽</td>
                    <td><img src="../assets/image/visa-card-png-4 1.png" alt="not found"></td>
                    <td>Исполнен</td>
                </tr>
            </table>
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
    .info__menu{
        padding: 1.5rem 0;
        margin-bottom: 1.5rem;
    }
    .info__menu ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .info__menu ul a{
        color: #023047;
        display: flex;
        align-items: center;
    }
    .info__menu ul a:nth-child(5){
        color: #C211A7;
    }
    .info__menu ul a img{
        margin-right: 1rem;
    }
    .pages{
        padding: 0 1.25rem 2.5rem 1.25rem;
    }
    .pages span{
        color: #023047;
    }
    .payment__title{
        font-size: 42px;
        color: #005964;
        margin-bottom: 2rem;
    }
    table{
        border-radius: 8px;
    }
    table tr th{
        background: #FFECF5;
        color: #023047;
        font-size: 20px;
        padding: 1.5rem 0;
        font-weight: 500;
    }
    table tr th:first-child{
        border-radius: 8px 0px 0px 0px;
    }
    table tr th:last-child{
        border-radius: 0px 8px 0px 0px;
    }
    table tr td{
        text-align: center;
        color: #005964;
        font-size: 19px;
        font-weight: normal;
        border-bottom: 1px solid #D9D9D9;
        background: #F8F8FA;
        padding: 1.5rem 0;
    }
    table tr:last-child td:first-child{
        border-radius: 0 0 0 8px;
    }
    table tr:last-child td:last-child{
        border-radius: 0 0 8px 0;
    }
    table tr:last-child td{
        border-bottom: none;
    }
    table tr td img{
        text-align: center;
        margin: 0 auto;
    }
</style>
