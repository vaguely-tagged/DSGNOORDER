'use client'
import { useState } from "react"
import TopBar from "../Topbar"
import Drinks from "./Drinks"

export default function Menu() {

    const [drink, setDrink] = useState("hidden")
    const [snacks, setSnacks] = useState("hidden")
    const [addOn, setAddOn] = useState("hidden")

    const [drinkUnder, setDrinkUnder] = useState("")
    const [snacksUnder, setSnacksUnder] = useState("")
    const [addOnUnder, setAddOnUnder] = useState("")

    const [drinkBold, setDrinkBold] = useState("normal")
    const [snackBold, setSnackBold] = useState("normal")
    const [addOnBold, setAddOnBold] = useState("normal")

    //styles
    let drinkStyle = {
        fontSize: "15px",
        textDecoration: drinkUnder,
        cursor: "pointer",
        fontWeight: drinkBold
    }
    let snackStyle = {
        fontSize: "15px",
        textDecoration: snacksUnder,
        cursor: "pointer",
        fontWeight: snackBold
    }
    let addOnStyle = {
        fontSize: "15px",
        textDecoration: addOnUnder,
        cursor: "pointer",
        fontWeight: addOnBold
    }
    let gridStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        justifyItems: "center",
        cursor: "pointer"
    }

    const handleDrink = e => {

        setDrinkUnder("underline")
        setSnacksUnder("")
        setAddOnUnder("")

        setDrink("visible")
        setSnacks("hidden")
        setAddOn("hidden")

        setDrinkBold("bold")
        setSnackBold("normal")
        setAddOnBold("normal")
    }

    const handleSnack = e => {

        setDrinkUnder("")
        setSnacksUnder("underline")
        setAddOnUnder("")

        setDrink("hidden")
        setSnacks("visible")
        setAddOn("hidden")

        setDrinkBold("normal")
        setSnackBold("bold")
        setAddOnBold("normal")
    }

    const handleAddOn = e => {

        setDrinkUnder("")
        setSnacksUnder("")
        setAddOnUnder("underline")

        setDrink("hidden")
        setSnacks("hidden")
        setAddOn("visible")

        setDrinkBold("normal")
        setSnackBold("normal")
        setAddOnBold("bold")
    }

    return (
        <div>
            <TopBar></TopBar>

            <div style={gridStyle}>
   
                <div style={drinkStyle} onClick={handleDrink}>Drinks</div>
                <div style={snackStyle} onClick={handleSnack}>Snacks</div>
                <div style={addOnStyle} onClick={handleAddOn}>Add ons</div>
            </div>
            
            <Drinks visible={drink} />

        </div>
    )
}