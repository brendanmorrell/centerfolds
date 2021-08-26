import sailthruClient from 'sailthru-client'

const { SAILTHRU_API_KEY, SAILTHRU_API_SECRET } = process.env

const sailthru = sailthruClient.createSailthruClient(SAILTHRU_API_KEY, SAILTHRU_API_SECRET)

const sailthruApiPost = (action, data) =>
  new Promise((resolve, reject) => {
    sailthru.apiPost(action, data, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })

export default async function handler(req, res) {
  try {
    const { email } = JSON.parse(req.body)
    const { ok } = await sailthruApiPost('user', {
      id: email,
      lists: { 'Centerfolds Interest': 1 },
    })
    if (ok) {
      return res.status(200).json({ success: true })
    }
  } catch (error) {
    res.status(500).json({ success: false })
  }
}
