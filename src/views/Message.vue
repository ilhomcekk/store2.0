<template>
    <div class="back">
        <Navbar :black="gray" />
        <second-navbar />
        <div class="container mx-auto px-12 pages">
            <span>Главная страница / </span>
            <span> Мои сообщения</span>
        </div>
        <div class="container mx-auto px-12">
            <div class="message__title">Мои сообщения</div>
        </div>
        <div class="container mx-auto px-12 mb-12">
            <div class="message">
                <div class="title">Чат поддержки</div>
                <p>Рада приветствовать Вас в (Сайт названия) Я Ева Вайлет - виртуальный помощник службы поддержки. Если у Вас возник вопрос - задайте его в этом чате, и я с удовольствием отвечу на него.</p>
                <p>Рада приветствовать Вас в (Сайт названия) Я Ева Вайлет - виртуальный помощник службы поддержки. Если у Вас возник вопрос - задайте его в этом чате, и я с удовольствием отвечу на него.</p>
                <p>Рада приветствовать Вас в (Сайт названия) Я Ева Вайлет - виртуальный помощник службы поддержки. Если у Вас возник вопрос - задайте его в этом чате, и я с удовольствием отвечу на него.</p>
                <p>Рада приветствовать Вас в (Сайт названия) Я Ева Вайлет - виртуальный помощник службы поддержки. Если у Вас возник вопрос - задайте его в этом чате, и я с удовольствием отвечу на него.</p>
                <p>Рада приветствовать Вас в (Сайт названия) Я Ева Вайлет - виртуальный помощник службы поддержки. Если у Вас возник вопрос - задайте его в этом чате, и я с удовольствием отвечу на него.</p>
                <p>Рада приветствовать Вас в (Сайт названия) Я Ева Вайлет - виртуальный помощник службы поддержки. Если у Вас возник вопрос - задайте его в этом чате, и я с удовольствием отвечу на него.</p>
            </div>
            <div class="container mx-auto px-0">
                <div class="send">
                    <form>
                        <img src="../assets/image/Vector (10).png" alt="not found">
                        <input type="text" placeholder="Ваше сообщение"/>
                    </form>
                    <img src="../assets/image/Vector (11).png" alt="not found" class="send">
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import SecondNavbar from '../components/layout/SecondNavbar.vue'

export default {
  name: 'Home',
  data: () => ({

  }),
  methods: {

  },
  components: {
    Navbar,
    Footer,
    SecondNavbar
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
    .info__menu ul a:nth-child(4){
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
    .message__title{
        font-size: 42px;
        color: #005964;
        margin-bottom: 2rem;
    }
    .message{
        background: #F8F8FA;
        border-radius: 8px 8px 0px 0px;
        height: 400px;
        overflow-y: scroll;
    }
    .message::-webkit-scrollbar {
        display: none;
    }
    .message .title{
        color: #C211A7;
        background: #FFECF5;
        font-size: 23px;
        padding: 1.5rem 1.5rem 1.5rem 3rem;
        border-radius: 8px 8px 0px 0px;
    }
    .message p{
        color: #023047;
        background: rgba(212, 212, 212, 0.5);
        border-radius: 12px 12px 12px 0px;
        padding: 1.5rem;
        margin: 1.5rem;
        width: 40%;
        font-size: 18px;
    }
    .send{
        background: #F8F8FA;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
        border-radius: 0px 0px 8px 8px;
        width: 100%;
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .send form{
        display: flex;
        width: 93%;
        padding: 1rem 2rem;
        border-radius: 0px 0px 8px 8px;
        background: rgba(217, 217, 217, 0.5);
    }
    .send form img{
        margin-right: 1rem;
    }
    .send form input{
        background: transparent;
        color: #898989;
        width: 100%;
        outline: none;
        font-size: 18px;
    }
    .send form input::placeholder{
        color: #898989;
    }
    .send img.send{
        border-radius: 50%;
        background: rgba(217, 217, 217, 0.5);
        width: auto;
        height: 60px;
        padding: 0;
        object-fit: none;
        cursor: pointer;
    }
</style>
