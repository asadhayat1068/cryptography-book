"use client";
import { useState } from "react";
import { ScytaleCipher } from "./ScytaleCipher";
const ScytaleCipherPage = () => {
  const [key, setKey] = useState(1);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encryptText = () => {
    setOutput(ScytaleCipher.encipher(input, key));
  };

  const decryptText = () => {
    setOutput(ScytaleCipher.decipher(input, key));
  };

  return (
    <div className="container mx-auto mt-2">
      <h1 className="my-12 text-center text-2xl font-bold">Scytale Cipher</h1>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row items-center space-x-4">
          <label htmlFor="shift">Key</label>
          <input
            className="border-width-1 max-w-2xl border-spacing-2 rounded-md border border-solid border-gray-500 p-2"
            id="key"
            type="number"
            value={key}
            onChange={(e) => setKey(parseInt(e.target.value) || 0)}
          />
        </div>
        <div className="flex flex-row items-center space-x-4">
          <label htmlFor="input">Input</label>
          <input
            className="border-width-1 w-full border-spacing-2 rounded-md border border-solid border-gray-500 p-2"
            id="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <hr />
        <div className="flex flex-row items-center justify-center space-x-4">
          <button
            onClick={encryptText}
            className="border-width-1 border-spacing-2 rounded-md border border-solid border-green-500 bg-green-400 p-2"
          >
            Encipher
          </button>
          <button
            onClick={decryptText}
            className="border-width-1 border-spacing-2 rounded-md border border-solid border-red-500 bg-red-400 p-2"
          >
            Decipher
          </button>
        </div>
        <hr />
        <div className="flex flex-row items-center space-x-4">
          <label htmlFor="output">Output</label>
          <input
            className="border-width-1 w-full border-spacing-2 rounded-md border border-solid border-gray-500 p-2"
            id="output"
            type="text"
            value={output}
            disabled={true}
            // onChange={(e) => setOutput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ScytaleCipherPage;
