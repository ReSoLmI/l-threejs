<template>
  <transition
    name="drop"
    appear
    @appear="setStyle"
    @after-appear="unsetStyle"
    @enter="setStyle"
    @after-enter="unsetStyle"
    @before-leave="setStyle"
  >
    <slot />
  </transition>
</template>

<script>
  export default {
    name: 'MyTransition',

    props: {
      delay: { type: Number, default: 0 },
      duration: { type: Number, default: 0.25 },
    },

    methods: {
      setStyle(items) {
        items.style.transition = `transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`
        items.style.transform = 'translateY(-20px)'
        items.style.opacity = '0'
      },

      unsetStyle(items) {
        items.style.transform = 'translateY(0)'
        items.style.opacity = '1'
      },
    },
  }
</script>

<style lang="stylus">
  .drop-enter, .drop-leave-to
    opacity 0
    transform translateY(-20px)
</style>
