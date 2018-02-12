import { throttle } from '@/common/util'

const HANDLER_GAP = 5

function isInRect(rect, {x, y}) {
    const isXIn = (x >= rect.x) && (x <= (rect.x + rect.width))
    const isYIn = (y >= rect.y) && (y <= (rect.y + rect.height))
    return isXIn && isYIn
}

function isHandlePlace(rect, {x, y}, position) {
    switch (position) {
    case 'bottom':
        const bottomY = rect.y + rect.height
        return (y >= (bottomY - HANDLER_GAP)) && (y <= bottomY)
    }
}

// TODO: a common & usual resize
export default {
    inserted(el, binding, vnode) {
        // let handlerPosition = binding.value
        let isBottomHandle = false
        let initPlace = null

        const moveHandler = el._moveHandler = throttle((e) => {
            const cursorP = {
                x: e.clientX,
                y: e.clientY
            }
            const rectObj = el.getBoundingClientRect()
            if (!initPlace) {
                // set style
                isBottomHandle = isInRect(rectObj, cursorP) && isHandlePlace(rectObj, cursorP, 'bottom')
                if (isBottomHandle) {
                    el.style.cursor = 'ns-resize'
                } else {
                    el.style.cursor = 'auto'
                }
            } else {
                // console.log(el)
                // el.style.height = `${rectObj.height + (cursorP.y - initPlace.y)}px`
                // console.log(cursorP.y - initPlace.y)
            }
        }, 50)

        const downHandler = el._downHandler = throttle((e) => {
            if (!isBottomHandle) return
            if (!initPlace) {
                initPlace = {
                    x: e.clientX,
                    y: e.clientY,
                    height: el.getBoundingClientRect().height
                }
            }
        })

        el.addEventListener('mousemove', moveHandler)
        el.addEventListener('mousedown', downHandler)
        window.addEventListener('mouseup', (e) => {
            if (initPlace) {
                el.style.height = `${initPlace.height + (e.clientY - initPlace.y)}px`
                initPlace = null
            }
        })
    },
    unbind(el, binding, vnode) {
        let moveHandler = el._moveHandler
        if (moveHandler) {
            // el.removeEventListener('mouseenter', handler)
            el.removeEventListener('mousemove', moveHandler)
        }
    }
}
