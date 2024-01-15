import React from "react";
import'./People.css'
import Card from "./Card";
export default function People(){
return(
    <div className="app__body">

    
    <p>People you may know in Mumbai MetroPolitan Region</p>
    <div className="Cards">
    <Card name="Aditya A" disc="Dhanukar college" con="37"></Card>
    <Card name="Ram sharma" disc="IIT B CSE" con="6"></Card>
    <Card name="Arsh" disc="RCOE" con="57"></Card>
    <Card name="Omkar Partil" disc="D.Y.Patil" con="63"></Card>
    <Card name="Dhruv Shah" disc="Vartak" con="33"></Card>
    <Card name="Fareed sayed" disc="RCOE" con="32"></Card>
    <Card name="Manas Joshi" disc="MMK collge" con="17"></Card>
    </div>
  </div>
)
} 