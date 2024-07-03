export async function SendAPIRequest(url: string, size: string) {
    let bytes = await fetch("https://qrapi.fly.dev/?url=youtube.com&size=256")
    return "data:image/png;base64," + bytes
}