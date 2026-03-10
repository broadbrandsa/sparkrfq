# DEPLOYMENT

## GitHub Repository Setup

1. Create a new GitHub repo (private recommended)
2. From the project root:
   ```bash
   git init
   git add .
   git commit -m "Initial scaffold"
   git remote add origin https://github.com/[org]/spark-proposal.git
   git push -u origin main
   ```

## Vercel Project Setup

1. Go to [vercel.com](https://vercel.com) → New Project
2. Import the GitHub repository
3. Configure settings:

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Root Directory | `.` (project root) |
| Build Command | `pnpm build` |
| Output Directory | *(leave blank — Next.js default)* |
| Install Command | `pnpm install` |
| Node.js Version | 20.x |

4. Click Deploy

## Root Directory Rules

- The project root IS `spark-proposal/` — this is what Vercel should point to
- Do NOT set root directory to a subdirectory unless the repo contains a monorepo
- `vercel.json` is not required for standard Next.js deployments

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics Measurement ID | Optional |
| `CONTACT_EMAIL` | Email address for form submissions | Optional |

To add in Vercel: Project Settings → Environment Variables

## How to Redeploy

- **Automatic**: Every push to `main` triggers a new deployment
- **Manual**: Vercel dashboard → Deployments → Redeploy
- **Preview**: Every PR creates an isolated preview URL automatically

## Staging vs Production

| Environment | Branch | URL |
|-------------|--------|-----|
| Production | `main` | `your-project.vercel.app` |
| Preview | Any PR | `your-project-git-[branch].vercel.app` |

## Checklist Before Go-Live

- [ ] Custom domain configured (if required)
- [ ] Environment variables set
- [ ] Analytics enabled
- [ ] Form endpoint wired
- [ ] Final content reviewed and approved
- [ ] Build passes with 0 errors
- [ ] Mobile tested on real device
