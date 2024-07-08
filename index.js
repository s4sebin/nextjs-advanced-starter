const inquirer = require("inquirer");
const { execSync } = require("child_process");

const questions = [
  {
    type: "list",
    name: "routing",
    message: "Choose your preferred routing:",
    choices: ["App Router", "Page Router"],
  },
  {
    type: "confirm",
    name: "i18n",
    message: "Do you want to include localization (i18n)?",
  },
  // Add more questions for other configurations (Jest, etc.)
];

inquirer.prompt(questions).then((answers) => {
  const { routing, i18n } = answers;

  // Create the Next.js project with options
  const command = `npx create-next-app .`;
  execSync(command, { stdio: "inherit" });

  // Add configuration files based on user choices
  if (routing === "App Router") {
    // Add App Router configuration (modify as needed)
    execSync("touch app/layout.tsx", { stdio: "inherit" });
  } else {
    // Add Page Router configuration (modify as needed)
    // ...
  }

  if (i18n) {
    // Add i18n configuration (modify as needed)
    execSync("touch public/locales/en.json public/locales/es.json", {
      stdio: "inherit",
    });
  }

  console.log("Project created successfully!");
});
