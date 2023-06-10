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
    if (!username) {
      return alert("Campo vazio!");
    }

    const response: User | void = await fetch(
      `https://api.github.com/users/${username}`
    ).then((res) => res.json());

    if (!response) {
      return Promise.reject(new Error("deu ruim"));
    }

    return response;
  }

  static async getUser(username: string) {
    try {
      const response: User = await App.fetchUser(username);

      const { id, login, name, bio, public_repos, repos_url } = response;

      App.users.push(new User(id, login, name, bio, public_repos, repos_url));

      alert("ok");
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
