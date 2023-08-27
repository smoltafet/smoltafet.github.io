import MainCard from "../components/MainCards.js";
import Socials from "../components/Socials.js";
import { Typography } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Avatar from "@mui/joy/Avatar";

export default function Main() {
  return (
    <div>
      <MenuOutlinedIcon
        fontSize="large"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          color: "primary.main",
          padding: "3%",
        }}
      />
      <Grid
        container
        sx={{
          margin: "auto",
          textAlign: "center",
          alignItems: "center",
          width: "80%",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Grid item xs={12} sm={6}>
          <MainCard />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ width: 150, height: 150, marginRight: "5%" }}
            src="https://media.licdn.com/dms/image/D5603AQHdz32nDWaOQA/profile-displayphoto-shrink_400_400/0/1691612232037?e=1698278400&v=beta&t=78l2-Sm6aw33SwGHmkUB9FHHNRBqbraCwZ3rjWr0Ts4"
            alt="Sidiq Moltafet"
          />

          <div>
            <Typography variant="h3" color="primary">
              Sidiq Moltafet
            </Typography>
            <Socials />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
