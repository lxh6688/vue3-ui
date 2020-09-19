<template>
    <div>导航栏 |
        <router-link to="/">Hong</router-link> |
        <router-link to="/xxx">Hong2</router-link>
    </div>
    <hr />
    <router-view />
</template>

<script>
export default {
    name: 'App',
}
</script>
