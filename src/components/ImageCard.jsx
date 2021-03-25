import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef(); // React Ref system to access element info without the need of document selectors
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans) // Awaits Image loads to access Height
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight)
  }

	render() {
		const { description, urls } = this.props.image;
		return (
			<div>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}

export default ImageCard;
