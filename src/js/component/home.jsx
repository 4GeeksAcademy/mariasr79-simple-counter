import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (

			<div className="text-center">
				<h1 className="text-center mt-5">"My Counter"</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working...
				</a>
				
			</div>
		);
	}
};


export default Home;
