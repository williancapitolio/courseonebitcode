interface RepositoriesInterface {
  name: string,
  description: string,
  fork: boolean,
  stargazers_count: number
}

export default class Repositories implements RepositoriesInterface {
  readonly name: string;
  readonly description: string;
  readonly fork: boolean;
  readonly stargazers_count: number;
};