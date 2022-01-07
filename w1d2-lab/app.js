//Sample Receipts
const receipt1 = [
{
    person: 'Karolin',
    order: {
        main: 'Burrito',
        protein: 'Organic Tofu',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: [
            'Baby Bok Choy', 'Cucumber Kimchi'
        ],
        drink: 'Korchata',
        cost: 22
    },
    paid: false
}
]

const receipt2 = [{
    person: 'Jerrica',
    order: {
        main: 'Rice Bowl',
        protein: 'Ginger Soy Chix',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: [
            'Yuzu Pickled Sweet Pepper', 'Kale'
        ],
        drink: 'Korchata',
        cost: 19
    },
    paid: false
}]
const receipt3 = [{
    person: 'Matt',
    order: {
        main: 'Salad Bowl',
        protein: 'Organic Tofu',
        rice: 'none',
        sauce: "K'lla",
        toppings: [
            'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
        ],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20
    },
    paid: true
}]
console.table(receipt1)
console.table(receipt2)
console.table(receipt3)

// App Component
class App extends React.Component {
    state = {
        receipt1: receipt1,
        receipt2: receipt2,
        receipt3: receipt3
    }
    render() {
        return (
            // Korilla box
            <div className="receiptContainer">
                <h1 className="header">Korilla</h1>
                <div className='divContainer'>
                {/* Receipt One */}
                     {this.state.receipt1.map(item => {
                            return(
                                <div className="receiptOne">
                                    <h1 className="name">{item.person} </h1>
                                    <h3><span>Main: </span>{item.order.main}</h3>
                                    <h3><span>Protein: </span>{item.order.protein}</h3>
                                    <h3><span>Rice: </span>{item.order.rice}</h3>
                                    <h3><span>Sauce: </span>{item.order.sauce}</h3>
                                    <h3><span>Drink: </span>{item.order.drink}</h3>
                                    <h3><span>Cost: </span>{item.order.cost}</h3>
                                 
                                </div>
                            )
                        })
                    }
                {/* Receipt Two */}
                {this.state.receipt2.map(item => {
                            return(
                                <div className="receiptTwo">
                                    <h1 className="name">{item.person} </h1>
                                    <h3><span>Main: </span>{item.order.main}</h3>
                                    <h3><span>Protein: </span>{item.order.protein}</h3>
                                    <h3><span>Rice: </span>{item.order.rice}</h3>
                                    <h3><span>Sauce: </span>{item.order.sauce}</h3>
                                    <h3><span>Drink: </span>{item.order.drink}</h3>
                                    <h3><span>Cost: </span>{item.order.cost}</h3>
                                    
                                </div>
                            )
                        })
                    }
                    {/* Receipt Three */}
                    {this.state.receipt3.map(item => {
                            return(
                                <div className="receiptThree">
                                    <h1 className="name">{item.person} </h1>
                                    <h3><span>Main: </span>{item.order.main}</h3>
                                    <h3><span>Protein: </span>{item.order.protein}</h3>
                                    <h3><span>Rice: </span>{item.order.rice}</h3>
                                    <h3><span>Sauce: </span>{item.order.sauce}</h3>
                                    <h3><span>Drink: </span>{item.order.drink}</h3>
                                    <h3><span>Cost: </span>{item.order.cost}</h3>
                                    
                                </div>
                            )
                        })
                    }

</div>
            </div>
        )
    }
}

// Component for rendering the first receipt





ReactDOM.render(
    <App />,
    document.querySelector("#container")
)