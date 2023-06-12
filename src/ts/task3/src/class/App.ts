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
        msg += `Repository ${
          index + 1
        }\n- Nome: ${name}\n- Descrição: ${description}\n- Fork: ${
          fork === true ? "Sim" : "Não"
        }\n- Estrelas: ${stargazers_count}\n\n`;
      });

      alert(msg);
    });
  }

  static listAllUsers() {
    let msg = `- Registered users -\n\n`;

    App.users.length > 0
      ? App.users.forEach(({ login, name }, index) => {
          msg += `Usuário ${index + 1}: ${login}, nome: ${name}\n`;
        })
      : (msg += "No registered user");

    alert(msg);
  }

  static sumAllRepositories() {
    let msg = `Sum of saved user repositories:`;
    let sum = 0;

    App.users.forEach((user) => {
      sum += user.public_repos;
    });

    App.users.length > 0
      ? alert(`${msg} ${sum}`)
      : alert(`${msg} No registered user`);
  }

  static topFiveUsersWithMostPublicRepositories() {
    const topFive = App.users
      .map((user) => user)
      .sort((a, b) => b.public_repos - a.public_repos)
      .slice(0, 5);
    let msg = `Top Five:\n`;

    App.users.length > 0
      ? topFive.forEach((top, index) => {
          msg += `${index + 1}. ${top.name}, Repos: ${top.public_repos}\n`;
        })
      : (msg += "No registered user");

    alert(msg);
  }
}
