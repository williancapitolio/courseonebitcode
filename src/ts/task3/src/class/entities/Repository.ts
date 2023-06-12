interface RepositoryInterface {
  name: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
}

export default class Repository implements RepositoryInterface {
  readonly name: string;
  readonly description: string;
  readonly fork: boolean;
  readonly stargazers_count: number;

  constructor(
    name: string,
    description: string,
    fork: boolean,
    stargazers_count: number
  ) {
    this.name = name;
    this.description = description;
    this.fork = fork;
    this.stargazers_count = stargazers_count;
  }
}
