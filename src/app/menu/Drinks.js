import FoodElement from "./FoodElement"

export default function Drinks(props){

    let drinkStyle = {
        visibility: props.visible,
        display: "grid",
        justifyItems: "center",
        gridTemplateColumns: "1fr 1fr",
        width: "100%",
        height: "50vh",
        rowGap: "20px",
        marginTop: "40px",
        overflowY: "scroll"
    }

    return(
        <div style={drinkStyle}>
            <FoodElement/>
            <FoodElement/>
            <FoodElement/>
            <FoodElement/>
            <FoodElement/>
            <FoodElement/>
            <FoodElement/>
            <FoodElement/>
            <FoodElement/>
            <FoodElement/>
            <FoodElement/>
            <FoodElement/>
        </div>
    )
}