(() => {
    //set up vue instnce 
    const vm = new Vue({
        el : "#app", //it is the convention to call it app

        data : {
            message : "Welcome to your first Vue app!", //vue model is usuallt the javascript model that is showing what is on your page and the "view" is what is on your page
            
            targetURL : "http://google.ca",

            vuemessage : "Yay! you can haz vue!",

            anchorOff : true,

            deliciousFruit : [
                { name: "apple", flavour: "tasty"},
                { name: "strawberry", flavour: "sweet"},
                { name: "pineapple", flavour: "tangy"}
            ],

            hazVue : true //itll connect to the page and tell you something. bc its true, it should show up on your page
        },

        methods : {
            logFruit(e) {
                console.log(e.currentTarget);
            }
        }
    });
})();