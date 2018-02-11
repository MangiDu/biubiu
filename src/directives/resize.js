function throttle(fn, time = 100) {
    let timer = null
    return function() {
        if (timer) return
        fn.apply(null, arguments)
        timer = setTimeout(() => {
            timer = null
        }, time)
    }
}

function debounce(fn, time = 100) {
    let timer = null
    return function() {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(null, arguments)
        }, time)
    }
}

export default {
    inserted(el, binding, vnode) {
        let handler = el._handler = debounce((e) => {
            console.log(e)
        }, 500)
        // el.addEventListener('mouseenter', handler)
        el.addEventListener('mousemove', handler)
    },
    unbind(el, binding, vnode) {
        let handler = el._handler
        if (handler) {
            // el.removeEventListener('mouseenter', handler)
            el.removeEventListener('mousemove', handler)
        }
    }
}
