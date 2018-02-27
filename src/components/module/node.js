export default {
    name: 'mNode',
    props: {
        tagName: {
            type: String,
            default: 'div'
        },
        option: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    render(createElement) {
        const option = this.option
        let directives = []
        if (option.isDraggable) {
            directives.push({
                name: 'draggable',
                value: option.draggableOption || {}
            })
        }
        if (option.isDroppable) {
            directives.push({
                name: 'droppable',
                value: option.droppableOption || {}
            })
        }
        return createElement(this.tagName, {
            directives,
            'class': option.class || {},
            style: option.style || {},
            attrs: option.attrs || {},
            domProps: option.domProps || {}
        }, this.$slots.default)
    }
}
