import TopBar from "../Topbar"

let titleStyle = {
    fontSize: "15px"
}

let gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyItems: "center"
}

export default function Menu(){


    return(
        <div>
            <TopBar></TopBar>

            <div style={gridStyle}>
                <div style={titleStyle}>Drinks</div>
                <div style={titleStyle}>Snacks</div>
                <div style={titleStyle}>Add ons</div>
            </div>
          
        </div>
    )
}