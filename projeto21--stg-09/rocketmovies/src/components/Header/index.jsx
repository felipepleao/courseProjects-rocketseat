import { Container, Profile, Search, Logout } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Search>
        <Input placeholder="Pesquisar pelo título" type="text" />
      </Search>

      <div>
        <Profile to="/profile">
          <div>
            <span>Felipe Leão</span>
          </div>

          
          <img src="https://github.com/felipepleao.png" alt="" />
          
        </Profile>

        <Logout>sair</Logout>
      </div>
    </Container>
  );
}
