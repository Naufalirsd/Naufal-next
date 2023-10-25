// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.method)
  console.log(req.body);

  if (req.method === 'POST') {
    res.status(200).json({message: 'Hello ' + req.body.displayName});
  } else {
    res.status(404).json({error: true, message: 'method tidak diijinkan'})
  }
}
