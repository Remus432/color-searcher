import { useState } from "react"
import { ColorDiv, ColorGrid } from "./StyledComponents"
import "./App.sass"

function App() {
  const [selectedColor, setColor] = useState("")

  const colors = ["red", "green", "red", "blue", "purple", "yellow", "brown", "purple", "cyan"]

  const updateColor = e => setColor(e.target.value)

  const filterColors = color => color.includes(selectedColor)

  const filteredColors = colors.filter(filterColors)

  return (
    <div className="App">
      <h1>You are selecting the color: <span className="selected-color" style={{ backgroundColor: selectedColor }}>{selectedColor}</span></h1>
      <input className="search-input" onInput={updateColor} type="text" />
      <ColorGrid>
        { filteredColors.map(color => <ColorDiv color={color} />) }
        { filteredColors.length === 0 && <p className="unavailable">The selected color is currently not avaialble.</p> }
      </ColorGrid>
    </div>
  );
}

export default App;