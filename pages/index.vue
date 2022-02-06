<template>
  <div>
    <div class="font-semibold pt-16">
      <h2 class="text-2xl sm:text-4xl">Hey, I'm Indra</h2>
      <h1 class="leading-tight text-4xl sm:text-6xl sm:leading-tight">I love <code>math</code> and making <code>computery</code> things.</h1>

    </div>
    <nuxt-link to="/blog/" class="p-3 bg-highlight block mt-8 max-w-max text-lg font-semibold rounded-sm">View Posts → </nuxt-link>

    <div class="mt-5">
    <img
      class="resize xs:w-1/3 xs:float-right rounded-2xl border-2 border-highlight m-2"
      src="https://media.discordapp.net/attachments/863300968539619338/901326337283883058/download20211006152841.png">

    <h3 class="font-semibold text-2xl mt-4">About me</h3>
    I'm a highschool student who loves programming and making things for people.
    Currently I'm learning web development with VueJS. I also love Mathematics and have made a
    <a href="github.com/frex-e/jmssTools" class="link">library of Wolfram Language/Mathematica functions</a>
    to use in VCE Maths exams. (Totally not cheating)
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>

<style scoped>
code {
  @apply text-highlight bg-gray-800 px-1 rounded-lg;
}

.link {
  @apply text-highlight hover:underline;
}
</style>
