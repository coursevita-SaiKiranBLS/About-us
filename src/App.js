import Welcome from "./components/Welcome/Welcome";
import Empty from "./components/Empty/Empty";
import Middle from "./components/Middle/Middle";
import Bottom from "./components/Bottom/Bottom";
import Box from "@mui/material/Box";
import "./App.css";

function App() {

  return (
    <Box>
      <Welcome />
      <Empty />
      <Middle />
      <Bottom />
    </Box>
  );
}

export default App;
