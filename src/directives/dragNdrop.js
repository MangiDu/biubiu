const noop = () => {}

const draggable = {
    inserted(el, binding, vnode) {
        el.setAttribute('draggable', true)

        let onStart = (binding.value && binding.value.onStart) || noop
        let onEnd = (binding.value && binding.value.onEnd) || noop
        let onDrag = (binding.value && binding.value.onDrag) || noop

        el.addEventListener('dragstart', (e) => {
            onStart(e)
        })
        el.addEventListener('dragend', (e) => {
            onEnd(e)
        })
        el.addEventListener('drag', (e) => {
            onDrag(e)
        })
    },
    unbind(el, binding, vnode) {
        el.setAttribute('draggable', false)
        el.removeEventListener('dragstart')
        el.removeEventListener('dragend')
        el.removeEventListener('drag')
    }
}

const droppable = {
    inserted(el, binding, vnode) {
        let onOver = (binding.value && binding.value.onOver) || noop
        let onEnter = (binding.value && binding.value.onEnter) || noop
        let onLeave = (binding.value && binding.value.onLeave) || noop
        let onDrop = (binding.value && binding.value.onDrop) || noop

        el.addEventListener('dragover', (e) => {
            e.preventDefault()
            onOver(e)
        })
        el.addEventListener('dragenter', (e) => {
            e.preventDefault()
            onEnter(e)
        })
        el.addEventListener('dragleave', (e) => {
            e.preventDefault()
            onLeave(e)
        })
        el.addEventListener('drop', (e) => {
            e.preventDefault()
            onDrop(e)
        })
    },
    unbind(el, binding, vnode) {
        el.removeEventListener('dragover')
        el.removeEventListener('dragenter')
        el.removeEventListener('dragleave')
        el.removeEventListener('drop')
    }
}

export default {
    draggable,
    droppable
}
