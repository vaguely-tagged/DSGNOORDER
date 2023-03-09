export default function FoodElement(props){

    let cardStyle = {
        width: "300px",
        height: "150px",
    }

    let blockStyle = {
        width: "125px",
        height: "125px",
        backgroundColor: "blue",
        // marginRight: "5px"
    }

    let boxStyle = {
        display: "flex",
        gap: "20px"
    }

    let foodTextStyle = {
    }
    
    return(
        <div style={cardStyle}>

            <div style={boxStyle}>
                <div style={blockStyle}></div>
                <div style={foodTextStyle}>Food Element Here</div>
            </div>
        </div>
    )
}