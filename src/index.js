import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-svg.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-design-system.scss?v1.0.0";

import Home from "views/Home";
import Coaching from "views/Coaching";
import Media from "views/Media";
import MediaPost from "views/MediaPost";

import Error from "views/examples/Error.js";
import Error500 from "views/examples/Error500.js";

import { HelmetProvider } from "react-helmet-async";
import NotFound from "components/errors/NotFound";

// require("./App.js")
// const express = require('express')
// const app = express()

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route path="/media" exact render={(props) => <Media {...props} />} />

        <Route
          path="/media/:id"
          exact
          render={(props) => <MediaPost {...props} />}
        />

        <Route
          path="/coaching"
          exact
          render={(props) => <Coaching {...props} />}
        />
        <Route
          path="/coaching/:color"
          exact
          render={(props) => <Coaching {...props} />}
        />
        <Route
          path="/media-post"
          exact
          render={(props) => <MediaPost {...props} />}
        />

        <Route path="/error" exact render={(props) => <Error {...props} />} />

        <Route
          path="/error-500"
          exact
          render={(props) => <Error500 {...props} />}
        />

        <Route
          path="/notfound"
          exact
          render={(props) => <NotFound {...props} />}
        />
        <Route path="/:color" exact render={(props) => <Home {...props} />} />

        <Route path="*">
          <NotFound />
        </Route>

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </HelmetProvider>
);
