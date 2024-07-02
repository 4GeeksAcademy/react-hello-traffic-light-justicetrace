import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Trafficlight } from "./Trafficlight";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Traffic Light</h1>
			<p>
				<Trafficlight />
			</p>
		</div>
	);
};

export default Home;
