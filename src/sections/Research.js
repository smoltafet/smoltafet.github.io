
//RENAME TO VOLUNTEER WORK
//RENAME TO VOLUNTEER WORK
//RENAME TO VOLUNTEER WORK

import Header from "../components/Header.js";
import { Divider, Typography } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/joy/Button";

export default function Work() {
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1a/Seal_of_the_United_States_House_of_Representatives.svg" ,
      title: "Member Volunteer",
      company: "U.S. House of Representatives Youth Advisory Council",
      date: "Sept 2022 - Present ",
      description: "The CYAC is a dynamic, nonpartisan organization dedicated to amplifying the voices of young adults across America. Our mission is to foster open discussions around critical policy issues facing our generation and offer innovative solutions rooted in common sense principles. We strive to build bridges between different communities and political ideologies to achieve positive change" ,
      location: "Spokane, Washington, United States",
      link: "https://mcmorris.house.gov/cyac",
    },
    {
      image: "data:image/png;base64,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",
      title: "Volunteer Interpreter",
      company: "World Relief" ,
      date: "Aug 2022 - Present ",
      description: "Provided vital language interpretation assistance to recently arrived Afghan refugee families fleeing war-torn conditions following the Taliban regime's seizure of power in Kabul. Facilitated effective communication between newcomers and service providers during initial settlement processes, ensuring access to necessary support systems and promoting cultural understanding within the host community.      ",
      location: "Spokane, Washington, United States",
      link: "https://worldrelief.org/spokane/",
    },
    {
      image:
        "https://i1.wp.com/prisonjournalismproject.org/wp-content/uploads/2021/10/cropped-PJP-favicon-2.png?fit=512%2C512&ssl=1",
      title: "Volunteer Transcriber",
      company: "Prison Journalism Project",
      date: "Sept 2023 - Present",
      description: 'I played an integral role in amplifying the voices of incarcerated individuals by accurately transcribing interviews, conversations, and recorded content. Collaborating closely with journalists, I meticulously converted audio recordings into written text, ensuring the fidelity and clarity of the content.  ',
      location: "Spokane, Washington, United States",
      link: "https://prisonjournalismproject.org/",
    },
    {
      image:
        "data:image/png;base64,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",
      title: "ESOL Volunteer",
      company: "The Spokesman-Review",
      date: "Jan 2022 - March 2022",
      description:
        "As an enthusiastic ESOL Class Volunteer, I played a pivotal role in supporting non-native English speakers in their language acquisition journey. In a diverse and inclusive classroom environment, I contributed to the enhancement of English language skills and facilitated cross-cultural communication.",
      location: "Seattle, Washington, United States",
      link: "https://evergreengoodwill.org/",
    },
    /*
    {
      image:
        "https://media.licdn.com/dms/image/C4E0BAQEvmOY4jFGUEQ/company-logo_100_100/0/1549227302136?e=2147483647&v=beta&t=1bbNqZOUDrGhwXah9N_fW5fB4hs0lDkup3FGLgfCnSY",
      title: "Real Estate Broker",
      company: "Synergy Properties",
      date: "Jul 2019 - Feb 2021 [ 1 year 8 months ]",
      description:
        "Find new leads and convert them into buyers or sellers. Help clients purchase or sell properties. Advise clients about market conditions, conduct walkthroughs, and provide guidance and assistance through the process of buying, selling, or leasing properties",
      location: "Spokane, Washington, United States",
      link: "https://www.linkedin.com/company/synergy-properties-llc?trk=public_profile_experience-item_profile-section-card_subtitle-click",
    },
    */
  ];

  return (
    <div>
      <Header title="Volunteer History" />
      <Divider sx={{ marginBottom: "10px" }} />
      <Grid
        container
        sx={{
          margin: "auto",
          width: "70%",
          textAlign: "left",
          paddingBottom: "2%",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h6" color="primary">
            Experience
          </Typography>

          {data.map((item, index) => (
            <>
              <Grid
                container
                spacing={1}
                sx={{ marginTop: "10px" }}
                key={index}
              >
                <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5}>
                  <img src={item.image} width="110px" />
                  <Button
                    variant="outlined"
                    color="primary"
                    fontSize="small"
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    <Typography variant="caption" color="primary">
                      Company Link{" "}
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography variant="h5" color="black">
                    <b>{item.title}</b>
                  </Typography>
                  <Typography variant="h6" color="black">
                    {item.company}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {item.date}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {item.location}
                  </Typography>
                  <Typography variant="body1" color="black">
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ marginTop: "10px" }} />
            </>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
