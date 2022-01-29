import { execPowerShellCommand } from "./execPowerShellCommand.js";

const binPath = process.argv[1].replace(/\\/g, "/").split(`bin/index.js`)[0];
const vsCodeWorkbenchPath =
  "/Programs/Microsoft VS Code/resources/app/out/vs/code/electron-browser/workbench/";

const installVsixTheme = execPowerShellCommand({
  command: `code --install-extension barrosfilipe.hk416-theme --force`,
  successMessage: "Theme installed",
  failedMessage: "Failed to install theme",
});

const replaceWorkbenchFiles = execPowerShellCommand({
  command: `Copy-Item -Path '${binPath}workbench/*' -destination $env:LOCALAPPDATA'${vsCodeWorkbenchPath}' -force`,
  successMessage: "Workbench files replaced",
  failedMessage: "Failed to replace workbench files",
});

const installChecksumsFixer = execPowerShellCommand({
  command: `code --install-extension lehni.vscode-fix-checksums --force`,
  successMessage: "Checksums fixer installed",
  failedMessage: "Failed to install checksums fixer",
});

const installMaterialIconTheme = execPowerShellCommand({
  command: `code --install-extension pkief.material-icon-theme --force`,
  successMessage: "Material icon theme installed",
  failedMessage: "Failed to install material icon theme",
});

export {
  installVsixTheme,
  replaceWorkbenchFiles,
  installChecksumsFixer,
  installMaterialIconTheme,
};
