<template >
    <div class="dark:bg-avocado-800 light:bg-beige-300 rounded-xl ">
        <div class="dark:bg-avocado-700 rounded-xl rounded-b  flex justify-center">
            <p>
                {{ header }}
            </p>
        </div>
        <p class="flex justify-center">
            {{ footer }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  header: string
  footer: string
}>()
</script>
