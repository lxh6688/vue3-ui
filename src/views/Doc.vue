<template>
    <div>
        <Topnav />
        <div class="content">
            <h1>轱辘UI</h1>
            <h2>一个厉害的UI框架</h2>
            <aside>边栏</aside>
            <main>主内容</main>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: {
        Topnav
    }
}
</script>
