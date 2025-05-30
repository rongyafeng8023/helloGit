<template>
    <div>
        <!--我的待办-->
      <Todo/>
      <!--销售漏斗-->
      <Sales_chart/>
    </div>
</template>
<script setup>
import Todo from '@/components/todo.vue';
import Sales_chart from './sales_chart.vue';
</script>