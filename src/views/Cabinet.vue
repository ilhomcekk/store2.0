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
                    <a href="#"><img src="../assets/image/Vector (8).png" alt="not found"> Мои платежи</a>
                    <a href="#"><img src="../assets/image/Vector (13).png" alt="not found"> Мои данные</a>
                </ul>
            </div>
        </div>
        <div class="container mx-auto px-5">
            <div class="user__cabinet">
                <div class="user">
                    <div class="user__img">
                        <img src="../assets/image/boy-1031527_1920 1.png" alt="not found">
                        <i class="fa fa-plus"></i>
                    </div>
                    <div class="user__name">Javohir Akramjonov</div>
                    <img src="../assets/image/Vector (14).png" alt="not found">
                </div>
                <div class="info__box">
                    <div class="info__user">
                    <div class="title">Э-маил</div>
                    <div class="change">
                        <p>mironshohnasimov@gmail.com</p>
                        <img src="../assets/image/Vector (14).png" alt="not found">
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Телефон</div>
                    <div class="change">
                        <p>+99899 739 3538</p>
                        <img src="../assets/image/Vector (14).png" alt="not found">
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Дата рождения</div>
                    <div class="change">
                        <p>11.12.2000</p>
                        <img src="../assets/image/Vector (14).png" alt="not found">
                    </div>
                </div>
                <div class="info__user">
                    <div class="title">Пол</div>
                    <div class="change inputs">
                        <input type="radio" name="name" />
                        <span>Муж.</span>
                        <input type="radio" name="name" />
                        <span>Жен.</span>
                    </div>
                </div>
                </div>
            </div>
            <div class="user__boxes2">
                <div class="box">
                    <div class="title">Банковские карты</div>
                    <div class="add__cart">
                        <i class="fa fa-plus"></i>
                        <p>Добавить карту</p>
                    </div>
                </div>
                <div class="box">
                    <div class="title">Адреса клиента</div>
                    <div class="gps__text">
                        <img src="../assets/image/Vector (15).png" alt="not found">
                        Москва
                    </div>
                </div>
                <div class="box">
                    <div class="title">Удаление личново кабинета</div>
                    <p>Как только Ваш личный кабинет будет удален</p>
                    <span>Удаление личново кабинета</span>
                </div>
                <div class="box">
                    <div class="title">Восстановления пароля</div>
                    <span>Данные для восстановления пароля и sms</span>
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
    .info__menu ul a:last-child{
        color: #C211A7;
    }
    .info__menu ul a img{
        margin-right: 1rem;
    }
    .user__cabinet{
        width: 100%;
        height: 260px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .user__cabinet .user{
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
    }
    .user__cabinet .user .user__img img{
        width: 100%;
        border-radius: 50%;
        text-align: center;
        margin: 0 auto;
    }
    .user__cabinet .user .user__img{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 50%;
        width: 100px;
        margin-right: 1rem;
    }
    .user__cabinet .user .user__img i{
        position: absolute;
        color: #FFF;
        font-size: 24px;
        cursor: pointer;
    }
    .user__cabinet .user .user__name{
        font-size: 23px;
        color: #023047;
        font-weight: bold;
        margin-right: 1rem;
    }
    .user__cabinet .user img:last-child{
        cursor: pointer;
    }
    .user__cabinet .info__box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 3rem;
    }
    .user__cabinet .info__user{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .user__cabinet .info__user .title{
        color: #898989 !important;
        font-size: 19px;
        padding-bottom: 0.5rem;
    }
    .user__cabinet .info__user .change{
        display: flex;
    }
    .user__cabinet .info__user .change.inputs{
        display: flex;
        align-items: center;
    }
    .user__cabinet .info__user .change.inputs span{
        margin: 0 10px 0 5px;
    }
    .user__cabinet .info__user .change p{
        color: #2C2C2C;
    }
    .user__cabinet .info__user .change img{
        margin-left: 5px;
        cursor: pointer;
        height: 18px;
    }
    .user__boxes2{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;
        padding-bottom: 5rem;
    }
    .user__boxes2 .box{
        width: 48%;
        padding: 2.5rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin-top: 2.5rem;
    }
    .user__boxes2 .box:first-child{
        cursor: pointer;
    }
    .user__boxes2 .box .title{
        font-size: 24px;
        font-weight: bold;
        color: #023047;
        margin-bottom: 1rem;
    }
    .user__boxes2 .box .add__cart{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        border: 2px solid rgba(194, 17, 167, 0.4);
        width: 260px;
        height: 130px;
    }
    .user__boxes2 .box .add__cart i{
        border-radius: 50%;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #C211A7;
        color: #C211A7;
        font-size: 22px;
        box-sizing: border-box;
        margin-bottom: 1rem;
    }
    .user__boxes2 .box .add__cart p{
        color: #C211A7;
    }
    .user__boxes2 .box:nth-child(2) .gps__text{
        display: flex;
        color: #898989;
    }
    .user__boxes2 .box:nth-child(2) .gps__text img{
        margin-right: 10px;
        object-fit: contain;
    }
    .user__boxes2 .box:nth-child(3) p{
        color: #898989;
        margin-bottom: 1.5rem;
    }
    .user__boxes2 .box:nth-child(3) span{
        color: #C211A7;
        font-weight: bold;
    }
    .user__boxes2 .box:nth-child(4) span{
        color: #C211A7;
        font-weight: bold;
    }
</style>