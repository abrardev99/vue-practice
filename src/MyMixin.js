export const myMixin = {
    data() {
        return {
            amount: '2000'
        }
    },

    computed: {
        addingSign() {
            console.log(this.amount);
            return this.amount + '$'
        }
    },
}