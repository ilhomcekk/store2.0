<template>
    <div class="cart__box shadow-xl">
        <div class="cart__image">
            <img :src="cart.img" alt="">
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
                <button>
                    <span>В корзину</span>
                    <img src="../assets/svg/cart.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['cart']
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
        background: #FC7D00;
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
        color: #005964;
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
</style>
