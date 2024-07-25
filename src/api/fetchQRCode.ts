export async function fetchQRCode(url: string, size: number) {
  const getUrl = "https://qrapi.fly.dev/?url=" + url + "&size=" + size;
  try {
    return (await fetch(getUrl).then((res) => res.json())) as {
      message: string;
    };
  } catch (error) {
    return {
      message: "",
    };
  }
}
