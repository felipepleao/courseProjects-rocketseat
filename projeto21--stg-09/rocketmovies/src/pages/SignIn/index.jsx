import {FiMail, FiLock} from 'react-icons/fi'


import { Background } from "../../components/Background";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}       
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}       
        />

        <Button title="Entrar"/>

        <a href="/">
          Criar conta
        </a>

      </Form>

      <Background />
    </Container>
  );
}
