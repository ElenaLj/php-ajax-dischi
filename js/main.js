const app = new Vue({
    el: "#root",
    data: {
        database: []
    },
    methods: {},
    created() {
        axios.get("http://localhost:8888/php-ajax-dischi/database.php")
        .then( (response) => {
            this.database = response.data;
        });
    }
});