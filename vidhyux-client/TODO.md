# Fix PDF Generation in /api/pdf
 [x] 2. Edit app/api/pdf/route.ts: Replace page.goto/evaluate with page.setContent(html populated from formData), fix template, robust error handling
- [x] 3. Test locally: npm run dev, generate PDF from quotation page (downloads but PDF spans multiple pages vs preview single page)
- [ ] 4. Improve client-side error logging in quotation/page.tsx (optional)
- [ ] 5. Handle Vercel deps if needed (puppeteer-core + chromium)
- [x] 6. Verify PDF matches preview UI
- [ ] 7. Complete task

## Steps:
- [x] 1. Check package.json for Puppeteer deps
-