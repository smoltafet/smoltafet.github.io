import React from "react";
import { Divider } from "@mui/material";
import Header from "../components/Header";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import { CardOverflow } from "@mui/joy";
import Button from "@mui/joy/Button";
import Grid from "@mui/material/Grid";
import LanguageIcon from "@mui/icons-material/Language";
import Skills from "./Skills";

export default function Projects() {
  const projectsList = [
    {
      title: "Spokane police meet with residents in ‘Coffee with a Cop’ at shuttered downtown Starbucks ",
      description:
        "Looking to bolster community relationships, Spokane police officers on Wednesday met with members of the public in an event called Coffee with a Cop.        ",
      image: "Coffee.png",
      link: "https://www.spokesman.com/stories/2022/jul/13/coffee-with-a-cop/",
      lastUpdated: "2022-10-02",
      languages: ["Spokesman", "Yahoo News"],
    },
    {
      title: "We the People: British Prime Minister Boris Johnson has officialy resigned!",
      description:
        "On July 7, British Prime Minister Boris Johnson announced his resignation. His fall came after more than 50 members of Parliament stepped down from their positions.        ",
      image: "People.jpeg",
      link: "https://www.spokesman.com/stories/2022/jul/31/we-the-people-a-brief-comparison-of-american-and-b/",
      lastUpdated: "2021-10-01",
      languages: ["Spokesman", "Yahoo News"],
    },
    {
      title: "Rep. Cathy McMorris Rodgers supports House Speaker Nancy Pelosi’s trip to Taiwan",
      description:
        "U.S. Rep. Cathy McMorris Rodgers voiced support on Wednesday for House Speaker Nancy Pelosi’s visit to Taiwan, amid threats from Beijing of a military response.        ",
      image: "Pelosi.webp",
      link: "https://www.chronline.com/stories/spokane-rep-cathy-mcmorris-rodgers-supports-house-speaker-nancy-pelosis-trip-to-taiwan,297902",
      lastUpdated: "2021-10-01",
      languages: ["Spokesman", "The Chronicle"],
    },
    {
      title: "WOODIVILLE STORY GOES HERE ",
      description:
        "My own programming language with the following capabilities: Module System, Lexer, AST Parser, Prettify, Call Expressions.",
      image: "rock.jpeg",
      link: "https://amoltafet.github.io/RockWater/",
      lastUpdated: "2021-10-01",
      languages: ["Python", "C++"],
    },
    {
      itle: "Woodivile",
      description:
        "My own programming language with the following capabilities: Module System, Lexer, AST Parser, Prettify, Call Expressions.",
      image: "rock.jpeg",
      link: "https://amoltafet.github.io/RockWater/",
      lastUpdated: "2021-10-01",
      languages: ["Python", "C++"],
    },
    {
      itle: "Woodivile",
      description:
        "My own programming language with the following capabilities: Module System, Lexer, AST Parser, Prettify, Call Expressions.",
      image: "rock.jpeg",
      link: "https://amoltafet.github.io/RockWater/",
      lastUpdated: "2021-10-01",
      languages: ["Python", "C++"],
    },
    {
      itle: "Woodivile",
      description:
        "My own programming language with the following capabilities: Module System, Lexer, AST Parser, Prettify, Call Expressions.",
      image: "rock.jpeg",
      link: "https://amoltafet.github.io/RockWater/",
      lastUpdated: "2021-10-01",
      languages: ["Python", "C++"],
    },
    {
      itle: "Woodivile",
      description:
        "My own programming language with the following capabilities: Module System, Lexer, AST Parser, Prettify, Call Expressions.",
      image: "rock.jpeg",
      link: "https://amoltafet.github.io/RockWater/",
      lastUpdated: "2021-10-01",
      languages: ["Python", "C++"],
    },
    {
      itle: "Woodivile",
      description:
        "My own programming language with the following capabilities: Module System, Lexer, AST Parser, Prettify, Call Expressions.",
      image: "rock.jpeg",
      link: "https://amoltafet.github.io/RockWater/",
      lastUpdated: "2021-10-01",
      languages: ["Python", "C++"],
    },
    {
      itle: "Woodivile",
      description:
        "My own programming language with the following capabilities: Module System, Lexer, AST Parser, Prettify, Call Expressions.",
      image: "rock.jpeg",
      link: "https://amoltafet.github.io/RockWater/",
      lastUpdated: "2021-10-01",
      languages: ["Python", "C++"],
    },
    {
      itle: "Woodivile",
      description:
        "My own programming language with the following capabilities: Module System, Lexer, AST Parser, Prettify, Call Expressions.",
      image: "rock.jpeg",
      link: "https://amoltafet.github.io/RockWater/",
      lastUpdated: "2021-10-01",
      languages: ["Python", "C++"],
    },
    {
      itle: "Woodivile",
      description:
        "My own programming language with the following capabilities: Module System, Lexer, AST Parser, Prettify, Call Expressions.",
      image: "rock.jpeg",
      link: "https://amoltafet.github.io/RockWater/",
      lastUpdated: "2021-10-01",
      languages: ["Python", "C++"],
    },
    {
      itle: "Woodivile",
      description:
        "My own programming language with the following capabilities: Module System, Lexer, AST Parser, Prettify, Call Expressions.",
      image: "rock.jpeg",
      link: "https://amoltafet.github.io/RockWater/",
      lastUpdated: "2021-10-01",
      languages: ["Python", "C++"],
    },
  ];

  return (
    <div>
      <Header title="Projects" />
      <Grid item xs={12} sm={12} md={12} lg={12} id="skills">
        <Divider />
        <Skills />
      </Grid>
      <MainProject />
      <Grid
        container
        spacing={2}
        sx={{
          padding: "2%",
        }}
      >
        {projectsList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project.title}>
            <ProjectCard
              key={`project-card-${index}`}
              id={`project-card-${index}`}
              value={project}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

function ProjectCard({ value }) {
  const { title, description, link, languages, image } = value;

  return (
    <Card variant="outlined">
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={image} srcSet={require(`../img/${image}`)} alt="" />
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
        {" "}
        {title}{" "}
      </Typography>
      <Typography variant="subtitle2" gutterBottom sx={{ mt: 0.1, mb: 2 }}>
        {description}
      </Typography>
      <Divider />
      <CardOverflow
        variant="soft"
        sx={{
          display: "flex",
          gap: 0.3,
          py: 1.5,
          px: "var(--Card-padding)",
          bgcolor: "background.level1",
        }}
      >
        {languages.map((language, index) => (
          <Chip
            size="sm"
            variant="outlined"
            color="neutral"
            key={`project-card-${index}`}
          >
            {language}
          </Chip>
        ))}

        <Divider orientation="vertical" />
        <Button
          size="sm"
          variant="outlined"
          color="primary"
          sx={{ ml: "auto" }}
          onClick={() => window.open(link, "_blank")}
        >
          Full Article
        </Button>
        <IconButton
          size=""
          color=""
          onClick={() => window.open( "_blank")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github"
            viewBox=""
          >
          </svg>
        </IconButton>
      </CardOverflow>
    </Card>
  );
}

function MainProject() {
  return (
    <div
      style={{
        padding: "2%",
        display: "flex",
        flexDirection: "row",
        gap: "2%",
        width: "100%",
        height: "100%",
      }}
    >
      <Card
        sx={{
          width: "30%",
          bgcolor: "initial",
          boxShadow: "none",
          "--Card-padding": "0px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <AspectRatio ratio="4/3">
            <figure>
              <img
                src="https://thumb.spokesman.com/TtIulILq15yMi2zY3X-REDVFaaQ=/2500x0/smart/media.spokesman.com/photos/2022/11/12/62abc29c1eddf.image.jpg"
                srcSet="https://cdn.vox-cdn.com/thumbor/yJuBQtYK2euiOWE3lj_dtloWkvs=/160x0:1239x607/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/46708944/manyminions.0.jpg"
                loading="lazy"
                alt="Ovicore Technologies"
              />
            </figure>
          </AspectRatio>
          <CardCover
            className="gradient-cover"
            sx={{
              "&:hover, &:focus-within": {
                opacity: 1,
              },
              opacity: 0,
              transition: "0.1s ease-in",
              background:
                "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
            }}
          >
            {/* The first box acts as a container that inherits style from the CardCover */}
            <Box>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  flexGrow: 1,
                  alignSelf: "flex-end",
                }}
              >
                <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                  <Link
                    href="#dribbble-shot"
                    overlay
                    underline="none"
                    sx={{
                      color: "#fff",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      display: "block",
                    }}
                  >
                Minions: The Rise of Gru (2022)
                  </Link>
                </Typography>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    
                  </svg>
                <IconButton
                  size="sm"
                  color="neutral"
                  onClick={() => window.open("https://www.spokesman.com/stories/2022/jul/08/gentleminions-tiktok-trend-is-taking-over-the-worl/", "_blank")}
                >
                  <LanguageIcon />
                </IconButton>
              </Box>
            </Box>
          </CardCover>
        
             
          
          
            
      

          <Link
            href="#dribbble-shot"
            level="body3"
            underline="none"
            startDecorator={<Visibility />}
            sx={{
              fontWeight: "md",
              color: "text.secondary",
              "&:hover": { color: "primary.plainColor" },
            }}
          >
            
          </Link>
        </Box>
      </Card>
      <div
        style={{
          width: "80%",
        }}
      >
        <Typography variant="h3" sx={{ fontSize: "lg", mt: 2 }}>
        ‘Gentleminions’ TikTok trend is taking over the world!
         </Typography>
        <Typography variant="body1" sx={{ fontSize: "lg", mt: 2 }}>
       
        </Typography>
        <Typography variant="h5" sx={{ fontSize: "lg", mt: 2 }}> 
        The scene is unfolding at movie theaters across the country: teens dressed in suits and ties crowding into the latest Minions movie.
        These gentlemen are part of the “gentleminions” trend on TikTok that has collected 9.1 billion views.
        </Typography>
      </div>
    </div>
  );
}
