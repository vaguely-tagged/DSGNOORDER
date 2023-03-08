import TopBar from "./Topbar"

//styles
let gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "100%",
  justifyItems: "center"
}

let itemMarginStyle = {
  marginBottom: "50px"
}

let imageSize = {
  width: "90%",
  height: "100%",
  backgroundColor: "black"
}


export default function Home() {
  return (
    <div>
      <TopBar></TopBar>

      <div style={gridStyle}>

        <div style={{width: "70%"}}>
          <button style={itemMarginStyle} className="button is-large is-fullwidth is-rounded is-link">Menu</button>
          <button style={itemMarginStyle} className="button is-large is-fullwidth is-rounded is-link">Preferences</button>
          <button style={itemMarginStyle} className="button is-large is-fullwidth is-rounded is-link">Search</button>
          <button className="button is-large is-fullwidth is-rounded is-link">Fav's</button>
        </div>

        <div style={imageSize}></div>
      </div>
 
    </div>
  )
}
