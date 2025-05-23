let appNote = {
    data() {
        return {
            title: 'Поділіться враженням...',
            note: '',
            notesArr: [],
            pidkazka: 'Ваш відгук'
        }
    },
    methods: {
        addNote() {
            if (this.note != '') {
                this.notesArr.push(this.note);
                localStorage.setItem('toDoList',JSON.stringify(this.notesArr))
                    this.note = '';
            }
            console.log(this.notesArr);
        },
        DelNote(i){
this.notesArr.splice(i,1);
localStorage.setItem('toDoList',JSON.stringify(this.notesArr))
        }
    },
    mounted() {
        if (localStorage.getItem('toDoList') != null) {
            this.notesArr = JSON.parse(localStorage.getItem('toDoList'));
        }
    }
}

Vue.createApp(appNote).mount('#vue-app')