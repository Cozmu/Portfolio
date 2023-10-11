import { type ReactElement, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Octokit } from 'octokit';

function Header(): ReactElement {
  useEffect(() => {
    const x = async (): Promise<{ data: object }> => {
      const octokit = new Octokit({
        // metodo para acessar variaveis de ambiente com vite
        auth: import.meta.env.TOKEN,
      });
      const a = await octokit.request('GET /repos/Cozmu/Online-Store', {
        headers: {
          'content-type': 'text/plain',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });
      return a;
    };
    x()
      .then((x) => {
        console.log(x.data);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <header>
      <NavLink to='/sobre'>Sobre</NavLink>
    </header>
  );
}

export default Header;
