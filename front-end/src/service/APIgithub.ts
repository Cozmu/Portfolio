import { Octokit } from 'octokit';

const projects: string[] = [
  'Delivery-App',
  'Trybewallet',
  'Recipes-App',
  'Trivia',
  'Car-Shop',
  'Tryber-Futebol-Clube',
];

interface Irequest {
  id: number;
  name: string;
  description: string;
  topics: string[];
  url: string;
  [key: string]: unknown;
}

interface Iproject extends Irequest {
  img: {
    url: string;
    fileName: string;
  };
}

const request = async (): Promise<Irequest[]> => {
  const octokit = new Octokit({
    // metodo para acessar variaveis de ambiente com vites
    auth: import.meta.env.GITHUB_TOKEN,
  });
  const x = await Promise.all(
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

  return x;
};

const filterDate = async (): Promise<Irequest[]> => {
  const desiredKeys = ['id', 'name', 'description', 'topics', 'url'];
  const rawScore = await request();
  const arrayFiltered = [];

  for (const obj of rawScore) {
    const filteredObj = {} as Irequest;

    for (const key of Object.keys(obj)) {
      if (desiredKeys.includes(key)) {
        filteredObj[key] = obj[key];
      }
    }
    arrayFiltered.push(filteredObj);
  }
  console.log('B', arrayFiltered);

  return arrayFiltered;
};

export { projects, type Irequest, type Iproject };
export default filterDate;
