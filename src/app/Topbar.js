export default function TopBar(){

    let lineStyle = {
        height: "15px",
        width: "100%",
        backgroundColor: "#D9D9D9",
        marginBottom: "20px",
        marginTop: "5px"
    }

    let layoutGrid = {
        display: "grid",
        gridTemplateRows: "1fr 1fr 1fr",
        marginBottom: "80px",
        gridArea: "overlay"
    }

    let circleStyle = {
        backgroundColor: "#717171",
        width: "115px",
        height: "115px",
        borderRadius: "50%",
        gridArea: "overlay",
        justifySelf: "center"
    }

    let overlayGrid = {
        display: "grid",
        gridTemplateAreas: '"overlay"',
        // justifyItems: "center"
    }

    return(
        <div style={overlayGrid}>
            <div style={layoutGrid}>
                <div style={lineStyle}></div>
                <div style={lineStyle}></div>
                <div style={lineStyle}></div>
            </div>

            <div style={circleStyle}></div>
        </div>
    )
}