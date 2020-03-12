import React from "react";
import ImprovedButton from "./MyButton";

function App() {
  return (
    <div>
      <ImprovedButton
        click={() => {
          window.location = "https://www.facebook.com";
        }}
      >
        my fb
      </ImprovedButton>
    </div>
  );
}

export default App;
