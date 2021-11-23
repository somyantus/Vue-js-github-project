<template>
  <div class="login-card container">
    <form class="login-card__form" @submit.prevent="loginSubmit">
      <p v-if="accessToken" class="login-card__label">Login Successful</p>
      <label class="login-card__label">Login Account</label>
      <input class="login-card__input" type="password" placeholder="Enter token" v-model="token" />
      <p v-if="loginError" class="login-card__error">{{ loginError }}</p>
      <button type="submit" class="login-card__button">Login</button>
    </form>
  </div>
</template>

<script lang="ts" src="./login"></script>

<style scoped lang="scss">
@import './login-card';
</style>
