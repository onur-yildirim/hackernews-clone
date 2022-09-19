import { Suspense, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import TitleSection from 'components/TitleSection';
import { colorsLight, colorsDark } from 'styles/palette';
import GlobalStyles from 'styles/globals';
import ThemeToggle from 'components/ThemeToggle';
import routes from 'routes';

import { getTheme } from 'store/reducers/app';

import { Wrapper } from './styles';

export default function App() {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.app);
  const themeMaping = {
    dark: colorsDark,
    light: colorsLight
  };

  useEffect(() => {
    dispatch(getTheme());
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeMaping[theme]}>
      <GlobalStyles />
      <ThemeToggle />
      <Wrapper>
        <TitleSection />

        <Suspense>
          <Routes>
            {routes.map(({ Component, path, name }, idx) => {
              return <Route key={idx} path={path} name={name} element={<Component />} />;
            })}
          </Routes>
        </Suspense>
      </Wrapper>
    </ThemeProvider>
  );
}
