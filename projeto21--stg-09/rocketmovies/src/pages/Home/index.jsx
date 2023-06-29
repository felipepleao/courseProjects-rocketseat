import { Container, Content, ContentNote } from "./styles";

import { Input } from "../../components/Input";
import { Note } from "../../components/Note";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Section title="Meus filmes">
          <ContentNote>
            <Note
              data={{
                title: "Interestellar",
                tags: [
                  { id: "1", name: "Ficção Científica" },
                  { id: "2", name: "Drama" },
                  { id: "3", name: "Família" },
                ],
              }}
            />
            <Note
              data={{
                title: "Interestellar",
                tags: [
                  { id: "1", name: "Ficção Científica" },
                  { id: "2", name: "Drama" },
                  { id: "3", name: "Família" },
                ],
              }}
            />
            <Note
              data={{
                title: "Interestellar",
                tags: [
                  { id: "1", name: "Ficção Científica" },
                  { id: "2", name: "Drama" },
                  { id: "3", name: "Família" },
                ],
              }}
            />
            <Note
              data={{
                title: "Interestellar",
                tags: [
                  { id: "1", name: "Ficção Científica" },
                  { id: "2", name: "Drama" },
                  { id: "3", name: "Família" },
                ],
              }}
            />
            <Note
              data={{
                title: "Interestellar",
                tags: [
                  { id: "1", name: "Ficção Científica" },
                  { id: "2", name: "Drama" },
                  { id: "3", name: "Família" },
                ],
              }}
            />
          </ContentNote>
        </Section>
      </Content>
    </Container>
  );
}
