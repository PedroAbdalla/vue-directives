<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'some text'"></p>
                <p v-highlight="'red'" v-html="'<strong>some text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background="'red'">Color THIS</p>
            </div>
        </div>
         <hr>
         <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-exemple:background.deleyed="'red'">Color THIS</p>
                <p v-local-highlight:background.deleyed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color THIS</p>
            </div>
        </div>

        <hr>
        <button v-customOn:click="clicked" class="btn btn-primary">Click Me</button>
        <hr>
        <div 
            style="width: 100px; height: 100px; background: lightgreen"
            v-customOn:mouseenter="mouseEnter"
            v-customOn:mouseleave="mouseLeave">
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    var delay = 0
                    if(binding.modifiers['deleyed']) {
                        delay = 3000
                    }
                    if(binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor
                        let secondColor = binding.value.secondColor
                        let currentColor = mainColor
                        setTimeout(()=>{
                            setInterval(()=>{
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
                                if(binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor
                                } else {
                                    el.style.color = currentColor
                                }
                            }, binding.value.delay)
                            
                        }, delay)
                    } else {
                        setTimeout(()=>{
                            if(binding.arg == 'background') {
                                el.style.backgroundColor = binding.value.mainColor
                            } else {
                                el.style.color = binding.value.mainColor
                            }
                        }, delay)
                    }
                }
            },
            customOn: {
                bind(el, binding) {
                    const type = binding.arg
                    const fn = binding.value
                    el.addEventListener(type, fn)
                }               
            },
        },
        methods: {
            clicked() {
                alert('Clicked')
            },
            mouseEnter() {
                console.log('mouse enter')
            },
            mouseLeave() {
                console.log('mouse leave')
            }
        }
    }
</script>

<style>

</style>
