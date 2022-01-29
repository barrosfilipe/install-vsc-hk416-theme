import {
  installVsixTheme,
  replaceWorkbenchFiles,
  installChecksumsFixer,
  installMaterialIconTheme,
} from "./commands.js";
import { shoutSuccess } from "shout-success";
import { shoutError } from "shout-error";
import ora from "ora";

const install = async () => {
  const spinner = ora("Installing").start();

  const tasks = await Promise.allSettled([
    installVsixTheme,
    replaceWorkbenchFiles,
    installChecksumsFixer,
    installMaterialIconTheme,
  ]);

  spinner.stop();
  console.log("");

  tasks
    .map((task) => {
      if (task.status === "fulfilled")
        return { text: task.value, success: true };

      return { text: task.reason, success: false };
    })
    .map((message) =>
      message.success ? shoutSuccess(message.text) : shoutError(message.text)
    );

  console.log("\n- - - - - - - - - -");
  console.log(
    "Enable the HK416 theme and run the \nchecksums fixer extension to remove the [Unsupported] tag."
  );
  console.log("- - - - - - - - - -\n");
};

export { install };
