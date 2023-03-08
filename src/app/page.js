//styles
let gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyContent: "center"
}

let itemMarginStyle = {
  marginBottom: "30px"
}

let imageSize = {
  width: "90%",
  height: "100%",
  backgroundColor: "black"
}

export default function Home() {
  return (
    <div>

      <div style={gridStyle}>
        <div>
          <button style={itemMarginStyle} className="button is-large is-fullwidth is-rounded is-link">Menu</button>
          <button style={itemMarginStyle} className="button is-large is-fullwidth is-rounded is-link">Preferences</button>
          <button style={itemMarginStyle} className="button is-large is-fullwidth is-rounded is-link">Search</button>
          <button className="button is-large is-fullwidth is-rounded is-link">Fav's</button>
        </div>
        <div style={imageSize}>hello</div>
      </div>

    </div>

  )
}
