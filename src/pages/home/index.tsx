// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";
import { useState } from "react";
import { Modal } from "@/components/Modal";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/kenzie-portfolio-2_fernandomtos`;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const time = new Date().toLocaleTimeString();
  let period = "";

  if (time >= "12:00:00" && time < "18:00:00") {
    period = "Boa Tarde";
  } else if (time >= "18:00:00" && time < "23:59:59") {
    period = "Boa Noite";
  } else {
    period = "Bom Dia";
  }

  return (
    <>
      <main id="home">
        <Header>
          <Container>
            <HeaderContent>
              <Flex>
                <UserImage
                  src={`https://github.com/${userData.githubUser}.png`}
                  alt={userData.nameUser}
                  title={userData.nameUser}
                  width={"48px"}
                  height={"48px"}
                />
                <Text color="grey4">{period}, obrigado pela visita !</Text>
                <span> | </span>
                <Button type="outline" onClick={toggleModal}>
                  Sobre
                </Button>
              </Flex>
              <Text as="h1" type="heading1" color="grey5">
                Criando{" "}
                <Text as="span" type="heading1" color="brand1">
                  experiências
                </Text>{" "}
                por meio{" "}
                <Text as="span" type="heading1" color="brand1">
                  da
                </Text>{" "}
                tecnologia
              </Text>
              <Text type="body1" color="grey2">
                Portifólio desenvolvido especialmente para você que
                disponibilizou seu tempo para conhecer todos os meus projetos e
                tecnologias aplicadas.
              </Text>
              <HeaderButtonsArea>
                <Button as="a" type="primary" href="#projects">
                  Ver Projetos
                </Button>
                <Button
                  as="a"
                  type="outline"
                  target="_blank"
                  href={portfolioUrl}
                >
                  Código fonte desse Portfólio
                </Button>
                <Button
                  color="grey5"
                  as="a"
                  css={{ "&:hover": { color: "$grey1" } }}
                  type="circle"
                  target="_blank"
                  href={gihubUrl}
                >
                  <FaGithub />
                </Button>
              </HeaderButtonsArea>
              <StackCards>
                {stackData.map((stack, index) => (
                  <Stack key={index} title={stack.title} icon={stack.img} />
                ))}
              </StackCards>
            </HeaderContent>
          </Container>
        </Header>
        <ProjectsArea id="projects">
          <Container>
            <ProjectAreaWrapperColumns>
              <ProjectsAreaSocialMediaMessage>
                <Text as="h2" type="heading4" color="grey4">
                  Meus Projetos
                </Text>
                <Text as="p" type="body1" color="grey2">
                  Alguns dos meus{" "}
                  <Text as="span" color="brand5">
                    projetos, buscando sempre soluções práticas e relevantes ao
                    negócio.
                  </Text>
                </Text>
              </ProjectsAreaSocialMediaMessage>
              <ProjectsAreaContent>
                <Project />
              </ProjectsAreaContent>
            </ProjectAreaWrapperColumns>
          </Container>
        </ProjectsArea>
        <Contacts />
      </main>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          Conhecimento em HTML5, CSS3, Web Semântica, JavaScript(ES6), Lógica de
          programação, GitFlow, adquiridos pelo curso da Kenzie Academy Brasil.
          Projetos desenvolvidos em ReactJS e TypeScript com auxílio de
          bibliotecas como Axios, React Hook Form, React Router DOM, estilização
          componentizada com Styled Components e emprego de boas práticas.
          Vivência no desenvolvimento de projetos em equipe, com utilização de
          metodologia de versionamento para um correto gerenciamento de branches
          e redução de conflitos, padronização e variáveis bem descritivas, além
          de um aperfeiçoamento das soft skills. Experiência no backend com
          projetos (API Rest) desenvolvidos em NodeJs com Express, TypeORM e
          PostgreSQL e também desenvolvidos em Python com a framework Django e
          Django Rest Framework. Facilidade em encontrar e corrigir erros de
          software, conhecimento adquirido debugando código (XML) das empresas
          que realizavam o procedimento de integração do sistema próprio com o
          sistema bancário. Facilidade na gestão de problemas, prática adquirida
          no atendimento de usuários dos aplicativos bancários. Conhecimento em
          Inglês intermediário, para leitura e escrita.
          <p>Estou a disposição para quaisquer esclarecimentos </p>{" "}
        </Modal>
      )}
    </>
  );
};
