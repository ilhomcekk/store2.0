<template>
    <div class="cart__box shadow-xl">
        <div class="cart__image">
            <img src="../assets/image/11175-4 1.png" alt="">
            <button>
                <i class="far fa-heart"></i>
            </button>
        </div>
        <div class="cart__info">
            <div class="flex justify-between mt-3">
                <a class="cart__cat" href="#">Костюмы</a>
                <a class="cart__brand" href="#">Zara</a>
            </div>
            <div class="cart__title">
                <a href="#">Элегантный Костюм с брюками ZARA стиль</a>
                <p>1400  ₽</p>
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
    .cart__title p {
        font-weight: 500;
        font-size: 17px;
        line-height: 21px;
        color: #005964;
        margin-top: 10px;
    }
</style>