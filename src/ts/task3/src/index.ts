/* interface UserInterface {
  id: number;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  repos_url: string;
}

interface RepositoriesInterface {
  name: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
}

const users: UserInterface[] = [];

const fetchUser = async (username: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}`
    ).then((res) => {
      if (!res) {
        return new Error("Falha na requisição!");
      }

      if (res.status === 404) {
        return new Error("Não encontrado!");
      }

      return res.json();
    });

    //users.push(response);
    console.log(response);

    alert("ok");
  } catch (error) {
    alert(error);
  }
};

fetchUser("hygfhfghfg");
 */