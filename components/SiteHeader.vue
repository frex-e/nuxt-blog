<template>
  <div class="flex flex-row items-center w-full bg-gray-800 p-3 border-b-2 border-highlight header">


    <!-- Title -->
    <div class="text-lg sm:text-2xl font-semibold flex-grow items-baseline">
      <NuxtLink to="/">Indra Kusumah-kasim <span class="font-mono text-highlight font-normal">{frex-e}</span></NuxtLink>
    </div>
    <NuxtLink v-for="header in headers" :key="header.name" :to="header.to" class="mx-2 font-semibold text-gray-300" :class="{'home': header.name == 'Home'}">
      {{ header.name  }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          name: "Home",
          to:"/",
        },
        {
          name: "Blog",
          to: "/blog"
        }
      ]
    }
  }
}
</script>

<style scoped>
.header > .nuxt-link-active {
  @apply text-highlight;
}

.home.nuxt-link-active{
  @apply text-white;
}

.home.nuxt-link-active.nuxt-link-exact-active {
  @apply text-highlight;
}
</style>
