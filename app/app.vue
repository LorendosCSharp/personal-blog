<script setup lang="ts">
import {en, de} from '@nuxt/ui/locale'
import type { NavigationMenuItem } from '@nuxt/ui'

const { locale, setLocale } = useI18n()

const route = useRoute()
const normalizedPath = computed(() =>
  route.path.replace(/^\/(en|de)(?=\/|$)/, '') || '/'
)
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: normalizedPath.value==="/",
    icon:'i-lucide-house'
  },  
  {
    label: 'Blog',
    active: normalizedPath.value==="/blog",
    icon:'i-lucide-newspaper',
    children:[
      {
        label: 'All',
        description: 'View all blog posts',
        icon :'i-lucide-layers',
        to:'/blog'
      },
      {
        label: 'New',
        description: 'Latest blog posts',
        icon :'i-lucide-sparkle',
        to:'/baka'
      }
    ]
  },

])
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: locale
  }
})
const title = 'Lorendos - personal site'
const description = 'Small online site by me, Leonid aka Lorendos with my portfolio and blog'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template >
  <UApp >
    <UHeader class="light:bg-beige-200 dark:bg-avocado-900 ">
      <template #left>
        <NuxtLink to="/">
           Leonid Osman
        </NuxtLink>

      </template>

      <UNavigationMenu :items="items" class="flex flex-col min-w-[25rem]"as="div"/>

      <template #right>
        <UColorModeButton />
        <UButton
          to="https://github.com/LorendosCSharp"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
        <ULocaleSelect
          :model-value="locale"
          :locales="[en,de]"
          @update:model-value="setLocale($event)"
          variant="ghost"
          class="w-38"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>
    <USeparator :ui="{
        border:'dark:border-avocado-300 light:border-beige-300'
    }"/>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted ">
          {{ $t("created-by") }} • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/LorendosCSharp"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>


<style>
  @reference "~/assets/css/main.css";
  body {
    @apply light:bg-beige-200;
  }
</style>