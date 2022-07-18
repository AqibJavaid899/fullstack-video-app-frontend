import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

import { darkThemeMode, lightThemeMode } from "./utils/Theme";
import Home from "./pages/Home";
import Video from "./pages/Video";

const Container = styled.div`
  display: flex;
  align-content: center;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bodyBgColor};
`;

const Wrapper = styled.div`
  padding: 24px 28px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkThemeMode : lightThemeMode}>
      <Container>
        {/* Menu Bar */}
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* Navbar + App Body */}
        {/* Router DOM Logic */}
        <Router>
          <Main>
            <Navbar />
            <Wrapper>
              {/* Defining Routes */}
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
