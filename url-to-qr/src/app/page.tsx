'use client'
import QRImage from "@/components/qrImage";
import { useState } from "react";

export default function Home() {
  const [generated, setState] = useState(false);
  const qrGenerated = () => {
    setState(true)
  }
  return (
    <>
      <h1 className="font-bold text-center text-4xl pt-16">Crate a QR code</h1>
      <div className="place-items-center">
        <form>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="https://example.com"
            pattern="https://.*"
            size={30}
            required
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
          <QRImage />
        </div>
      )}
    </>
  );
}


