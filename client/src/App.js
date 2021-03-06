import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import CssBaseline from "@mui/material/CssBaseline";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "./utils/GlobalState";
import AuthService from "./utils/auth";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/Theme";
import Grid from "@mui/material/Grid";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Activities from "./pages/Activities";
import Meals from "./pages/Meals";
import Symptoms from "./pages/Symptoms";
import ActivityDetails from "./pages/ActivityDetails";
import MealDetails from "./pages/MealDetails";
import SymptomDetails from "./pages/SymptomDetails";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const isLoggedIn = AuthService.loggedIn();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <Router>
          <Grid>
            <StoreProvider>
              <NavBar />
              <Routes>
                {isLoggedIn ? (
                  <Route exact path="/" element={<Dashboard />} />
                ) : (
                  <Route exact path="/" element={<Home />} />
                )}
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/activities" element={<Activities />} />
                <Route exact path="/meals" element={<Meals />} />
                <Route exact path="/symptoms" element={<Symptoms />} />
                <Route
                  exact
                  path="/activities/:activityId"
                  element={<ActivityDetails />}
                />
                <Route exact path="/meals/:mealId" element={<MealDetails />} />
                <Route
                  exact
                  path="/symptoms/:symptomId"
                  element={<SymptomDetails />}
                />
                <Route element={<NoMatch />} />
              </Routes>
              <Footer />
            </StoreProvider>
          </Grid>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
