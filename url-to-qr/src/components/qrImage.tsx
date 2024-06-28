import { SendAPIRequest } from "@/api/sendAPIRequest"

export default function QRImage(){
    let image = "data:image/png;base64," + SendAPIRequest()
    return(
        <img src={image} alt="QR image" />
    )
}