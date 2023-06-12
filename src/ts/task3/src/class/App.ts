import Repository from "./entities/Repository";
import User from "./entities/User";

export default class App {
  private static readonly users: User[] = [];

  static async fetchUser(username: string) {
    const response = await fetch(
      `https://api.github.com/users/${username}`
    ).then((res) => res.json());

    if (response.message) {
      return alert(response.message);
    }

    if (App.findUserByUsername(username)) {
      return alert("User already registered.");
    }

    const conf = confirm(
      `User ${response.login} was found. Would you like to save the data?`
    );

    if (!conf) {
      return alert("Data was not saved.");
    }

    const { id, login, name, bio, public_repos, repos_url } = response;

    const repos: Repository[] = await App.fetchRepos(repos_url);

    App.users.push(
      new User(
        id,
        login,
        name,
        bio,
        public_repos,
        repos_url,
        repos.map((repo) => {
          const { name, description, fork, stargazers_count } = repo;
          return new Repository(name, description, fork, stargazers_count);
        })
      )
    );

    alert("Saved successfully.");
  }

  static async fetchRepos(repos_url: string) {
    const response = await fetch(repos_url).then((res) => res.json());
    return response;
  }

  static findUserByUsername(username: string) {
    return App.users.find((user) => user.login === username);
  }

  static async promptValidName(callback: (user: User) => void) {
    const userName = prompt("Enter the username:");
    const user = App.findUserByUsername(userName);

    if (user) {
      callback(user);
    } else {
      alert("User Not Found! Returning to the menu...");
    }
  }

  static showUserInfo() {
    App.promptValidName(async (user) => {
      const { id, login, name, bio, public_repos, repositories } = user;

      let msg = `- Dados -\n\nID: ${id}\nUsername: ${login}\nName: ${name}\nBio: ${bio}\nPublic Repositories: ${public_repos}\nList of Repositories:\n\n`;

      repositories.forEach((repo, index) => {
        const { name, description, fork, stargazers_count } = repo;
        msg += `Repository ${index + 1}\n- Nome: ${name}\n- Descrição: ${description}\n- Fork: ${
          fork === true ? "Sim" : "Não"
        }\n- Estrelas: ${stargazers_count}\n\n`;
      });

      alert(msg);
    });
  }
}
