<template>
    <div class="product__order">
        <button @click="decreaseCounter(1)" class="product__increment">-</button>
        <p>{{ counter }}</p>
        <button @click="increaseCounter(10)" class="product__decrement">+</button>
    </div>
</template>

<script>
export default {
  data: () => ({
    counter: 1
  }),
  methods: {
    increaseCounter (increaseLimit) {
      if (this.counter < increaseLimit) this.counter++
    },
    decreaseCounter (decreaseLimit) {
      if (this.counter > decreaseLimit) this.counter--
    }
  }
}
</script>

<style>
    .product__order {
        display: flex;
        align-items: center;
    }
    .product__order .product__increment{
        background: #EDE9E9;
        color: #000;
        cursor: pointer;
        font-size: 24px;
        padding: 0 10px;
        border-radius: 5px 0px 0px 5px;
    }
    .product__order .product__decrement{
        background: linear-gradient(92.98deg, rgba(190, 217, 255, 0) 0.15%, #729EDB 0.15%, #274784 100.17%);
        color: #FFF;
        cursor: pointer;
        font-size: 24px;
        padding: 0 10px;
        border-radius: 0 5px 5px 0;
    }
    .product__order p{
        width: 70px;
        padding: 5px 10px;
        outline: none;
        border: 1px solid #C4C4C4;
    }
</style>
