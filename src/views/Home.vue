<template>
  <HelloWorld />
</template>

<script>
  import HelloWorld from '@/components/HelloWorld';

  export default {
    components: {
      HelloWorld,
    },
    mounted() {
      this.$axios.get('https://github.com/bad4iz/lazyWithPreload/blob/main/README.md', {
          responseType: 'blob',
        })
    }
  };
</script>
