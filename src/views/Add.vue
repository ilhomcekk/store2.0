<template>
    <div class="">
        <Navbar />
        <div class="add-product">
            <div class="container mx-auto px-12">
                <span>Главная страница / </span>
                <span>Рубашки / </span>
                <span>Базовая рубашка </span>
            </div>
            <div class="container mx-auto px-5">
                <h1>Базовая рубашка</h1>
                <div class="product-action">
                    <div class="stars">
                        <img src="../assets/svg/Star 1.svg" alt="star">
                        <img src="../assets/svg/Star 1.svg" alt="star">
                        <img src="../assets/svg/Star 1.svg" alt="star">
                        <img src="../assets/svg/Star 1.svg" alt="star">
                        <img src="../assets/svg/Star 1.svg" alt="star">
                    </div>
                    <div class="comment"><span>545</span>отзывов</div>
                </div>
            </div>
            <div class="container mx-auto px-12">
                <div class="product-list">
                    <div class="product__img">
                        <div class="images">
                            <img src="../assets/image/unnamed 7.png" alt="not found">
                            <img src="../assets/image/outdoors-3176145_1920 1.png" alt="not found">
                            <img src="../assets/image/outdoors-3179821_1920 3.png" alt="not found">
                            <img src="../assets/image/outdoors-3176153_1920 1.png" alt="not found">
                        </div>
                        <div class="image">
                            <img src="../assets/image/outdoors-3176153_1920 1 (1).png" alt="not found">
                        </div>
                    </div>
                    <div class="product__information">
                        <div class="product__about">
                            <div class="product__price">500 ₽ <span>2000 рубл</span></div>
                            <Counter />
                        </div>
                        <div class="color__title">Цвет</div>
                        <div class="color__boxes">
                            <div class="color__box"><img src="../assets/image/6d6d202a7b1173e28f43c02b7daf816e 1.png" alt=""></div>
                            <div class="color__box"></div>
                            <div class="color__box"></div>
                            <div class="color__box"></div>
                            <div class="color__box"></div>
                        </div>
                        <div class="product__size-title">Размер</div>
                        <div class="product__size">
                            <span>42</span>
                            <span>46</span>
                            <span>48</span>
                            <span>50</span>
                            <span>52</span>
                            <span>54</span>
                        </div>
                        <div class="payment">
                            Цена при оплате:
                            <img src="../assets/image/image 29.png" alt="not found">
                        </div>
                        <div class="delivery">Доставка: 27-29 сентября</div>
                        <div class="sales">Продавец: <span>ВАЙЛДБЕРРИЗ ООО</span></div>
                        <div class="warehouse">Склад отгрузки: склад Logoname</div>
                        <div class="brend"><img src="../assets/image/image 38.png" alt="not found"></div>
                        <div class="product__buttons">
                            <div>
                                <button type="submit" id="korzina__button">В корзину</button>
                                <i class="fa fa-heart"></i>
                            </div>
                            <button type="submit" id="sale">Купить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-12">
                <div class="recommended">
                    <div class="r__box">
                        <div class="box__title">Состав</div>
                        <span>эластан 5%,</span>
                        <span>вискоза 42%,</span>
                        <span>шерсть 53%</span>
                        <div class="r__type">Комплектация: <span>рубашка</span></div>
                        <div class="r__landing">Крой: <span>средняя посадка</span></div>
                        <p>Информация о технических характеристиках, комплекте
                            поставки,стране изготовления и внешнем виде товара
                            носит справочный характер и основывается на 
                            последних доступных сведениях от продавца</p>
                    </div>
                    <div class="r__box">
                        <div class="box__title">Рекомендуется</div>
                        <div class="grid grid-cols-2 gap-3" >
                            <div v-for="cart in carts.slice(0, 2)" :key="cart.id">
                                <Cart :cart="cart" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-12 c-products">
                <div class="advertising__title">Рекламный блок</div>
                <div class="grid grid-cols-5 gap-3" >
                    <div v-for="cart in carts.slice(0, 5)" :key="cart.id">
                        <Cart :cart="cart" />
                    </div>
                </div>
                <div class="advertising__button mt-8">
                    <button type="submit" class="show__button">Показать еще</button>
                </div>
            </div>
            <div class="container mx-auto px-12 c-products">
                <div class="advertising__title">Похожие товары</div>
                <div class="grid grid-cols-5 gap-3" >
                    <div v-for="cart in carts.slice(0, 5)" :key="cart.id">
                        <Cart :cart="cart" />
                    </div>
                </div>
                <div class="advertising__button mt-8">
                    <button type="submit" class="show__button">Показать еще</button>
                </div>
            </div>
            <div class="container mx-auto px-12">
                <div class="question__title">Отзывы и вопросы</div>
                <div class="q__comments">
                    <span>Отзывы 105</span>
                    <span>Вопросы 229</span>
                    <span>Статьи 2</span>
                    <p>Правила оформления отзывов и вопросов</p>
                </div>
                <div class="question">
                    <div class="q__box">
                        <div class="comment">
                            <div class="order">4.5</div>
                            <p class="pb-5">На основании 105 отзыва</p>
                            <div class="stars">
                                <img src="../assets/svg/Star 1.svg" alt="star">
                                <img src="../assets/svg/Star 1.svg" alt="star">
                                <img src="../assets/svg/Star 1.svg" alt="star">
                                <img src="../assets/svg/Star 1.svg" alt="star">
                                <img src="../assets/svg/Star 1.svg" alt="star">
                            </div>
                        </div>
                        <div class="place">
                            <div class="lines">
                                <div class="number">5</div>
                                <div class="line"></div>
                                <div class="percent">83%</div>
                            </div>
                            <div class="lines">
                                <div class="number">4</div>
                                <div class="line"></div>
                                <div class="percent">15%</div>
                            </div>
                            <div class="lines">
                                <div class="number">3</div>
                                <div class="line"></div>
                                <div class="percent">3%</div>
                            </div>
                            <div class="lines">
                                <div class="number">2</div>
                                <div class="line"></div>
                                <div class="percent">8%</div>
                            </div>
                            <div class="lines">
                                <div class="number">1</div>
                                <div class="line"></div>
                                <div class="percent">7%</div>
                            </div>
                        </div>
                    </div>
                    <div class="q__box">
                        <div class="box">
                            <div class="protsent">65.5%</div>
                            <p>Barcha sotuvlar</p>
                        </div>
                        <div class="box">
                            <div class="protsent">55.8%</div>
                            <p>Barcha sotuvlar</p>
                        </div>
                        <div class="box">
                            <div class="protsent">50.5%</div>
                            <p>Barcha sotuvlar</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-12 p-customer">
                <span>Сортировать по: </span>
                <span>Дате <i class="fa fa-arrow-down"></i></span>
                <span>Оценке</span>
                <div class="customer">
                    <div class="c__box">
                        <div class="c__box-title">Отзывы покупателей <span>(105)</span></div>
                        <div class="user__comment">
                            <div class="user">
                                <div class="user__name">Турсунов Асрор</div>
                                <div class="stars">
                                    <img src="../assets/svg/Star 1.svg" alt="star">
                                    <img src="../assets/svg/Star 1.svg" alt="star">
                                    <img src="../assets/svg/Star 1.svg" alt="star">
                                    <img src="../assets/svg/Star 1.svg" alt="star">
                                    <img src="../assets/svg/Star 1.svg" alt="star">
                                </div>
                            </div>
                            <p>Качество ткани хорошее, но если вы предпочитаете оверсайз, выбирайте размер меньше вашего, например, слишком свободные рукава.</p>
                            <div class="date__sale">
                                <div class="date">30.04.2021</div>
                                <!-- <img src="../assets/image/Vektor.png" alt="not found"> -->
                            </div>
                        </div>
                    </div>
                    <div class="c__box"></div>
                </div>
            </div>
            <!-- last -->
            <div class="container mx-auto px-5 mb-12">
                <div class="recently-products">
                    <div class="recently__title">Вы недавно смотрели</div>
                <div class="grid grid-cols-5 gap-3" >
                    <div v-for="cart in carts.slice(0, 2)" :key="cart.id">
                        <Cart :cart="cart" />
                    </div>
                </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Cart from '../components/Cart.vue'
import Footer from '../components/Footer.vue'
import Counter from '../components/Counter.vue'

export default {
  name: 'Home',
  data: () => ({

  }),
  methods: {

  },
  computed: {
    carts () {
      return this.$store.getters.CARTS
    }
  },
  components: {
    Navbar,
    Cart,
    Footer,
    Counter
  }
}

</script>
<style>
    .back {
        background-color: #E5E5E5;
    }
    

</style>
