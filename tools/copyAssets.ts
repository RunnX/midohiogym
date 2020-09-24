import * as shell from "shelljs";

// Copy all the view templates
shell.cp( "-R", "src/views", "app/" );
// Copy all the assets
shell.cp( "-R", "src/assets/bootstrap", "app/" );
shell.cp( "-R", "src/assets/css", "app/" );
shell.cp( "-R", "src/assets/fonts", "app/" );
shell.cp( "-R", "src/assets/img", "app/" );
shell.cp( "-R", "src/assets/js", "app/" );
shell.cp( "-R", "src/index.html", "app/" );
shell.cp( "-R", "favicon.ico", "app/" );