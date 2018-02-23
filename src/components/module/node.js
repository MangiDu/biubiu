export default {
    name: 'mNode',
    props: ['tagName', 'option'],
    render(createElement) {
        return createElement(this.tagName, {
            ref: 'container',
            directives: [{
                name: 'drop-bag'
            }]
        }, [
            createElement('span', {
                domProps: {
                    innerHTML: this.option.content || 'default'
                }
            }),
            this.$slots.default
        ])
    }
}
