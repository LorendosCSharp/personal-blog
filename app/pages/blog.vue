
<script setup lang="ts">
import type { BlogPostProps } from '@nuxt/ui'
const { t } = useI18n()
const posts = ref<BlogPostProps[]>([
  {
    title: 'Nuxt Icon v1',
    description: 'Discover Nuxt Icon v1!',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25'
  },
  {
    title: 'Nuxt 3.14',
    description: 'Nuxt 3.14 is out!',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04'
  },
  {
    title: 'Nuxt 3.13',
    description: 'Nuxt 3.13 is out!',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22'
  },
    {
    title: 'Nuxt Icon v1',
    description: 'Discover Nuxt Icon v1!',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25'
  },
  {
    title: 'Nuxt 3.14',
    description: 'Nuxt 3.14 is out!',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04'
  },
  {
    title: 'Nuxt 3.13',
    description: 'Nuxt 3.13 is out!',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22'
  },
    {
    title: 'Nuxt Icon v1',
    description: 'Discover Nuxt Icon v1!',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25'
  },
  {
    title: 'Nuxt 3.14',
    description: 'Nuxt 3.14 is out!',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04'
  },
  {
    title: 'Nuxt 3.13',
    description: 'Nuxt 3.13 is out!',
    image: 'https://nuxt.com/assets/blog/v3.13.png',
    date: '2024-08-22'
  }
])
const items = ref([t('sort-date'),t('sort-az'),t('sort-za')])
const value = ref(t('sort-date'))

function to(page: number) {
  return {
    query: {
      page
    },
    hash: '#with-links'
  }
}

</script>

<template>
    <UPage>
        <UPageHero title="Blog Posts" 
            class="dark:bg-avocado-700 light:bg-beige-100"
            :ui="{
                headline: 'dark:text-avocado-400',
                title: 'dark:text-beige-200',
                description: 'dark:text-beige-100'
            }"    
        />
        <UPageBody>
            <UContainer>
                <div class="mb-8 flex justify-between gap-8">
                    <USelectMenu v-model="value" :items="items" icon="i-lucide-filter" variant="ghost" class="w-48"/>
                    <UInput :placeholder="t('search')" class="flex-1" icon="i-lucide-search"/>
                </div>
                <UBlogPosts :posts="posts" class="pb-8"/>
                
                <div class="flex justify-center">
                    <UPagination  :sibling-count="1" :items-per-page="9" :to="to"/>
                </div>
            </UContainer>
        </UPageBody>
    </UPage>


</template>