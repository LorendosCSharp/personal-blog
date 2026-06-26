<script setup lang="ts">

const { t } = useI18n()



</script>

<template>
  <UPage>
    <UPageHero 
        title="Leonid Osman "
        orientation="horizontal"
        :headline=" t('portfolio-head-headline') "
        :description="t('portfolio-head-description')"
        class="dark:bg-avocado-700 light:bg-beige-100"
        :ui="{
            headline: 'dark:text-avocado-400',
            title: 'dark:text-beige-200',
            description: 'dark:text-beige-100'
        }"
    >
        <div class="relative w-[400px] h-[400px]">
        

            <NuxtImg
                src="https://picsum.photos/400"
                class="w-full h-full rounded-full object-cover"
                :custom="true"
                v-slot="{ src, isLoaded, imgAttrs }"
                quality="100"
            >
              <!-- Show the actual image when loaded -->
                <img
                    v-if="isLoaded"
                    v-bind="imgAttrs"
                    :src="src"
                >

                <USkeleton
                    v-else
                    class="absolute inset-0 rounded-full"
                />  
            </NuxtImg>
        </div>
    </UPageHero>

    <UPageBody class="pb-0 mb-8">
        <UContainer class="flex flex-row justify-between">
            <UPageFeature
                title="10+"
                :description="t('portfolio-small-experience')"
                :ui="{
                    title: 'dark:text-beige-200 text-2xl',
                    description: 'dark:text-beige-100 text-xl'
                }"
            />
            <UPageFeature
                title="15+"
                :description="t('portfolio-small-projects')"
                :ui="{
                    title: 'dark:text-beige-200 text-2xl',
                    description: 'dark:text-beige-100 text-xl'
                }"
            />
            <UPageFeature
                title="7+"
                :description="t('portfolio-small-languages-programming')"
                :ui="{
                    title: 'dark:text-beige-200 text-2xl',
                    description: 'dark:text-beige-100 text-xl'
                }"
            />
            <UPageFeature
                title="4"
                :description="t('portfolio-small-languages')"
                :ui="{
                    title: 'dark:text-beige-200 text-2xl',
                    description: 'dark:text-beige-100 text-xl'
                }"
            />
        </UContainer>
    </UPageBody>

  </UPage>
  
</template>
