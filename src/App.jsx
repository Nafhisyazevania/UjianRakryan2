import React from "react";
// impor page component
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Homepage from "./pages/homepage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Homepage />
      <FooterComponent />
    </div>
  );
}

export default App;
