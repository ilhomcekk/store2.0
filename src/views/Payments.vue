<template>
    <div class="back">
        <Navbar />
        <second-navbar />
        <div class="container mx-auto px-12 pages">
            <span>Главная страница / </span>
            <span> Мои платежи</span>
        </div>
        <div class="container mx-auto px-12">
            <div class="payment__title">Мои платежи</div>
        </div>
        <div class="container mx-auto px-12 mb-12">
            <table style="width:100%">
                <tr>
                    <th>ID заказа</th>
                    <th>Дата платежа</th>
                    <th>Сумма заказа</th>
                    <th>Способ оплаты</th>
                    <th>Статус платежа</th>
                </tr>
                <Order v-for="order in orders" :key="order.id" :order="order" />
            </table>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import SecondNavbar from '../components/layout/SecondNavbar.vue'
import Order from '../components/Order.vue'

export default {
  name: 'Home',
  data: () => ({
    orders: [
      {
        id: 30,
        date: '23.09.21',
        price: '1000',
        info: 'Не исполнено'
      },
      {
        id: 45,
        date: '23.09.21',
        price: '1000',
        info: 'Не исполнено'
      },
      {
        id: 53,
        date: '23.09.21',
        price: '2000',
        info: 'Не исполнено'
      },
      {
        id: 65,
        date: '23.09.21',
        price: '3000',
        info: 'Исполнен'
      },
      {
        id: 67,
        date: '23.09.21',
        price: '2000',
        info: 'Не исполнено'
      },
      {
        id: 69,
        date: '23.09.21',
        price: '4000',
        info: 'Исполнен'
      },
      {
        id: 90,
        date: '23.09.21',
        price: '15000',
        info: 'Исполнен'
      }
    ]
  }),
  methods: {

  },
  components: {
    Navbar,
    SecondNavbar,
    Footer,
    Order
  }
}
</script>

<style scoped>
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
</style>
