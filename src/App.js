import React, {Component} from "react";
import CardList from "./CardList";
import { cats } from "./Cats";
import SearchBox from "./SearchBox";
import "./App.css"
import Scroll from "./Scroll";





class App extends Component {
	constructor() {
		super()
	this.state = {
	cats: cats,
	searchfield: "" 
 	}
	}

	// For Json call
componentDidMount() {
	fetch("https://jsonplaceholder.typicode.com/users")
	.then(response => { return response.json()
	.then(users => this.setState({cats: cats}))
	})
}

	// Search function
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
		
	
	}

	render () {
		const filteredCats = this.state.cats.filter(cats => {
		return cats.name.toLowerCase().includes(this.state.searchfield.toLowerCase());	
		})
		if (this.state.cats.length === 0) {
			return <h1> The cat's are coming as fast as they can!</h1> 
		} else {
     return (
		<div className="tc">
		    <h1 classname="f2">Cats!</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
		    <CardList cats={filteredCats} />
		    </Scroll>
	    </div>
	);
 }

	}
}



export default App;