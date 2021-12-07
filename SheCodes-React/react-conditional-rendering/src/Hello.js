import React from "react";

export default function Hello(props) {
  if (props.language === "French") {
    return <h2>Bonjour</h2>;
  } else {
    if (props.language === "Spanish") {
      return <h2>Hola</h2>;
    } else {
      return <h2>Hello</h2>;
    }
  }
}
