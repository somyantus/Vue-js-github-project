<template>
  <div class="loading">
    <img src="../../assets/images/loading.gif" alt="Loading Icon" class="loading__img" />
  </div>
</template>

<script lang="ts" src="./loader"></script>

<style scoped lang="scss">
@import './loader';

.loading {
  z-index: 99999;
  display: flex;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: #fff;
  top: 0;
  left: 0;
  align-items: center;
}
</style>
