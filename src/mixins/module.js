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
    }
}
