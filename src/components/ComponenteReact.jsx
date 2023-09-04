import { useState } from "react";

export default function ComponenteReact() {
  const [cliente, setCliente] = useState("Abraham");
  console.log("cliente y servidor");
  return <div>{cliente}</div>;
}
