import axios from 'axios'

export async function sendImage(img){
   return await axios.post("http://192.168.1.9:3333/stream", img)
}
  