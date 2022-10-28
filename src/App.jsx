import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Video from "./pages/Video";
import Login from "./pages/Login";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.background};
`;

const Main = styled.div`
  flex: 7;
  color: ${({ theme }) => theme.textColor};
`;

const Wrapper = styled.div`
  padding: 24px 40px;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="/trending" element={<Home type="trending" />} />
                  <Route
                    path="/subscription"
                    element={<Home type="subscription" />}
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
