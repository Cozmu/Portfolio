import { type ReactElement, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header(): ReactElement {
  useEffect(() => {
    const x = async (): Promise<object> => {
      const headers = {
        Authorization:
          // eslint-disable-next-line max-len
          'Bearer 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',
        'X-GitHub-Api-Version': '2022-11-28',
      };
      const a = await fetch('https://api.github.com/user/Cozmu/repos', {
        method: 'GET',
        headers,
      });
      return a;
    };
    x()
      .then((x) => {
        console.log(x);
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
