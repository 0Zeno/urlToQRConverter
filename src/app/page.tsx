"use client";
import { SendAPIRequest } from "@/api/sendAPIRequest";
import { useState } from "react";

export default function Home() {
  const url = document.getElementById("url")!
  const size = document.getElementById("size")!

  const [generated, setState] = useState(false);

  const qrGenerated = () => {
    setState(true);
  };

  return (
    <>
      <h1 className="font-bold text-center text-4xl pt-16">
        Generate a QR code
      </h1>
      <div className="place-items-center">
        <form>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="https://example.com"
            size={30}
            required
          />
          <input
            type="number"
            name="size of QR"
            id="size"
            placeholder="Size of image"
            defaultValue={256}
            size={30}
            required
            max="1024"
            min="256"
          />
        </form>
        <button
          className="border bg-blue-600 rounded border-blue-600 hover:bg-blue-500 p-1 font-medium"
          onClick={qrGenerated}
        >
          Generate
        </button>
      </div>
      {generated && (
        <div>
          <img src={SendAPIRequest(url.toString(), size.toString()).toString()} alt="QR code" />
        </div>
      )}
    </>
  );
}
