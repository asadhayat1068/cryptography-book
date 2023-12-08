"use client";
import { useState } from "react";
import { CeaserCipher } from "./CeaserCipher";
const CeaserCipherPage = () => {
  const [shift, setShift] = useState(0);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encryptText = () => {
    setOutput(CeaserCipher.encrypt(input, shift));
  };

  const decryptText = () => {
    setOutput(CeaserCipher.decrypt(input, shift));
  };

  return (
    <div className="container mx-auto mt-2">
      <h1 className="my-12 text-center text-2xl font-bold">Ceaser Cipher</h1>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row items-center space-x-4">
          <label htmlFor="shift">Shift</label>
          <input
            className="border-width-1 max-w-2xl border-spacing-2 rounded-md border border-solid border-gray-500 p-2"
            id="shift"
            type="number"
            value={shift}
            onChange={(e) => setShift(parseInt(e.target.value))}
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
            Encode
          </button>
          <button
            onClick={decryptText}
            className="border-width-1 border-spacing-2 rounded-md border border-solid border-red-500 bg-red-400 p-2"
          >
            Decode
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
            onChange={(e) => setOutput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CeaserCipherPage;
