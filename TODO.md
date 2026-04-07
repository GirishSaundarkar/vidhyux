# Backend Deployment Fix TODO

## Plan Steps:
- [x] 1. Add root health endpoint to app.js ✅
- [ ] 2. Commit & push changes to repo linked to Render
  - `git add VidhyuxServer/src/app.js`
  - `git commit -m "Add root health endpoint for Render"`
  - `git push origin main` (or your branch)
- [ ] 3. Test https://vidhyux.onrender.com/ → {status: 'OK', ...}
- [ ] 4. Add Render Environment Variables (Dashboard > Environment):
  | Key | Value Example |
  |-----|---------------|
  | NODE_ENV | production |
  | MONGODB_URL | mongodb+srv://... (Atlas URI) |
  | JWT_SECRET | supersecretkey32charslong!!! |
  | SMTP_HOST | smtp.gmail.com |
  | SMTP_PORT | 587 |
  | SMTP_USERNAME | your@gmail.com |
  | SMTP_PASSWORD | app-password |
  | EMAIL_FROM | noreply@vidhyux.com |
- [ ] 5. Redeploy on Render, test https://vidhyux.onrender.com/v1/docs
- [ ] 6. MongoDB Atlas: Network Access > Add IP `0.0.0.0/0`
- [ ] Done ✅

Track progress & share Render logs after step 3.

