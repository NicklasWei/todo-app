<template>
  <Todos />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Todos from './components/Todos.vue';

export default defineComponent({
  name: 'App',
  components: {
    Todos,
  },
});
</script>

<style lang="scss">
@import 'styles/main.scss';
</style>
