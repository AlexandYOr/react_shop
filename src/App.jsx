import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Header from './components/Header'
import Footer from "./components/Footer"
import Shop from "./components/Shop"
import { ContextProvider } from "./context";

function App() {
  return (
    <ChakraProvider>
      <div className="app">
        <Header />
        <ContextProvider>
          <Shop />
        </ContextProvider>
        <Footer />
      </div>
    </ChakraProvider>
  )

}

export default App

