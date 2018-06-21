import React from "react";

// React Scroll component to keep the search bar whilst scrolling down 
// list of cats
const Scroll = (props) => {
	return (
			<div style={{overflowY: "scroll", border: "1px solid black",
			 height: "800px"}} >
				{props.children}
			</div>

		)
};


export default Scroll