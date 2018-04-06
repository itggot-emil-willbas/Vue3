
// Egentligen i en egen fil
Vue.component('friend-component',{
    props: ['friend'],
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
            <h3>{{friend.city}}</h3> 
            <h3>{{friend.age}}</h3> 
            <!--<button v-on:click="friend.age = friend.age + 1">+</button>-->
            <button v-on:click="incrementAge(friend)">+</button>
            <button v-on:click="decreaseAge(friend)">-</button>
    </div>
    `
});



const app = new Vue({
    el: "#app2",
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
        
    },
    template: `
    <div id="wrapper">
        <nav>
            <a href="index.html" class="navlink">Start</a>
            <a href="components.html" class="navlink">Components</a>
            <a href="#" class="navlink">Länk3</a>
            <a href="#" class="navlink">Länk4</a>
        </nav>
        <h2>5. Components dude!</h2>
        <friend-component v-for="item in frender" v-bind:friend="item" /> 
    </div>
    `

})

