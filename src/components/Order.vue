<template>
    <tr>
        <td>№ {{ order.id }}</td>
        <td>{{ order.date }}</td>
        <td>{{ order.price }} ₽</td>
        <td><img src="../assets/image/visa-card-png-4 1.png" alt="not found"></td>
        <td>{{ order.price }}</td>
    </tr>
</template>

<script>
export default {
  props: ['order'],
  data: () => ({

  })
}
</script>

<style scoped>
    table tr td{
        text-align: center;
        color: #005964;
        font-size: 19px;
        font-weight: normal;
        border-bottom: 1px solid #D9D9D9;
        background: #F8F8FA;
        padding: 1.5rem 0;
    }
    table tr:last-child td:first-child{
        border-radius: 0 0 0 8px;
    }
    table tr:last-child td:last-child{
        border-radius: 0 0 8px 0;
    }
    table tr:last-child td{
        border-bottom: none;
    }
    table tr td img{
        text-align: center;
        margin: 0 auto;
    }
</style>
