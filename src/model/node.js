let nId = 0

class Node {
    constructor(tagName = 'div', option = {}) {
        this.tagName = tagName
        this.option = option
        this.children = []
        this._nId = nId++
        this.initDragNDrop()
    }
    addChild(childNode, index = 0) {
        // 添加子节点
        this.children.splice(index, 0, childNode)
    }
    setOption(option) {
        Object.assign(this.option, option)
    }
    initDragNDrop() {
        const option = this.option
        if (option.isDraggable) {
            option.draggableOption = {}
        }
        if (option.isDroppable) {
            option.droppableOption = {}
        }
    }
}

export default Node
