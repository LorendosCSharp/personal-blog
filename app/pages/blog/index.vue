
<script setup lang="ts">
const { t } = useI18n()
const { getAllPosts } = usePosts()

const posts=await getAllPosts()
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
                
                <UBlogPosts class="pb-8">

                    <UBlogPost
                        v-for="(post,index) in posts"
                        :key="index"
                        v-bind="post"
                        :to="post.path"
                        :image="post.imageSrc"
                    />

                </UBlogPosts>
                
                <div class="flex justify-center">
                    <UPagination  :sibling-count="1" :items-per-page="9" :to="to"/>
                </div>
            </UContainer>
        </UPageBody>
    </UPage>


</template>