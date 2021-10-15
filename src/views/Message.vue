<template>
    <div class="back">
        <Navbar />
        <div class="info__menu">
            <div class="container mx-auto px-5">
                <ul>
                    <a href="#"><img src="../assets/image/Vector (5).png" alt="not found">Главная</a>
                    <a href="#"><img src="../assets/image/Vector (6).png" alt="not found"> Избранные</a>
                    <a href="#"><img src="../assets/image/Vector (7).png" alt="not found"> Мои заказы</a>
                    <a href="#"><img src="../assets/image/Group.png" alt="not found"> Мои сообщения</a>
                    <a href="#"><img src="../assets/image/Vector (8).png" alt="not found"> Мои платежи</a>
                    <a href="#"><img src="../assets/image/Vector (9).png" alt="not found"> Мои данные</a>
                </ul>
            </div>
        </div>
        <div class="container mx-auto px-5 pages">
            <span>Главная страница / </span>
            <span> Мои сообщения</span>
        </div>
        <div class="container mx-auto px-5">
            <div class="message__title">Мои сообщения</div>
        </div>
        <div class="container mx-auto px-5">
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
        border-radius: 0px 0px 8px 8px;
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
