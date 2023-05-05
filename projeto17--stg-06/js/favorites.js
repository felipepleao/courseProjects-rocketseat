import { GithubUser } from "./githubuser.js";

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites")) || [];
  }

  save() {
    localStorage.setItem("@github-favorites", JSON.stringify(this.entries));
  }

  async add(username) {
    try {
      const userExists = this.entries.find((entry) => entry.login === username);

      if (userExists) {
        throw new Error("Usuário já cadastrado");
      }

      const user = await GithubUser.search(username);

      if (user.login === undefined) {
        throw new Error("Usuário não encontrado!");
      }

      this.entries = [user, ...this.entries];
      this.update();
      this.save();
    } catch (error) {
      alert(error.message);
    }
  }

  delete(user) {
    const filteredEntries = this.entries.filter(
      (entry) => entry.login !== user.login
    );
    this.entries = filteredEntries;
    this.update();
    this.save();
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    console.log(this.entries);

    this.update();
    this.onadd();
  }

  onadd() {
    const addButton = this.root.querySelector(".button-fav");
    addButton.onclick = () => {
      const { value } = this.root.querySelector("#input-search");

      this.add(value);
    };
  }

  noFavorites() {
    const showNoFav = document.querySelector(".tbody-no-fav");
    const noFav = this.entries.length === 0;

    noFav
      ? showNoFav.classList.remove("hiden")
      : showNoFav.classList.add("hiden");
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => tr.remove());
  }

  update() {
    this.removeAllTr();
    this.noFavorites();

    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;
      row.querySelector(
        ".user img"
      ).alt = `https://github.com/${user.name}.png`;
      row.querySelector(".user a").src = `https://github.com/${user.login}`;
      row.querySelector(".user p").textContent = user.name;
      row.querySelector(".user span").textContent = user.login;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;

      row.querySelector(".remove-fav").onclick = () => {
        const isOk = confirm("Tem certeza que deseja deletar essa linha?");
        if (isOk) {
          this.delete(user);
        }
      };

      this.tbody.append(row);
    });
  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
              <td class="user">
                <img src="https://avatars.githubusercontent.com/u/87910555?v=4" alt="Foto de perfil do Github">
                <a href="https://github.com/felipepleao" target="_blank">
                  <p>Felipe Leão</p>
                  <span>felipepleao</span>
                </a>
              </td>
              <td class="repositories">8</td>
              <td class="followers">32</td>
              <td>
                <button class="remove-fav">Remover</button>
              </td>
    `;

    return tr;
  }
}
