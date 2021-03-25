import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0}
    this.imageRef = React.createRef(); // React Ref system to access element info without the need of document selectors
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans) // Awaits Image loads so callback can access info
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1)   // Grid row heigth, up rounded to comport image 
    this.setState({ spans })
  }

	render() {
		const { description, urls } = this.props.image;
		return (
			<div style={{gridRowEnd: `span ${this.state.spans}`}} >
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}

export default ImageCard;
