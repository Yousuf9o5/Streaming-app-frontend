import type { NextApiRequest, NextApiResponse } from 'next'
 import busboy from 'busboy'
import { info } from 'console'
import fs from 'fs'
type ResponseData = {
  message: string
}
function videoUpload(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const bb =  busboy({ headers: req.headers })
  bb.on('file',(_,file,info) =>{
    const filemname = info.filename;
    const filePath=`./videos/${filemname}`
    
    file.pipe(fs.createWriteStream(filePath))
  } )

}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
const method = req.method;

if (method === 'GET') {
 return res.status(200).json({ message: 'Hello from Next.js!' })

}  

if (method === 'POST') {
 return videoUpload(req, res);



}  
{
  // error medthod not allowed

  return res.status(405).json({ message: 'We only support GET and POST' })
  
}

}