var NodeGit = require(`nodegit`);
var shell = require(`shelljs`);
var pathToRepo = require(`path`).resolve(`.`);

var getStatus = (repo) => {
  return repo.getStatus();
};

var runDeploy = () => {
  shell.echo(`Running deployment now...`);

  shell.exec(`git checkout master`);
  shell.exec(`git pull mozilla master`);

  shell.rm(`-rf`,`node_modules`);

  shell.exec(`npm i`);
  shell.exec(`npm run build`);

  shell.exec(`git branch -D gh-pages`);
  shell.exec(`git checkout --orphan gh-pages`);

  shell.rm(`.gitignore`);

  shell.echo(`node_modules/`).toEnd(`.gitignore`);
  shell.echo(`.DS_Store`).toEnd(`.gitignore`);

  shell.echo(new Date).to(`last-built.txt`);

  shell.exec(`git add .`);
  shell.exec(`git commit -m 'deploy.js-ified'`);
  shell.exec(`git push mozilla gh-pages -f`);

  shell.echo(`Finished deploying!`);
};

// Check that local repo is clean before deploying

NodeGit.Repository.open(pathToRepo)
  .then(getStatus)
  .then(status => {
    if (status.length) {
      shell.echo(`Repo is dirty. Aborting deploy!`);
      shell.exit(1);
    } else {
      runDeploy();
    }
  });
