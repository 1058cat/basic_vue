var app = new Vue ({
    el: '#app',
    data: {
        name: 'キマイラ',
        list: []
    },
    created: function(){
        axios.get('https://api.myjson.com/bins/9f1sq').then(function(response){
            this.list = response.data
        }.bind(this)).catch(function(e){
            console.log(e)
        })
    },
    methods: {
        doAdd: function(){
            var max = this.list.reduce((a,b) => {
                console.log(a);
                return a > b.id ? a : b.id
            }, 0)
            this.list.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
        },
        doAttack: function(index){
            this.list[index].hp -= 10;
            if (this.list[index].hp <= 0) {
                this.list.splice(index, 1);
            }
        }
    }
})