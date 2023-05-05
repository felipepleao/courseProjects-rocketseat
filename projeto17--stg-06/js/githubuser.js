export class GithubUser {
  static async search(username) {
    const endpoint = `https://api.github.com/users/${username}`;

    const dataJSON = await (await fetch(endpoint)).json();
    const { login, name, public_repos, followers } = dataJSON;

    return {
      login,
      name,
      public_repos,
      followers,
    };
  }
}
