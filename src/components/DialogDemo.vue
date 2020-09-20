<template>
<div>
    Dialog 示例
</div>
<Button @click="toggle">toggle</Button>
<Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
<div>hi</div>
<div>hi2</div>
</Dialog>
</template>

<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
    components: { Dialog, Button },
    setup() {
        const x = ref(false)
        const toggle = ()=>{
            x.value = !x.value
        }
        const f1 = () => {
            return false //阻止关闭
        }
        const f2 = () => {}
        return{
            x,
            toggle,f1,f2
        }
    }
}
</script>