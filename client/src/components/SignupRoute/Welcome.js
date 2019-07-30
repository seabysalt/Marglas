import React, { Component } from 'react';
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import ReactDOM from 'react-dom';
import $ from 'jquery';


export default class Welcome extends Component {

  componentDidMount() {
    $(document).ready(function() {
      var getProductHeight = $(".product.active").height();
    
      $(".products").css({
        height: getProductHeight
      });
    
      function calcProductHeight() {
        getProductHeight = $(".product.active").height();
    
        $(".products").css({
          height: getProductHeight
        });
      }
    
      function animateContentColor() {
        var getProductColor = $(".product.active").attr("product-color");
    
        $("body").css({
          background: getProductColor
        });
    
        $(".title").css({
          color: getProductColor
        });
    
        $(".btn").css({
          color: getProductColor
        });
      }
    
      var productItem = $(".product"),
        productCurrentItem = productItem.filter(".active");
    
      $("#next").on("click", function(e) {
        e.preventDefault();
    
        var nextItem = productCurrentItem.next();
    
        productCurrentItem.removeClass("active");
    
        if (nextItem.length) {
          productCurrentItem = nextItem.addClass("active");
        } else {
          productCurrentItem = productItem.first().addClass("active");
        }
    
        calcProductHeight();
        animateContentColor();
      });
    
      $("#prev").on("click", function(e) {
        e.preventDefault();
    
        var prevItem = productCurrentItem.prev();
    
        productCurrentItem.removeClass("active");
    
        if (prevItem.length) {
          productCurrentItem = prevItem.addClass("active");
        } else {
          productCurrentItem = productItem.last().addClass("active");
        }
    
        calcProductHeight();
        animateContentColor();
      });
    
      // Ripple
      $("[ripple]").on("click", function(e) {
        var rippleDiv = $('<div class="ripple" />'),
          rippleSize = 60,
          rippleOffset = $(this).offset(),
          rippleY = e.pageY - rippleOffset.top,
          rippleX = e.pageX - rippleOffset.left,
          ripple = $(".ripple");
    
        rippleDiv
          .css({
            top: rippleY - rippleSize / 2,
            left: rippleX - rippleSize / 2,
            background: $(this).attr("ripple-color")
          })
          .appendTo($(this));
    
        window.setTimeout(function() {
          rippleDiv.remove();
        }, 1900);
      });
    });
    
  }

  render() {
    return (
      <div id="welcome-slider">
<div className="card">
  <div className="products">
    <div className="product active" product-id="1" product-color="#D18B49">
      <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Stag.svg"/></div>
      <h1 className="title">The Marglas Moment</h1>
      <p className="description">Marglas makes you more happy, productive, creative, and capable of living, working, and loving a fulfilled life.</p>
    </div>
    <div className="product" product-id="2" product-color="#542F13">
      <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Bear.svg"/></div>
      <h1 className="title">The HERO Resources</h1>
      <p className="description">This app is based on qualitative research results related to psychological capital. With Marglas you strengthen your HERO resources - hope, efficiency, resilience & optimism - on a daily basis.</p>
    </div>
    <div className="product" product-id="3" product-color="#A5AAAE">
      <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Mouse.svg"/></div>
      <h1 className="title">Your Marglas Question</h1>
      <p className="description">Everyday, you will answer a question which lets you remember the little, positive things in life. Your answer is stored in your marglas. Every time  you are in need of some motivation or positive thoughts the marglas will pop up & spread the positivity.</p>
    </div>
    <div className="product" product-id="4" product-color="#ED8D1F">
      <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Fox.svg"/></div>
      <h1 className="title">Your Marglas Support</h1>
      <p className="description">Even better! With Marglas you can also support your friends, colleagues & family. Usually, when somebody gives us positive feedback, we tend to forget it pretty fast. Especially in the dark moments of our life. But not with Marglas as it adds & saves your compliments to their marglas.</p>
    </div>
    <div className="product" product-id="5" product-color="#C4C8CB">
      <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Rabbit.svg"/></div>
      <h1 className="title">Get start</h1>
      <p className="description">Start the journey to a more happy, productive & creative life!</p>
    </div>
  </div>
  <div className="footer"><a className="btn" id="prev" href="#" ripple="" ripple-color="#666666">Prev</a><a class="btn" id="next" href="#" ripple="" ripple-color="#666666">Next</a></div>
</div>
      </div>
    )
  }
}
