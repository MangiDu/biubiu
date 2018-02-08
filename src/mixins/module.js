import eventBus from '@/eventBus'

let _uid = 0

export default {
    data() {
        return {
            uid: null
        }
    },
    methods: {
        getUid() {
            this.uid = _uid
            _uid++
        }
    },
    created() {
        this.getUid()
    },
    mounted() {
        eventBus.$on('drop:finished', (data) => {
            console.log(this.$el)
            console.log(data)
            console.log('===')
        })
    }
}
