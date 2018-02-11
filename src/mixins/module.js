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
            // console.log('preview bind drop')
            // console.log(data)
            if (target === this.$refs.container) {
                this.list.push({
                    name: moduleKey
                })
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
            event.$off('drop', this._dropHandler)
        }
    }
}
