import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Header from './components/Header'
import Footer from "./components/Footer"
import Shop from "./components/Shop"

function App() {
  return (
      <ChakraProvider>
        <div className="app">
        <Header/>
        <Shop/>
        <Footer/>
        </div>
      </ChakraProvider>
  )

}

export default App

