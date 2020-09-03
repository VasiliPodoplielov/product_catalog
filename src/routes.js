import React from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Auth from "./pages/Auth/Auth";
import Catalog from "./pages/Catalog/Catalog";

export const routes = (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <Catalog />
        </Layout>
      </Route>
      <Route path="/auth">
        <Layout>
          <Auth />
        </Layout>
      </Route>
      <Route path="/registry">
        <Layout>
          <Auth />
        </Layout>
      </Route>
      <Route path="/edit" exact>
        <Layout>
          Страница добавления товара
        </Layout>
      </Route>
      <Route path="/edit/:productId" exact>
        <Layout>
          Страница редактирования товара
        </Layout>
      </Route>

    </Switch>
);