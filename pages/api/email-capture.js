export default function handler(req, res) {
  console.log(`🚀 ~ capturing email ${JSON.stringify(req.body)}`)

  res.status(200).json({ success: true })
}

/* 

git init
git add *
git commit -a -m 'Initial commit'
git remote add origin git@github.com:brendanmorrell/centerfolds.git 
*/
