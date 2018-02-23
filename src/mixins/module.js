import eventBus from '@/eventBus'

let _uid = 0

export default {
    data() {
        return {
            uid: null,
            list: []
        }
    },
    methods: {
        getUid() {
            this.uid = _uid
            _uid++
        },
        bindDrop(fn = () => {}) {
            if (!this._dropHandler) {
                this._dropHandler = (data) => {
                    fn.call(this, data)
                }
            }
            eventBus.$on('drop', this._dropHandler)
        }
    },
    created() {
        this.getUid()
    },
    mounted() {
        // 绑定drop结束时间
        this.bindDrop(({ moduleKey, target, sibling }) => {
            // TODO: 处理相同moduleKey的拖放
            if (target === this.$refs.container) {
                let children = target.children

                let index = -1
                if (children && children.length && sibling) {
                    index = Array.prototype.indexOf.call(children, sibling)
                }
                if (index === -1) {
                    this.list.push({
                        name: moduleKey
                    })
                } else {
                    this.list.splice(index, 0, {
                        name: moduleKey
                    })
                }
            }
        })
        // 处理模块的点击事件
        this.$el.addEventListener('click', (e) => {
            if (this.$options.name === 'Preview') return
            e.stopPropagation()
            this.$emit('click', this.uid)
            // this.$store.dispatch('setEditingOne', this)
            eventBus.$emit('setEditingOne', this)
        })
    },
    beforeDestroy() {
        if (this._dropHandler) {
            eventBus.$off('drop', this._dropHandler)
        }
    }
}
