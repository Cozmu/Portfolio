import { Octokit } from 'octokit';

const projects: string[] = [
  'Delivery-App',
  'Trybewallet',
  'Recipes-App',
  'Trivia',
  'Car-Shop',
  'Tryber-Futebol-Clube',
];

const request = async (): Promise<Array<{ data: object }>> => {
  const octokit = new Octokit({
    // metodo para acessar variaveis de ambiente com vites
    auth: import.meta.env.GITHUB_TOKEN,
  });
  return await Promise.all(
    projects.map(async (project: string) => {
      const response = await octokit.request(`GET /repos/Cozmu/${project}`, {
        headers: {
          'content-type': 'text/plain',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });
      return response.data;
    }),
  );
};

export { projects };
export default request;
