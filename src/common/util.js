export function throttle(fn, time = 100) {
    let timer = null
    return function () {
        if (timer) return
        fn.apply(null, arguments)
        timer = setTimeout(() => {
            timer = null
        }, time)
    }
}

export function debounce(fn, time = 100) {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(null, arguments)
        }, time)
    }
}
