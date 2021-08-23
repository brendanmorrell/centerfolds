export default function handler(req, res) {
  console.log(`🚀 ~ capturing email ${JSON.stringify(req.body)}`)

  res.status(200).json({ success: true })
}
