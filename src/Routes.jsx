import React from "react";
import { useRoutes } from "react-router-dom";
import SearchResultsPage from "./pages/Home";
import NotFound from "./pages/NotFound";
import MenuContactsOpened from "./pages/MenuContactsOpened";
import SearchSearch from "./pages/SearchSearch";
import MenuContactsOpenedConfirmed from "./pages/MenuContactsOpenedConfirmed";
import Help from "./pages/Help";
import Container from "./container/Container";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <Container>
          <SearchResultsPage />
        </Container>
      ),
    },
    {
      path: "/:keyword",
      element: (
        <Container>
          <SearchResultsPage />
        </Container>
      ),
    },
    {
      path: "/help",
      element: (
        <Container>
          <Help />
        </Container>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "contact",
      element: (
        <Container>
          <MenuContactsOpened />{" "}
        </Container>
      ),
    },
    {
      path: "search",
      element: (
        <Container>
          <SearchSearch />
        </Container>
      ),
    },
    {
      path: "confirmation",
      element: (
        <Container>
          <MenuContactsOpenedConfirmed />
        </Container>
      ),
    },
  ]);

  return element;
};

export default ProjectRoutes;
