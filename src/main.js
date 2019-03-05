import Vue from 'vue'
import App from './App.vue'
import { setTimeout } from 'timers';

Vue.directive('highlight', {
    bind(el, binding, vnode) {
        if(binding.arg == 'background') {
            el.style.backgroundColor = binding.value
        } else {
            el.style.color = binding.value
        }
    }
}) 

Vue.directive('exemple', {
    bind(el, binding, vnode) {
        var delay = 0
        if(binding.modifiers['deleyed']) {
            delay = 3000
        }

        setTimeout(()=>{
            if(binding.arg == 'background') {
                el.style.backgroundColor = binding.value
            } else {
                el.style.color = binding.value
            }
        }, delay)
        
    }
}) 

new Vue({
    el: '#app',
    render: h => h(App)
})
