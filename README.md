# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/9da88ec8-4520-443d-95fd-a9ae0379807d

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9da88ec8-4520-443d-95fd-a9ae0379807d) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/9da88ec8-4520-443d-95fd-a9ae0379807d) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Google Sheets order storage

Order data is sent from the product order form to a webhook URL defined in:

`NEXT_PUBLIC_GOOGLE_SHEETS_URL`

Recommended setup:

1. Open your target Google Sheet.
2. Go to `Extensions > Apps Script`.
3. Use `scripts/google-sheets-webhook.gs` and keep:
`SHEET_ID = "1z9j4qIZCEo8Oc8E_iuFb6oIi6t3ojiC_uDwK0tTw3iA"`
and `SHEET_NAME = "palmador commande"`.
4. Deploy as a web app (`Anyone with the link`).
5. Paste the deployment URL into `.env` as `NEXT_PUBLIC_GOOGLE_SHEETS_URL`.
