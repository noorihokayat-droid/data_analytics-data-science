```markdown

```
$CURSOR$
# What is GitHub

GitHub is a web-based platform for hosting Git repositories, collaborating on code, tracking issues, and automating workflows. It provides features like pull requests, code review, project management, and CI/CD via GitHub Actions.

# Quick setup and examples

1) Install Git

Windows: download from https://git-scm.com and follow installer.
macOS: brew install git
Linux: sudo apt-get install git (or use distro package manager)

2) Configure Git (local machine)

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

3) Create a GitHub account

Go to https://github.com and sign up.

4) Create a repository

- On GitHub click New -> Repository. Choose name, description, public/private.

5) Clone repository locally

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

6) Basic Git workflow

```bash
# create or edit files
git add file.txt
git commit -m "Add file"
git push origin main
```

7) Branching and pull requests

```bash
git checkout -b feature/new-feature
# make changes
git add .
git commit -m "Implement feature"
git push -u origin feature/new-feature
```

- On GitHub open a Pull Request from feature/new-feature into main. Request review and merge when ready.

8) Working with remotes and SSH (optional)

# Generate SSH key
```bash
ssh-keygen -t ed25519 -C "you@example.com"
cat ~/.ssh/id_ed25519.pub
```
- Add the public key to GitHub Settings -> SSH and GPG keys.
- Clone using SSH: git clone git@github.com:your-username/your-repo.git

9) Example .gitignore (for Python)

```
# Byte-compiled
__pycache__/
*.py[cod]

# Virtual env
venv/
```

10) GitHub Actions: simple CI example (.github/workflows/ci.yml)

```yaml
name: CI
on: [push, pull_request]
jobs:
	build:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v3
			- name: Set up Python
				uses: actions/setup-python@v4
				with:
					python-version: '3.10'
			- name: Install
				run: pip install -r requirements.txt
			- name: Test
				run: pytest -q
```

11) Useful commands

- git status: show changes
- git log --oneline: concise history
- git diff: view changes
- git remote -v: show remotes

Resources:
- https://docs.github.com
- https://git-scm.com/book/en/v2

EOF
