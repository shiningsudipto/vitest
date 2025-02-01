import { useState } from "react";

export function Form() {
  const [name, setName] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>
    </form>
  );
}
