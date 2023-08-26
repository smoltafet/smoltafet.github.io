import Header from "../components/Header.js";
import { Divider, Typography } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/joy/Button";

export default function Work() {
  const data = [
    {
      image:
        "https://www.nwnews.com/img/header-woodinville_wa.jpg" ,
      title: "Editorial Intern",
      company: "The Woodinville Weekly",
      date: "Sept 2023 - Present ",
      description: "Contributed to weekly editorial meetings focused on identifying salient issues affecting the local community and crafting persuasive arguments to inspire action or spark debate among readers. Assisted senior staff writers in conducting comprehensive research and fact-checking procedures to ensure accurate representation of facts and sources cited in published pieces. Developed original story pitches based on emerging news items or longstanding problems confronting the Woodville area, collaborating with peers to refine angles and flesh out supporting details. " ,
      location: "Woodinville, Washington, United States",
      link: "https://www.nwnews.com/",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      title: "Student Leader",
      company: "Bank of America",
      date: "July 2023 - Sept 2023 [ 3 months, Internship ]",
      description: "Selected as 1 of 300 Student Leaders out of 5000+ applicants across the United States. Drove responsible growth with Goodwill Evergreen, to deliver for clients and address pressing societal issues, including advancing employment opportunities for youth and adults. Collaborated with a team to improve user-experience while continuously driving users to the site.      ",
      location: "Seattle, Washington, United States",
      link: "https://about.bankofamerica.com/en/making-an-impact/student-leaders",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1a/Seal_of_the_United_States_House_of_Representatives.svg",
      title: "Congressional Intern",
      company: "Office of Congresswoman Cathy McMorris Rodgers (WA - 5) ",
      date: "Sept 2022 - Dec 2022 [ 4 months, Internship ]",
      description: 'Analyzed and synthesized Congressional Research Service reports covering topics such as commerce, economics, and energy. While providing concise summaries of key findings and recommendations to inform policy making decisions. Engage directly with constituents to identify their needs and connect them with appropriate government services and resources, while developing strong communication skills by interacting with individuals from diverse backgrounds and advocating on their behalf.',
      location: "Spokane, Washington, United States",
      link: "https://mcmorris.house.gov/",
    },
    {
      image:
        "https://downtownspokane.org/wp-content/uploads/2021/01/h8t55Dx0.jpg",
      title: "Intern Reporter",
      company: "The Spokesman-Review",
      date: "June 2022 - Sept 2022 [ 4 months, Internship ]",
      description:
        "Conducted thorough interviews with government officials and prominent community members to gather insights into local issues and trends. Authored compelling articles exploring pressing matters affecting the greater Spokane region, showcasing my ability to distill complex information into engaging narratives. Collaborated closely with colleagues and supervisors to create content that resonates with readers while maintaining journalistic integrity and accuracy.",
      location: "Spokane, Washington, United States",
      link: "https://www.spokesman.com/",
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
      <Header title="Work History" />
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
