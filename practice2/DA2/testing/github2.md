# What is GitHub?

GitHub is a cloud-based platform used for version control and collaborative software development. It uses Git, a distributed version control system, to track changes in code and allow multiple developers to work together on projects.

## Key Features

- **Version Control**: Track all changes made to code over time
- **Collaboration**: Multiple developers can work on the same project
- **Pull Requests**: Review and merge code changes
- **Issues**: Track bugs, feature requests, and tasks
- **Branching**: Create isolated copies of code to work on features

## Example

### Scenario: Building a Web Application

1. **Create a Repository**: Developer A creates a GitHub repository for a web app project
   ```
   Repository: my-web-app
   ```

2. **Clone the Repository**: Developer B clones it to their local machine
   ```
   git clone https://github.com/developerA/my-web-app.git
   ```

3. **Create a Branch**: Developer B creates a feature branch
   ```
   git checkout -b feature/login-page
   ```

4. **Make Changes**: Developer B adds login functionality and commits
   ```
   git add .
   git commit -m "Add login page"
   ```

5. **Push and Create Pull Request**: Push changes and request to merge
   ```
   git push origin feature/login-page
   ```

6. **Code Review**: Developer A reviews the changes on GitHub and approves

7. **Merge**: The feature branch is merged into the main branch

This workflow allows teams to collaborate safely while maintaining code quality and history.
