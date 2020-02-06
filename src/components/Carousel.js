import React, {Component} from 'react';

class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleSlidesOnly" className="carousel slide container" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.pexels.com/photos/1420702/pexels-photo-1420702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Third slide"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;