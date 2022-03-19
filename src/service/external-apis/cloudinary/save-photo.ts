import fs from "fs";
import { Buffer } from "buffer";
import axios from "axios";
import env from "react-dotenv";

import { DonationPhoto } from "../../../interfaces/donation-photo"

function arrayBufferToBase64( buffer: Buffer ) {
  var binary = '';
  var bytes = new Uint8Array( buffer );
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
  }
  return window.btoa( binary );
}

const savePhoto = async(photos: File[]): Promise<DonationPhoto[]> => {
  const cloudName = env.CLOUDINARY_CLOUD
  const url = env.CLOUDINARY_BASEURL.replace("CLOUD_NAME", cloudName)
  const apiKey = env.CLOUDINARY_KEY
  const presetName = env.CLOUDNARY_PRESET
  let filesSaved = [] as DonationPhoto[]

  Array.from(photos).forEach(async photo => {
    try{
      console.log(await photo.arrayBuffer())
      const photoBuffer = Buffer.from(await photo.arrayBuffer())
      const photoBase64 = arrayBufferToBase64(photoBuffer)
      const response = await axios.post(url,
      {
        file: `data:image/${photo.type};base64,${photoBase64}`,
        upload_preset: presetName,
        timestamp: Math.floor(new Date().getTime() / 1000),
        api_key: apiKey,
      },
      ) as DonationPhoto

      filesSaved.push({ asset_id: response.asset_id, public_id: response.public_id, url: response.url })
    }catch(err) {
      console.log(`Erro ao salvar imagem ${photo.name}`)
      console.log(err)
    }
  })

  return filesSaved
}

export default savePhoto
