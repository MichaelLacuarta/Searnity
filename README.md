# CampusMarket (Demo App)

This is a simple student marketplace demo.

## How to see the site (plain steps)

1. Open a terminal.
2. Run:

```bash
cd /home/team/shared/campus-market
npm install
npm run dev
```

3. Wait for Vite to print a URL like:

```text
Local: http://localhost:5173/
```

4. Open that **Local** URL in your browser.

That’s it — you should see the **CampusMarket login page**.

---

## What to click first (quick demo)

1. On Login: type any name, pick any school, click **Enter Marketplace**.
2. On Home: click any listing card.
3. On Listing Detail: review info, click **Contact Seller**.
4. Use bottom nav:
   - **Sell** → create listing form
   - **Saved** → saved items page
   - **Profile** → profile + logout

---

## If it doesn’t open

### 1) Port 5173 is busy
No problem. Vite will show a different **Local** URL (example: `http://localhost:5174/`).
Open the exact URL shown in the terminal.

### 2) `npm install` fails
Run:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### 3) Blank or old page
Hard refresh the browser (`Ctrl+Shift+R` or `Cmd+Shift+R`).
