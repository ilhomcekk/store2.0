<template>
    <div class="back">
        <Navbar />
        <div class="container mx-auto px-12 pages">
            <span>Главная страница / </span>
            <span> Контакты</span>
        </div>
        <div class="container mx-auto px-12">
            <div class="contacts__title">Контакты</div>
            <div class="contacts__boxes">
                <div class="box">
                    <img src="../assets/image/Screenshot_1 1.png" class="map" alt="not found">
                    <div class="boxes">
                        <div class="box"></div>
                    </div>
                </div>
                <div class="r__box"></div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'

export default {
  name: 'Home',
  data: () => ({

  }),
  methods: {

  },
  components: {
    Navbar,
    Footer
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
    .contacts__title{
        font-size: 42px;
        color: #005964;
        margin-bottom: 2rem;
    }
    .contacts__boxes{
        display: flex;
        justify-content: space-between;
    }
    .contacts__boxes .box{
        width: 56%;
    }
    .contacts__boxes .box .map{
        width: 100%;
    }
    .contacts__boxes .box .boxes{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        padding: 1.5rem 0;
    }
    .contacts__boxes .box .boxes .contact__box{
        width: 48%;
        background: #F8F8FA;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 1rem 1rem 2rem 1rem;
        margin: 0.8rem 0;
    }
    .contacts__boxes .box .boxes .contact__box h1{
        color: #666666;
        margin-bottom: 0.5rem;
    }
    .contacts__boxes .box .boxes .contact__box h3{
        font-size: 18px;
        color: #1E1C1C;
        margin: 0px;
        line-height: 22px;
    }
    .contacts__boxes .box .boxes .contact__box h3:first-child{
        margin-top: 1rem;
    }
    .contacts__boxes .r__box{
        width: 40%;
        height: 710px;
        background: #FFECF5;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        padding: 2rem 2.5rem;
        border-radius: 5px;
    }
    .contacts__boxes .r__box .title{
        color: #023047;
        font-size: 28px;
        font-weight: bold;
    }
    .contacts__boxes .r__box .input{
        margin: 1.5rem 0;
    }
    .contacts__boxes .r__box .input .input__title{
        color: #023047;
        margin-bottom: 5px;
        font-size: 18px;
    }
    .contacts__boxes .r__box .input input{
        width: 100%;
        border: 1px solid #374C91;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 8px 10px;
        outline: none;
    }
    .textarea{
        padding-bottom: 8rem !important;
    }
    .contacts__boxes .r__box button{
        width: 100%;
        height: 45px;
        background: linear-gradient(90deg, #C311A7 3.86%, #A91BA5 100.16%);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        color: #FCF6F6;
        font-size: 18px;
    }
    .contacts__boxes .r__box button:hover{
        box-shadow: unset !important;
        background: #A91BA5;
    }
    @media only screen and (min-width: 800px) and (max-width: 1025px){
        .contacts__boxes .r__box{
            height: 595px;
        }
        .contacts__boxes .r__box .title{
            font-size: 23px;
        }
        .contacts__boxes .r__box .input{
            margin: 1rem 0;
        }
        .contacts__boxes .r__box .input input{
            padding: 5px 10px;
        }
        .textarea{
            padding-bottom: 6rem !important;
        }
        .contacts__boxes .r__box button{
            margin-top: 0.8rem;
        }
    }

    @media only screen and (max-width: 769px){
       .contacts__boxes{
           flex-wrap: wrap;
       }
       .contacts__boxes .box{
           width: 100%;
       }
       .contacts__boxes .r__box{
           width: 100%;
           height: 680px;
           margin-bottom: 3rem;
       }
    }

    @media only screen and (min-width: 376px) and (max-width: 600px){
        .contacts__boxes .box .boxes .contact__box{
            width: 100%;
            margin: 1rem auto;
        }
        .contacts__boxes .r__box{
            height: auto;
            padding: 1.5rem;
        }
        .contacts__boxes .r__box .title{
            font-size: 24px;
        }
        .contacts__boxes .r__box .input{
            margin: 12px 0;
        }
        .contacts__boxes .r__box button{
            margin-top: 1rem;
        }
        .textarea{
            padding-bottom: 5rem !important;
        }
    }

    @media only screen and (max-width: 415px){
        .pages{
            padding: 1rem 1.25rem !important;
        }
        .contacts__title{
            font-size: 32px;
            margin-bottom: 1rem;
        }
        .contacts__boxes .box .boxes .contact__box{
            width: 100%;
            margin: 8px auto;
            padding: 10px;
        }
        .contacts__boxes .box .boxes .contact__box h3{
            font-size: 14px;
        }
        .contacts__boxes .r__box{
            height: auto !important;
            padding: 1.5rem;
        }
        .contacts__boxes .r__box .title{
            font-size: 22px;
        }
        .contacts__boxes .r__box .input .input__title{
            font-size: 15px;
            margin-bottom: 2px;
        }
        .contacts__boxes .r__box .input{
            margin: 12px 0;
        }
        .contacts__boxes .r__box .input input{
            padding: 3px 10px;
        }
        .contacts__boxes .r__box button{
            margin-top: 1rem;
        }
        .textarea{
            padding-bottom: 5rem !important;
        }
    }
</style>
