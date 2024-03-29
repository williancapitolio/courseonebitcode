import Repository from "./Repository";

interface UserInterface {
  id: number;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  repos_url: string;
  repositories: Repository[];
}

export default class User implements UserInterface {
  readonly id: number;
  readonly login: string;
  readonly name: string;
  readonly bio: string;
  readonly public_repos: number;
  readonly repos_url: string;
  readonly repositories: Repository[];

  constructor(
    id: number,
    login: string,
    name: string,
    bio: string,
    public_repos: number,
    repos_url: string,
    repositories: Repository[]
  ) {
    this.id = id;
    this.login = login;
    this.name = name;
    this.bio = bio;
    this.public_repos = public_repos;
    this.repos_url = repos_url;
    this.repositories = repositories;
  }
}
