<template>
  <div class="navbar-logo">
    <div class="navbar-logo__inner">
      <a target="_blank" href="https://lstack.com" rel="noopener noreferrer">
        <i class="navbar-logo__icon" />
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavbarLogo',
  }
</script>

<style lang="stylus">
  .navbar-logo
    position: relative;

  .navbar-logo__inner
    display: inline-block;


  .navbar-logo__icon
    display: inline-block;
    width: 90px;
    height: 20px;
    vertical-align: middle;
    background-image: url(../../assets/lstack-logo.svg);
    background-repeat: no-repeat;
</style>
