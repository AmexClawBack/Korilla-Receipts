const productsList = [

    {
    
    "name": "allen wrench",
    
    "price": 2.99,
    
    "description": "handy tool"
    
    },
    
    {
    
    "name": "cornucopia",
    
    "price": 5.99,
    
    "description": "festive holiday decoration"
    
    },
    
    {
    
    "name": "banana",
    
    "price": 0.99,
    
    "description": "full of potassium"
    
    },
    
    {
    
    "name": "guillotine (cigar)",
    
    "price": 10.59,
    
    "description": "behead your stub"
    
    },
    
    {
    
    "name": "jack-o-lantern",
    
    "price": 3.99,
    
    "description": "spooky seasonal fun"
    
    },
    
    {
    
    "name": "doggie treat (box)",
    
    "price": 5.99,
    
    "description": "fido loves 'em"
    
    },
    
    {
    
    "name": "egg separator",
    
    "price": 3.99,
    
    "description": "it separates yolks from whites"
    
    },
    
    {
    
    "name": "LED lightbulb",
    
    "price": 6.55,
    
    "description": "It's super-efficient!"
    
    },
    
    {
    
    "name": "owl pellets",
    
    "price": 3.99,
    
    "description": "Don't ask what they used to be."
    
    },
    
    {
    
    "name": "flag",
    
    "price": 5.99,
    
    "description": "catches the breeze"
    
    },
    
    {
    
    "name": "hair brush",
    
    "price": 6.99,
    
    "description": "fine boar bristles"
    
    },
    
    {
    
    "name": "iridium (one gram)",
    
    "price": 19.36,
    
    "description": "corrosion-resistant metal"
    
    },
    
    {
    
    "name": "quark",
    
    "price": 0.01,
    
    "description": "Very small"
    
    },
    
    {
    
    "name": "turtleneck",
    
    "price": 19.99,
    
    "description": "available in black and slightly-darker black"
    
    },
    
    {
    
    "name": "kaleidoscope",
    
    "price": 8.25,
    
    "description": "tube with moving plastic pieces inside"
    
    },
    
    {
    
    "name": "mitt (leather)",
    
    "price": 15,
    
    "description": "regulation sized"
    
    },
    
    {
    
    "name": "nothing",
    
    "price": 10,
    
    "description": "Hey, if you pay us, we won't ask any questions."
    
    },
    
    {
    
    "name": "violin",
    
    "price": 2000,
    
    "description": "Talk about a JS fiddle..."
    
    },
    
    {
    
    "name": "yoyo",
    
    "price": 1,
    
    "description": "We had to pull some strings to get this one in."
    
    },
    
    {
    
    "name": "pincushion",
    
    "price": 1.99,
    
    "description": "You'll get 'stuck' on it"
    
    },
    
    ]
  console.table(productsList)
    
class App extends React.Component {
    // Old Syntax
    // constructor() {
    //     super()
    //     // We create our state by calling it in the constructor using this.state
    //     this.state = {
    //         products: productsList
    //     }
    // }

    // New Syntax
    state = {
        products: productsList,
        name: '',
        price: 0,
        description: 'Describe this item'
    }
    // Dont do it this way
    // handleChange(event) {
    //     console.log(event.target.value)
    //     this.state.value = event.target.value
    // }

    // Everytime we do something (type) inside the input, handleChange will be invoked.
    handleChange = (event) => {
        // console.log(event.target)
        // Dont update state directly, we will not see it update in the browser
        // this.state.value = event.target.value

        // Correct way of updating
        // event.target.id allows us to use the id we specified in the form to make our handleChange dynamic
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newItem = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        }
        console.log(newItem)

        this.setState({
            products: [newItem, ...this.state.products],
            name: '',
            price: 0,
            description: ''
        })
    }

    render() {
        // console.log("productsList", this.state.products)
        // return JSX
        return (
            <div>
                {/* <h1>Hi There</h1> */}
                {/* In JSX, we use map() to iterate over things.

                    When we use map, we dont need those extra parenthesis if we are only using one parameter.

                    You want to name your paramaters semantically.
                */}
                {/* <ul>
                    {
                        productsList.map(item => <li>{item.name}</li>)
                    }
                </ul> */}
                <div>
                    <h1>Big Time Shopping</h1>

                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='name'>Name:</label>
                        <input id='name' type='text' value={this.state.name} onChange={this.handleChange}/>

                        <label htmlFor='price'>Price:</label>
                        <input id='price' type='text' value={this.state.price} onChange={this.handleChange}/>

                        <label htmlFor='description'>Description:</label>
                        <input id='description' type='text' value={this.state.description} onChange={this.handleChange}/>

                        <input type='submit' />
                    </form>

                    <div>
                        <h2>Preview our new item</h2>
                        <h3>{this.state.name}</h3>
                        <h4>{this.state.price}</h4>
                        <h5>{this.state.description}</h5>
                    </div>
                    
                    <ul>
                    {
                        this.state.products.map(item => {
                            return(
                                <li>{item.name} {item.price}</li>
                            )
                        })
                    }
                    </ul>
                   
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)
    
    
    
    