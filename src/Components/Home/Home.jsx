import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import './home.css';
import pic1 from "../../../src/assets/img1.jpg";
import pic2 from "../../../src/assets/img2.jpg";
import pic3 from "../../../src/assets/img3.jpg";
import pic4 from "../../../src/assets/img4.jpg";
import pic5 from "../../../src/assets/img5.jpg";
import pic6 from "../../../src/assets/img6.jpg";
export default function Home() {
    return (
        <div className='home'>
            <h2 className='home1'>This is Home</h2>
            <div className='gridTemplate'>
            <div className='grid'>
                <img src={pic1} alt="" />
            </div>
            <div className='grid'>
                <img src={pic2} alt="" />
            </div>
            <div className='grid'>
                <img src={pic3} alt="" />
            </div>
            <div className='grid'>
                <img src={pic4} alt="" />
            </div>
            <div className='grid'>
                <img src={pic5} alt="" />
            </div>
            <div className='grid'>
                <img src={pic6} alt="" />
            </div>
           
            </div>
            
            
        </div>
    )
}
