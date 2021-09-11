import React from "react";
import Info_cards from "./info_cards";
import Jumbotron from "./jumbotron";

const Body = () => {
	return (
		<div className="container">
			<Jumbotron />
			<Info_cards />
		</div>
	);
};

export default Body;
