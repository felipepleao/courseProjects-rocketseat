import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'


import { Background } from "../../components/Background";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}       
        />

        <Input
          placeholder="E-mail"
          type="password"
          icon={FiMail}       
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}       
        />

        <Button title="Cadastrar"/>

        <a href="/">
          <FiArrowLeft />
          Voltar para o login
        </a>

      </Form>

      <Background />
    </Container>
  );
}
