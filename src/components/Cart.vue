<template>
    <div class="cart__box shadow-xl">
        <div class="cart__image" @mouseover="listOne = true" @mouseleave="listOne = false">
            <img :src="cart.img" alt="">
            <span v-if="listOne" @click="listOne = false" class="fast__review">Быстрый просмотр</span>
            <button>
                <i class="far fa-heart"></i>
            </button>
        </div>
        <div class="cart__info">
            <div class="flex justify-between mt-3">
                <a class="cart__cat" href="#">{{ cart.category }}</a>
                <a class="cart__brand" href="#">{{ cart.brand }}</a>
            </div>
            <div class="cart__title">
                <a href="#">{{ cart.name }}</a>
                <div class="cart__price">
                    <h5>{{ cart.price }}</h5>
                    <p>{{ cart.oldprice }}</p>
                </div>
            </div>
            <div class="cart__add">
                <router-link tag="button" to="/add">
                    <span>В корзину</span>
                    <img src="../assets/svg/cart.svg" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['cart'],
  data: () => ({
    listOne: false
  })
}
</script>
<style scoped>
    .cart__image {
        position: relative;
    }
    .cart__image img {
        width: 100%;
        height: 227px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }
    .cart__image button {
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 10px;
        margin-top: 10px;
    }
    .cart__image button i {
        color: #FC7D00;
        font-size: 25px;
    }
    .cart__box {
        background: #FFFFFF;
        border-radius: 10px;
    }
    .cart__add {
        margin-top: 15px;
    }
    .cart__add button {
        display: flex;
        background: #222F3E;
        border-radius: 8px;
        width: 100%;
        font-size: 16px;
        justify-content: center;
        color: #FFFFFF;
        font-weight: 500;
        padding: 10px 0;
    }
    .cart__add button img {
        margin-left: 15px;
    }
    .cart__info {
        padding: 0 10px 15px 10px;
    }
    .cart__cat {
        font-size: 14px;
        line-height: 16px;
        color: #666666;
    }
    .cart__brand {
        font-size: 12px;
        line-height: 14px;
        color: #898989;
    }
    .cart__title {
        margin-top: 10px;
    }
    .cart__title a {
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        color: #000000;
    }
    .cart__price {
        display: flex;
        flex-direction: row;
    }
    .cart__price h5 {
        font-weight: 500;
        font-size: 17px;
        line-height: 21px;
        color: #FC7D00;
        margin-top: 10px;
    }
    .cart__price p {
        margin-left: 30px;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        margin-top: 14px;
        text-decoration: line-through;
    }
    .fast__review {
        position: absolute;
        top: 0;
        margin-top: 0px;
        font-weight: normal;
        font-size: 12px;
        line-height: 22px;
        color: #FC7D00;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        background: #F8F8FA;
        border-radius: 25px;
        width: 60%;
        padding: 5px 0;
        text-align: center;
    }
</style>
