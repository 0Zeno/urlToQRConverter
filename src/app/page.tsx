import { fetchQRCode } from "@/api/fetchQRCode";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default async function Home() {
  let url = "zenoleonardi.no";
  let size = 256;
  const bytes = await fetchQRCode(url, size);
  const image = "data:image/png;base64, " + bytes;

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader className="text-3xl font-semibold pb-4 text-center">
          QR kode generator
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border bg-card text-card-foreground shadow p-4 w-[300px]">
            <img id="qrCode" src={image} alt="image" />
          </div>
          <div className="flex flex-col pt-4">
            <form >
              <Input
                type="url"
                className="shadow py-2 px-3 mb-3"
                id="url"
                placeholder="http://example.com"
                required
              ></Input>
              <Input
                type="number"
                className="shadow py-2 px-3 mb-3 "
                id="size"
                placeholder="256"
                min={64}
                max={1028}
                defaultValue={256}
              ></Input>
              <Button type="submit">Generate</Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
