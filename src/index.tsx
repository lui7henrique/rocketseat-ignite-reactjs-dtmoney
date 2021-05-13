import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Ignite",
          type: "withdraw",
          category: "Rocketseat",
          amount: 2000,
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Salário",
          type: "deposit",
          category: "Trabalho",
          amount: 3000,
          createdAt: new Date(),
        },
        {
          id: 3,
          title: "Website",
          type: "deposit",
          category: "Trabalho",
          amount: 5000,
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
