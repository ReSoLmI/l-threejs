<template>
  <vue-markdown v-highlight :source="source" :emoji="emoji">
    <slot />
  </vue-markdown>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import VHighlight from '../../directive/v-highlight'
  import 'github-markdown-css/github-markdown.css'

  export default {
    name: 'LuiMarkdown',
    components: { VueMarkdown },
    directives: {
      highlight: VHighlight,
    },
    props: {
      source: { type: String, default: `` },
      emoji: { type: Boolean, default: false },
    },
  }
</script>
