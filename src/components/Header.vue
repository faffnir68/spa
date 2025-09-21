<script setup>

</script>

<template>
    <header>
        <h1>My site</h1>
        <nav>
            <ul>
                <li><a href="/#home">Home</a></li>
                <li><a href="/#blog">Blog</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header {
        display: flex;
        padding: 2rem;
        color: white;
        background: #333;
        align-items: center;
        height: 100%;
        gap: 1.5rem;
        width: 100%;
    }
    header h1 {
        margin: 0;
        font-size: 3rem;
        /* flex-grow: 1; */
    }
    header nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 1.5rem;
        align-items: center;
        padding: 2rem;
    }
</style>