import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousal from '../components/Carousal';

export default function Home() {
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:3000/api/foodData", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();
            setFoodCat(data[0]); // Assuming data[0] contains categories
            setFoodItem(data[1]); // Assuming data[1] contains food items
            console.log(data[0], data[1]);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <div><Navbar /></div>
            <div><Carousal /></div>
            <div className='m-3'>
                {/* You can map foodCat and foodItem here to display data dynamically */}
                <div><Card /></div>
            </div>
            <div><Footer /></div>
        </div>
    );
}
