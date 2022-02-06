<template>
  <div class="flex flex-col pt-10">
    <div v-for="article in articles" :key="article.slug" class="article p-2">
      <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="text-4xl font-semibold ">{{ article.title }}</nuxt-link>
      <h2 class="mb-4 text-gray-400">{{ new Date(article.updatedAt).toLocaleDateString('au',{ year: 'numeric', month: 'long', day: 'numeric' }) }}</h2>
      <nuxt-content :document="article" class="markdown-body max-h-96 mb-4 overflow-hidden" />
      <nuxt-link class="text-lg" :to="{ name: 'blog-slug', params: { slug: article.slug } }">See Post →</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .sortBy('createdAt', 'desc')
      .limit(5)
      .fetch()

    return { articles }
  }
}
</script>

<style scoped>
.article {
  @apply border-b;
}

.article:first-child {
  @apply border-t;
}
</style>

