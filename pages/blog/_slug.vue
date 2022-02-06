<template>
  <article class="pt-10">
    <h1 class="text-5xl font-semibold border-b pb-2">{{ article.title }}</h1>
    <h2 class="mb-4 text-gray-400">{{ new Date(article.updatedAt).toLocaleDateString('au',{ year: 'numeric', month: 'long', day: 'numeric' }) }}</h2>
    <nuxt-content :document="article" class="markdown-body"/>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  }
}
</script>
