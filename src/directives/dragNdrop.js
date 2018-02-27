const noop = () => {}

const draggable = {
    inserted(el, binding, vnode) {
        el.setAttribute('draggable', true)

        let onStart = (binding.value && binding.value.onStart) || noop
        let onEnd = (binding.value && binding.value.onEnd) || noop
        let onDrag = (binding.value && binding.value.onDrag) || noop

        el.addEventListener('dragstart', onStart)
        el.addEventListener('dragend', onEnd)
        el.addEventListener('drag', onDrag)
    },
    unbind(el, binding, vnode) {
        let onStart = (binding.value && binding.value.onStart) || noop
        let onEnd = (binding.value && binding.value.onEnd) || noop
        let onDrag = (binding.value && binding.value.onDrag) || noop

        el.setAttribute('draggable', false)
        el.removeEventListener('dragstart', onStart)
        el.removeEventListener('dragend', onEnd)
        el.removeEventListener('drag', onDrag)
    }
}

const droppable = {
    inserted(el, binding, vnode) {
        let onOver = (binding.value && binding.value.onOver) || noop
        let onEnter = (binding.value && binding.value.onEnter) || noop
        let onLeave = (binding.value && binding.value.onLeave) || noop
        let onDrop = (binding.value && binding.value.onDrop) || noop

        el.addEventListener('dragover', onOver)
        el.addEventListener('dragenter', onEnter)
        el.addEventListener('dragleave', onLeave)
        el.addEventListener('drop', onDrop)
    },
    unbind(el, binding, vnode) {
        let onOver = (binding.value && binding.value.onOver) || noop
        let onEnter = (binding.value && binding.value.onEnter) || noop
        let onLeave = (binding.value && binding.value.onLeave) || noop
        let onDrop = (binding.value && binding.value.onDrop) || noop

        el.removeEventListener('dragover', onOver)
        el.removeEventListener('dragenter', onEnter)
        el.removeEventListener('dragleave', onLeave)
        el.removeEventListener('drop', onDrop)
    }
}

export default {
    draggable,
    droppable
}
