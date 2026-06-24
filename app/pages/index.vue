<script setup lang="ts">
const { t } = useI18n()
const myPictureLoaded= ref(false)

const imgSrc = 'https://picsum.photos/400'

function markLoaded() {
  myPictureLoaded.value = true
}

onMounted(() => {
  const img = new Image()
  img.src = imgSrc

  if (img.complete) {
    myPictureLoaded.value = true
  }
})


</script>

<template>
  <div>
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
        
            <USkeleton
                v-show="!myPictureLoaded"
                class="absolute inset-0 rounded-full"
            />  
            <img
                src="https://picsum.photos/400"
                class="w-full h-full rounded-full object-cover"
                @load="markLoaded"
            />
        </div>
    </UPageHero>
    <USeparator :ui="{
        border:'dark:border-avocado-300 light:border-beige-300'
    }"/>
    <div orientation="horizontal" class="flex flex-row rounded-none mx-auto max-w-(--ui-container) justify-between py-5  mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 sm:gap-y-24 ">
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
    </div>
    <USeparator :ui="{
        border:'dark:border-avocado-300 light:border-beige-300'
    }"/>
  </div>
</template>
