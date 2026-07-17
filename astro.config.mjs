import { defineConfig } from 'astro/config';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isProjectPagesDeployment = Boolean(process.env.GITHUB_ACTIONS && repositoryName);

export default defineConfig({
  output: 'static',
  // GitHub project Pages live at /<repository>/; local development stays at /.
  base: isProjectPagesDeployment ? `/${repositoryName}/` : '/',
});
