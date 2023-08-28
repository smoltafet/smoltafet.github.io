import React from "react";
import { Typography, Box } from "@mui/material";
import Chip from "@mui/joy/Chip";

export default function Skills() {
  const languages = ["The Spokesman-Review", "The Woodinville Weekly", "Prison Journalism Project", "The Chronicle", "KHQ News", "Yahoo News", "SWX Right Now"];
  const frameworks = [
  ];
  const databases = [];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
        marginTop: "1%",
        marginLeft: "2%",
      }}
    >
      <Typography variant="h6" color="primary">
        Published Works In:
      </Typography>
      {languages.map((skill, index) => (
        <Chip variant="soft" key={index} sx={{ margin: "2px" }} color="primary">
          {skill}
        </Chip>
      ))}
      {frameworks.map((skill, index) => (
        <Chip variant="soft" key={index} sx={{ margin: "2px" }} color="primary">
          {skill}
        </Chip>
      ))}
      {databases.map((skill, index) => (
        <Chip variant="soft" key={index} sx={{ margin: "2px" }} color="primary">
          {skill}
        </Chip>
      ))}
    </Box>
  );
}
