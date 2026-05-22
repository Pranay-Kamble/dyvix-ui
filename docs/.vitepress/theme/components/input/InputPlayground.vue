<script setup>
import { onMounted, ref } from 'vue';
import React from 'react';
import ReactDOM from 'react-dom/client';
import InputPlayground from './InputPlayground';

const container = ref(null);

onMounted(() => {
  ReactDOM.createRoot(container.value).render(
    React.createElement(InputPlayground)
  );
});
</script>

<template>
  <div ref="container"></div>
</template>
