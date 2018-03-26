const app = new Vue({
    el: "#app",
    template: `
    <div id="wrapper">
        <nav>
            <a href="index.html" class="navlink">Start</a>
            <a href="components.html" class="navlink">Components</a>
            <a href="#" class="navlink">Länk3</a>
            <a href="#" class="navlink">Länk4</a>
        </nav>
        <h2>4. Cool stuff med data-bindings</h2>
        <section v-for="friend in frender">
            <h3>{{friend.city}}</h3> 
            <h3>{{friend.age}}</h3> 
            <!--<button v-on:click="friend.age = friend.age + 1">+</button>-->
            <button v-on:click="incrementAge(friend)">+</button>
            <button v-on:click="decreaseAge(friend)">+</button>


        </section>
        

        <h2>{{Emil.first}}</h2>
        <h2>{{Emil.age}}</h2>
        <button v-on:click="Emil.age = Emil.age + 1;">+</button>
        <input v-model="Emil.first"/>
        <input v-model="friendObj.Emil.first"/>
        <em>{{friendObj.Emil.first}}</em>

        <h2>3. Emempel med directives (v-for):</h2>
        <ul><li v-for="friend in friends">{{friend}}</li></ul>
        <em>Hmm, hur göra likadant med endast textnoder...?</em>
        <h2>Emempel med directives (v-for):</h2>
        <ul><li v-for="objectFriend in friendObj">{{objectFriend.age + 10}}</li></ul>
        <em>Hmm, hur göra likadant med endast textnoder...?</em>
        
        <h1>1,2 Lite text med ett namn som är {{Emil.first}}</h1>

        <ul>
            <li>{{Emil.first}}</li>
            <li>{{emilFullName}}</li>
            <li>{{nicklasFullName}}</li>
            <li>{{Emil | allTheStuff}}</li>
            <li>{{Emil.first}} om ett år: {{Emil.age | ageInOneYear}}</li>            
        </ul>
    </div>
    `,
    methods: {
        incrementAge(friend) {
            friend.age = friend.age + 1;
        },
        decreaseAge(friend) {
            friend.age -= 1;
        }
    },
    data: {

        friends:["Bosse","Karl","Erdoan","Maria"],
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
        ],
        friendObj:{
            Emil: {
                first: "Emil",
                last: "Willbas",
                age: 36,
                city: "Nol"
            },
            Nicklas: {
                first: "Nicklas",
                last: "Petersson",
                age: 37,
                city: "Göteborg"
            }
        },

        Emil: {
            first: "Emil",
            last: "Willbas",
            age: 36,
            city: "Nol"
        },
        Nicklas: {
            first: "Nicklas",
            last: "Petersson",
            age: 37,
            city: "Göteborg"
        }
    },
    computed: {
        emilFullName() {
            return `${this.Emil.first} ${this.Emil.last}` 
        },
        nicklasFullName() {
            return `${this.Nicklas.first} ${this.Nicklas.last}` 
        }
    },
    filters: {
        ageInOneYear(age) {
            return age + 1;
        },
        fullName(value) {
            return `${value.first}, ${value.last}`;
        },

        allTheStuff(value) {
            return `${value.city} ${value.age} ${value.first} ${value.last}`;
        }
    }

})

