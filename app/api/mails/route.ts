import FormData from 'form-data'
import Mailgun from "mailgun.js"

const mg = new Mailgun()

type SendMailParams {

}

export async function POST(req: Request) {
    const  = await req.body


    return new Response(fileType, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}