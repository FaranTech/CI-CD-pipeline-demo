# CI/CD Demo — Manual vs Non-Manual

Yeh demo React (Vite) project hai jisme **2 pipelines** already add ki gayi hain
`.github/workflows/` folder mein.

## Try karne ka tarika

1. Yeh project ek naye GitHub repo mein push karein:
   ```bash
   cd demo-react-app
   git init
   git add -A
   git commit -m "Initial commit with CI/CD demo"
   git branch -M main
   git remote add origin <aapka-repo-url>
   git push -u origin main
   ```
2. Repo ki **Settings → Pages** mein jaake source ko **GitHub Actions** set karein.
3. **Actions** tab pe jaake dekhein — dono workflows list honge, aap dekh sakte hain
   kaunsa chal raha hai (ek time pe ek hi active rakhein taake conflict na ho —
   niche note dekhein).

## 1) Manual Pipeline — `manual-ci-cd.yml`

- Har step (install, lint, test, build) khud command se likha gaya hai.
- Deploy step bhi **manual git commands** se likha gaya hai — koi ready-made
  "deploy action" use nahi ki. Yeh dikhata hai ke pipeline ke peeche asal mein
  kya ho raha hota hai.

## 2) Non-Manual (Automated) Pipeline — `auto-ci-cd.yml`

- Install/lint/test/build same hain.
- Lekin caching aur deploy ke liye **ready-made GitHub Actions** use ki gayi
  hain (`actions/setup-node` ka cache option, `actions/upload-pages-artifact`,
  `actions/deploy-pages`) — koi raw git command nahi likhi.
- Zyada tools professional projects mein isi tarah kaam karte hain — ready
  actions plug karo, khud script likhne ki zaroorat nahi.

## Note

Dono workflows same branch (`main`) pe trigger hote hain — real project mein
aap in dono ko ek sath enable nahi karenge (ya to manual istemal karein, ya
automated). Yahan sirf comparison ke liye dono files rakhi gayi hain.
