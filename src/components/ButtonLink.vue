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

<style scoped>
template{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: white;
    background-color:var(--C09);
    border: none;
    border-radius: 5px;

}

a{
    text-align: center;

}

</style>
