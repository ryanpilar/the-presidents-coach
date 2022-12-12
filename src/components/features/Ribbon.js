import React from "react";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Ribbon({ name, changeGlow, bgColor, borderColor, icon, toggle }) {
  return (
    <>
      <div 
        
        className="ribbon"
        style={{
            fontSize: toggle ? '1.75rem' : '1rem',
            color: toggle ? '#ffe333' : 'grey',
            
            position: 'relative',
            minWidth: '15%',
            height: '15%',
            margin: '1.5rem 1rem 0 0',
            overflow: 'hidden',
            position: 'absolute',
            top: '0px',
            right: '0px',
            cursor: 'pointer',
            zIndex: '100',
            // border: '2px solid yellow'
            
        }}
        >
        <div
          // name={name}
          onClick={ (e) => { 
            e.preventDefault()
            changeGlow(name)
          }}
        >
          {icon}
        </div>
        







            {/* <span style={{
                position: "absolute",
                display: "block",
                width: "260px",
                padding: "3px 0",
                backgroundColor: `${bgColor}`,
                boxShadow: "0 5px 10px rgba(0,0,0,.2)",
                color: '#fff',
                border: `2px solid ${borderColor}`,
                // font: '700 18px/1 'Lato', sans-serif',
                textShadow: '0 1px 1px rgba(0,0,0,.2)',
                textTransform: 'uppercase',
                textAlign: 'center',
                fontSize: '.8rem',
                left: '-25px',
                top: '30px',
                transform: 'rotate(45deg)',
            }}
            > */}
                {/* <i class="fa-star"></i> */}
                {/* <i className="ni ni-check-bold"></i>  */}
                {/* <i className="fas fa-heart"></i> */}
                
                {/* Selected */}
            {/* </span> */}
        </div>
    </>
  );
}

export default Ribbon;
