import { Container, Content, Form } from "./styles";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Voltar" />

          <Form>
            <header>
              <h1>Novo filme</h1>
            </header>

            <div className="formInput">
              <Input placeholder="Título" />
              <Input placeholder="Sua nota (de 0 a 5)" />
            </div>

            <Textarea placeholder="Observações" />

            <section>
              <h2>Marcadores</h2>
              <div className="tags">
                <NoteItem value="react" />
                <NoteItem isNew placeholder="Novo marcador" />
              </div>
            </section>

            <div className="Buttons">
              <Button title="Excluir Filme"/>
              <Button title="Salvar alterações"/>
            </div>
          </Form>
        </Content>
      </main>
    </Container>
  );
}
