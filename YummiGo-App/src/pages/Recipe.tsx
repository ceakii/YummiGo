import { Container } from "@mui/material";
import MuiImageList from "../components/MuiImageList";

export default function Recipe() {
  return (
    <main>
      <div>
        <Container
          sx={{
            //bgcolor: "white",
            width: "100%",
            height: "100%",
            marginTop: 9,
            marginLeft: 0,
            marginRight: 0
          }}>
          <MuiImageList />
        </Container>
      </div>
    </main>
  );
}