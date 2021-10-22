<template>
  <div class="login-card container">
    <p v-if="loginError">{{ loginError }}</p>

    <form class="login-card__form" @submit.prevent="loginSubmit">
      <p v-if="accessToken" class="login-card__label">Login Successful</p>
      <label class="login-card__label">Enter your token</label>
      <input class="login-card__input" type="text" placeholder="Enter token" v-model="token" />
      <button type="submit" class="login-card__button">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" src="./login"></script>

<style scoped lang="scss">
@import './login-card';
</style>
