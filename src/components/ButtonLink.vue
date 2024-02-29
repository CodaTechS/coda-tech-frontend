<template>
    <a :href="link" class="btn-link">{{ text }}</a>
</template>

<script>
export default {
    name: 'ButtonLink',
    props: {
        link: String,
        text: String
    }
};
</script>
