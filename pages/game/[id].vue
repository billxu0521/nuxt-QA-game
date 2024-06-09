<template>
    <client-only>
        <div class="flex">
            Game ID: {{ id }}
        </div>
    </client-only>
</template>

<script setup lang="ts">

const route = useRoute()

const id = route.params.id;

useHead({
    title: `Game ${id}`,
});

</script>