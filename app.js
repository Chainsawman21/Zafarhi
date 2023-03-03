let id = 1;
const app = {
    data() {
        return {
            title: 'Выберите категорию',
            text: '',
            game: '',
            cod: [
                { name: 'Price' },
                { name: 'Ghost' },
                { name: 'Soap' },
                { name: 'Gaz' },
            ],
            aot: [
                { name: 'Levi' },
                { name: 'Eren' },
                { name: 'Mikasa' },
                { name: 'Annie' },
            ],
            pubg: [
                { name: 'Sultan' },
                { name: 'Asal' },
                { name: 'Elyor' },
                { name: 'Sultan' },
            ]
        }
    },
    methods: {
        delUser(user) {
            this.cod = this.cod.filter(item => item.name != user.name)
            this.aot = this.aot.filter(item => item.name != user.name) 
            this.pubg = this.pubg.filter(item => item.name != user.name)
        },
        addUser() {
            if(this.game == 'cod' && this.text.length > 1) {
                this.cod.push({
                    name: this.text
                })
            } else if(this.game == 'aot' && this.text.length > 1) {
                this.aot.push({
                    name: this.text
                })     
            } else if(this.game == 'pubg' && this.text.length > 1) {
                this.pubg.push({
                    name: this.text
                })
            }
            this.text = ''
            this.game = ''
        },
    }
}

  Vue.createApp(app).mount('#app')
