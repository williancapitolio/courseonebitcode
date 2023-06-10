import User from "./entities/User";

export default class App {
  private static readonly users: User[] = [];

  /* static promptValidUser(callback: (user: User) => void) {
    const user = getUser(userName);

    App.users.push(new User(response.id, response.login, response.name, response.bio, response.public_repos, response.repos_url));

    if (user) {
      callback(user)
    } else {
      alert("Necessário preencher o campo!")
    }
  } */

  static async fetchUser(username: string) {
    const response: User = await fetch(
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

    return response ?? false;
  }

  static async getUser(username: string) {
    try {
      const response = await App.fetchUser(username);

      const { id, login, name, bio, public_repos, repos_url } = response;

      App.users.push(new User(id, login, name, bio, public_repos, repos_url));
    } catch (error) {
      alert(error);
    }
  }

  /* static validEmptyPrompt(): string {
    let empty = true;

    while (!empty) {
      const user = prompt(
        "Digite o nome do usuário que deseja encontrar no GitHub:"
      );

      if (user) {
        empty = false;
        return user;
      }
    }
  } */
}
