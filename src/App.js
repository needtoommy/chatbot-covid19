import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import steps from "./steps";

class App extends Component {
  render() {
    const theme = {
      background: "#f5f8fb",
      fontFamily: "Helvetica Neue",
      headerBgColor: "#EF6C00",
      headerFontColor: "#fff",
      headerFontSize: "15px",
      botBubbleColor: "#EF6C00",
      botFontColor: "#fff",
      userBubbleColor: "#fff",
      userFontColor: "#4a4a4a",
    };

    return (
      <ThemeProvider theme={theme}>
        <ChatBot width={500} steps={steps} />
      </ThemeProvider>
    );
  }
}

export default App;
