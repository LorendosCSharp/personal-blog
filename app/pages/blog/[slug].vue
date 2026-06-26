<script setup lang="ts">
const { t,locale } = useI18n()
const { getPostBySlug } = usePosts()

const route = useRoute()
const slug = route.params.slug as string

const post = await getPostBySlug(slug)
</script>

<template>
    <UPage class="dark:bg-avocado-900 light:bg-beige-100">
        <template v-if="post">
            <div class="relative overflow-hidden py-8">
                <div class="absolute inset-0  h-48 w-full overflow-hidden">
                    <NuxtImg src="https://picsum.photos/400" :custom="true"
                        v-slot="{ src, isLoaded, imgAttrs }" quality="100">
                        <!-- Show the actual image when loaded -->
                        <img v-if="isLoaded" v-bind="imgAttrs" :src="src" class="w-full h-full object-cover blur-xs">

                        <USkeleton v-else class="absolute inset-0 " />
                    </NuxtImg>
                </div>
                <div class="absolute inset-0  h-48 w-full dark:bg-avocado-900/80 light:bg-beige-100/80">
                </div>
                <div class="relative z-10 max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8">
                    <p class=" text-sm dark:text-beige-100 light:text-avocado-500">{{ post.date }}</p>
                    <h1 class="text-8xl dark:text-beige-200 light:text-avocado-700">
                        {{ post.title }}
                    </h1>
                    <p class="dark:text-beige-100 light:text-avocado-500">{{ post.description }}</p>
                </div>
            </div>
            <UPageBody>
                <UContainer>
                    <ContentRenderer :value="post" class="dark:bg-avocado-900 light:bg-beige-100"/>
                </UContainer>
            </UPageBody>
        </template>
        <template v-else>
            <div class="min-h-screen flex flex-col dark:bg-avocado-700 light:bg-beige-100">
                <UPageHero :title="t('not-found')" :description="t('not-found-2')" :ui="{
                    title:'dark:text-beige-200',
                    description:'dark:text-beige-100'
                }"/>
            </div>
        </template>
    </UPage>
</template>
