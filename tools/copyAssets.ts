import * as shell from "shelljs";

// Copy all the view templates
shell.cp( "-R", "src/views", "dist/" );
// Copy all the assets
shell.cp( "-R", "src/assets/bootstrap", "dist/" );
shell.cp( "-R", "src/assets/css", "dist/" );
shell.cp( "-R", "src/assets/fonts", "dist/" );
shell.cp( "-R", "src/assets/img", "dist/" );
shell.cp( "-R", "src/assets/js", "dist/" );