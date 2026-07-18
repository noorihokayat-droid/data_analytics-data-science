# What is GitHub

GitHub is a web-based platform for hosting Git repositories, collaboration, code review, issue tracking, CI/CD, and project management.
## Quick setup guide

1. Create a GitHub account
	- Visit https://github.com and sign up.

2. Install Git (local)
	- Windows: install Git for Windows (https://git-scm.com/download/win).
	- macOS: brew install git or download from https://git-scm.com.
	- Linux: use your distro package manager (e.g., apt, yum).

3. Configure Git locally
	- git config --global user.name "Your Name"
	- git config --global user.email "you@example.com"

4. Generate SSH key (recommended)
	- ssh-keygen -t ed25519 -C "you@example.com" (or rsa with -b 4096)
	- Add the public key (~/.ssh/id_ed25519.pub) to GitHub: Settings -> SSH and GPG keys -> New SSH key.

5. Create a repository
	- On GitHub: New -> Repository. Choose public/private, add README if desired.

6. Clone repository locally
	- git clone git@github.com:username/repo.git  (SSH) or
	- git clone https://github.com/username/repo.git  (HTTPS)

7. Common local workflow
	- git checkout -b feature-branch
	- make changes
	- git add .
	- git commit -m "Describe changes"
	- git push -u origin feature-branch

8. Pull requests and code review
	- Create a Pull Request (PR) on GitHub to merge branches, request reviewers, run checks, and merge once approved.

9. Additional tools
	- GitHub Desktop: GUI client for Git (Windows/macOS).
	- GitHub CLI (gh): command-line integration (https://cli.github.com).
	- Continuous Integration: GitHub Actions for automated CI/CD.

10. Security and settings
	- Enable two-factor authentication (2FA) in Settings -> Security.
	- Manage collaborators, teams, access permissions in repository and organization settings.

11. Learning resources
	- GitHub Docs: https://docs.github.com
	- Git handbook: https://guides.github.com/introduction/git-handbook/

This is a concise setup; follow links above for detailed, platform-specific steps.

```
