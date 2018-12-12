let blogApp = {
    title: 'Titre de mon blog',
    description: 'un petit descriptif qui apparaitra au dessus des articles ?',
    author: 'patrick',
    articles: [
        {
            title: "Titre",
            subtitle: "sous titre",
            author: "Jean-Louis",
            date: Date(""),
            nbview: 2,
            nbcomment: 5
        },
        {
            title: "mon article",
            subtitle: "sous titre",
            author: "Jean-Louis",
            date: Date(""),
            nbview: 2,
            nbcomment: 5
        }]
}

let app = new Vue({
    el: '#blog',
    data: {
        ...blogApp
    },
    methods: {

    }
})