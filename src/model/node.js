let nId = 0

// import store from '@/store'

class Node {
    constructor(tagName = 'div', option = {}) {
        this.tagName = tagName
        this.option = option
        this.children = []
        this._nId = nId++
        if (this.option.domProps) {
            this.option.domProps.innerHTML = `${this._nId}`
        }
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
        let _nId = this._nId
        if (option.isDraggable) {
            let that = this
            option.draggableOption = {
                onStart: (function(_id) {
                    return (e) => {
                        console.log(_id)
                    }
                })(this._nId),
                onEnd(e) {
                    console.log(_nId)
                    console.log('on end')
                }
            }
        }
        if (option.isDroppable) {
            option.droppableOption = {
                onOver(e) {
                    e.preventDefault()
                    console.log('on over')
                },
                onDrop(e) {
                    e.preventDefault()
                    console.log(_nId)
                    console.log('on drop')
                }
            }
        }
    }
}

export default Node
