import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from "react-router-dom";
import Home from '../../containers/Home';


export default class Welcome extends Component {


  componentDidMount(){
  this.counter = 1
  }
  

  componentDidUnMount() {
    document.getElementsByTagName("body").style.cssText = "background-color: #FFFFFF"
  
  };

  render() {
   
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
    
        $("#welcome-slider").css({
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

     
      $("#next").on("click", (e)=> {
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
    
    return (
      <div id="welcome-slider">
<div className="card">
  <div className="products">
    <div className="product active" product-id="1" product-color="#F5C732">
      <div className="thumbnail"><img src="/img/yellow.png"/></div>
      <h1 className="title">The Marglas Moment</h1>
      <p className="description">Marglas makes you more happy, productive, creative, and capable of living, working, and loving a fulfilled life.</p>
    </div>
    <div className="product" product-id="2" product-color="#29336E">
      <div className="thumbnail"><img src="/img/blue.png" style={{width: '30vw'}}/></div>
      <h1 className="title">The HERO Resources</h1>
      <p className="description">This app is based on qualitative research results related to psychological capital. With Marglas you strengthen your HERO resources - hope, efficiency, resilience & optimism - on a daily basis.</p>
    </div>
    <div className="product" product-id="3" product-color="#DE6322">
      <div className="thumbnail"><img src="/img/orange2.png"/></div>
      <h1 className="title">Answer & Shine</h1>
      <p className="description">Everyday, you will answer a question which lets you remember the little, positive things in life. Your answer is stored in your marglas. Every time, you are in need of some motivation or positive thoughts the marglas will pop up & spread the positivity.</p>
    </div>
    <div className="product" product-id="4" product-color="#22684F">
      <div className="thumbnail"><img src="/img/green.png"/></div>
      <h1 className="title">Fill up your friends marglas!</h1>
      <p className="description">Even better! With Marglas you can also support your friends, colleagues & family. Usually, when somebody gives us positive feedback, we tend to forget it pretty fast. Especially in the dark moments of our life. But not with Marglas as it adds & saves your compliments to their marglas.</p>
    </div>
    <div className="product" product-id="5" product-color="#BEDBF3">
      <div className="thumbnail"><img src="/img/marglas.png" style={{width: '35vw'}} /></div>
      <h1 className="title">Get started</h1>
      <p className="description">Start the journey to a more happy, productive & creative life!</p>
      <p><Link className="getStarted" to="/home" component={Home}>Start filling your marglas!</Link></p>
    </div>
  </div>
  { <div className="footer"><a className="btn" id="prev" href="#" ripple="" ripple-color="#666666">Prev</a><a class="btn" id="next" href="#" ripple="" ripple-color="#666666">Next</a></div>}
  
</div>
      </div>
    )
  }
}
