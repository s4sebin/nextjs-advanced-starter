import { copyFileSync, existsSync, mkdirSync, readdirSync } from "fs";
import { join } from "path";

const configs = {
  i18n: {
    source: join(__dirname, "config", "i18n"),
    target: join(__dirname, "public", "locales"),
  },
  router: {
    appRouter: join(__dirname, "config", "router", "appRouter.js"),
    pageRouter: join(__dirname, "config", "router", "pageRouter.js"),
    target: join(__dirname, "pages"),
  },
};

function copyFiles(sourceDir, targetDir) {
  readdirSync(sourceDir).forEach(file => {
    const sourceFile = join(sourceDir, file);
    const targetFile = join(targetDir, file);
    copyFileSync(sourceFile, targetFile);
  });
}

function setupI18n() {
  if (!existsSync(configs.i18n.target)) {
    mkdirSync(configs.i18n.target, { recursive: true });
  }
  copyFiles(configs.i18n.source, configs.i18n.target);
}

function setupRouter(routerType) {
  const sourceFile = configs.router[routerType];
  if (sourceFile && existsSync(sourceFile)) {
    const targetFile = join(configs.router.target, "index.js");
    copyFileSync(sourceFile, targetFile);
  }
}

function main() {
  const args = process.argv.slice(2);
  const routerType = args.includes("--app-router") ? "appRouter" : "pageRouter";

  setupI18n();
  setupRouter(routerType);

  console.log("Project setup complete.");
}

main();
