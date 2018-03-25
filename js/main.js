const app = new Vue({
    el: "#app",
    template: `
    <div id="wrapper">
        <nav>
            <a href="#" class="navlink">Länk1</a>
            <a href="#" class="navlink">Länk2</a>
            <a href="#" class="navlink">Länk3</a>
            <a href="#" class="navlink">Länk4</a>
        </nav>
        <h1>Lite text med ett namn som är {{name}}</h1>

        <ul>
            <li>{{Emil.first}}</li>
            <li>{{emilFullName}}</li>
            <li>{{nicklasFullName}}</li>
            <li>{{Emil | allTheStuff}}</li>
            <li>{{Emil.first}} om ett år: {{Emil.age | ageInOneYear}}</li>
            
        </ul>
        
    </div>
    `,
    data: {
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

        allTheStuff(value) {
            return `${value.city} ${value.age} ${value.first} ${value.last}`;
        }
    }

})