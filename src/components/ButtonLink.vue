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
.btn-link{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}

section .btn-link{
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

section .btn-link p{
    text-align: center;

}

section .btn-link input{
    border: none;
    outline: none;
    background: none;
    box-shadow: none;
    appearance: none;
    color: white;

}
</style>
