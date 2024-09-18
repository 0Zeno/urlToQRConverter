"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

async function fetchQR(url: string, size: number) {
  try {
    const resp = await fetch(
      "https://qrapi.fly.dev/?url=" + url + "&size=" + size
    );
    const text = await resp.text();
    return text;
  } catch (error) {
    return "";
  }
}

export default function Home() {
  const [qrData, setData] = useState("");
  const [url, setUrl] = useState("");
  const [size, setSize] = useState(256);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const qrData = await fetchQR(url, size);
    const imageData = `data:image/png;base64,${qrData.slice(
      1,
      qrData.length - 1
    )}`;
    console.log(imageData);
    setData(imageData);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <Card className="w-[350px]">
          <CardHeader className="text-3xl font-semibold pb-4 text-center">
            QR kode generator
          </CardHeader>
          <CardContent>
            <div className="h-72 rounded-lg border bg-card text-card-foreground shadow p-4 ">
              {qrData && (
                <div
                  style={{ backgroundImage: qrData, height: 100, width: 100 }}
                >
                  <Image
                    width={size || 64}
                    height={size || 64}
                    id="qrCode"
                    src={qrData}
                    alt="image"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col pt-4">
              <form onSubmit={handleSubmit}>
                <Input
                  value={url}
                  type="url"
                  id="url"
                  className="shadow py-2 px-3 mb-3"
                  placeholder="https://example.com"
                  onChange={(e) => setUrl(e.target.value)}
                  required
                ></Input>
                <Input
                  value={size}
                  type="number"
                  id="size"
                  className="shadow py-2 px-3 mb-3 "
                  placeholder="256"
                  onChange={(e) => setSize(e.target.valueAsNumber)}
                  min={64}
                  max={1028}
                ></Input>
                <Button className="shadow" type="submit">
                  Generate
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
