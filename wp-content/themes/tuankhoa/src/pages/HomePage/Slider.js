import React, { Component } from 'react';

class Slider extends Component {
    render() {
        const sliderStyle = {
            top: '60%',
            left: '30%',
        };
        return (
            <div className="main-slider">
                <div id="slider">

                    <div className="ls-slide" data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
                        <img src="images/slider-1-1600x800.jpg" className="ls-bg" alt="" />

                        <div className="slider-content ls-l" style={sliderStyle} data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                            <a className="btn" href="#">TRAVEL</a>
                            <h3 className="title"><b>Travel, Love, Live</b></h3>
                            <h6>29 October, 2017</h6>
                        </div>

                    </div>

                    <div className="ls-slide" data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
                        <img src="images/slider-2-1600x800.jpg" className="ls-bg" alt="" />

                        <div className="slider-content ls-l" style={sliderStyle} data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                            <a className="btn" href="#">TRAVEL</a>
                            <h3 className="title"><b>Travel, Love, Live</b></h3>
                            <h6>29 October, 2017</h6>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Slider;