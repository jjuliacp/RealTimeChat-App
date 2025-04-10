import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import Chat from "./components/Chat";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
);
