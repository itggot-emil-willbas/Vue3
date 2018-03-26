Vue.component('friend',{
    filters: {

    },
    methods: {
        incrementAge(friend) {
            friend.age = friend.age + 1;
        },
        decreaseAge(friend) {
            friend.age -= 1;
        }
    },
    template: `
    <div>
        <section v-for="friend in frender">
            <h3>{{friend.city}}</h3> 
            <h3>{{friend.age}}</h3> 
            <!--<button v-on:click="friend.age = friend.age + 1">+</button>-->
            <button v-on:click="incrementAge(friend)">+</button>
            <button v-on:click="decreaseAge(friend)">+</button>
        </section>
    </div>
    `
});



const app = new Vue({
    el: "#app2",
    template: `
    <div id="wrapper">
        <nav>
            <a href="index.html" class="navlink">Start</a>
            <a href="components.html" class="navlink">Components</a>
            <a href="#" class="navlink">Länk3</a>
            <a href="#" class="navlink">Länk4</a>
        </nav>
        <h2>5. Components dude!</h2>
        
       
    </div>
    `,
    data: {
        frender:[
            {
                first: "Emil",
                last: "Willbas",
                age: 36,
                city: "Nol"
            },
            {
                first: "Nicklas",
                last: "Petersson",
                age: 37,
                city: "Göteborg"
            },
            {
                first: "Maria",
                last: "Willbas",
                age: 38,
                city: "Los Angeles"
            },
        ]
        
    }

})

