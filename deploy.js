var shell = require(`shelljs`);

shell.echo(`Running deployment now...`);

shell.exec(`git checkout master`);
shell.exec(`git pull origin master`);

shell.rm(`-rf`,`node_modules`);

shell.exec(`npm i`);
shell.exec(`npm run build`);

shell.exec(`git branch -D gh-pages`);
shell.exec(`git checkout --orphan gh-pages`);

shell.rm(`.gitignore`);

shell.echo(`/*\n`).toEnd(`.gitignore`);
shell.echo(`!demo\n`).toEnd(`.gitignore`);
shell.echo(`!dest\n`).toEnd(`.gitignore`);
shell.echo(`!last-built.txt\n`).toEnd(`.gitignore`);

shell.echo(new Date).to(`last-built.txt`);

shell.exec(`git reset`);
shell.exec(`git add .`);
shell.exec(`git commit -m 'deploy.js-ified'`);
shell.exec(`git push origin gh-pages -f`);

shell.echo(`Finished deploying!`);
