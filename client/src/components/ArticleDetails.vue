<template>
  <div class="">
    <h2>{{ article.title }}</h2>
    <p>{{ article.content }}</p>
    <div class="line"></div>
  </div>
</template>

<script>

export default {
  name: 'articleDetails',
  props: ['id', 'article']
}
</script>

<style scoped>
p {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: black;
}
</style>
