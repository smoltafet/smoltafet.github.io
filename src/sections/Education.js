import { Typography, Grid, Button, Divider } from "@mui/material";
import Header from "../components/Header";

export default function Education() {
  return (
    <div>
      <Header title="Education" />
      <Grid container 
        style={{
          textAlign: "left",
          paddingBottom: "2%",
          borderBottom: "1px solid #e0e0e0",
          marginLeft: "2%",
          
        }}
      >
        
        <Grid item sx={{
          marginTop: "1%",
        }}>
          <img src="https://www.appliedbehavioranalysisprograms.com/wp-content/uploads/2019/11/bellevue-college.png" width="100px" />
        </Grid>
        <Grid item sx={{ 
          marginLeft: "2%",
        }}>
          <Typography variant="overline" color="black">
            Current
          </Typography>

          <Typography variant="h5" color="black">
            Bellevue College
          </Typography>

          <Typography variant="h6" color="black">
            <b>Associate of Arts in Mass Media & Journalism</b>
          </Typography>
          <Typography variant="overline" color="black">
            Graduation: June 2024 <br />
          </Typography>
          </Grid>
      </Grid>
      
      <Grid container
        style={{
          textAlign: "left",
          paddingBottom: "2%",
          borderBottom: "1px solid #e0e0e0",
          marginLeft: "2%",
        }}
      >
        <Grid item sx={{
          marginTop: "1%",
        }}>
          <img src="https://upload.wikimedia.org/wikipedia/en/b/bd/Gonzaga_Bulldogs_logo.svg" width="100px" />
        </Grid>
        <Grid item sx={{ 
          marginLeft: "2%",
        }}>
        <Typography variant="overline" color="black">
          Current
        </Typography>

        <Typography variant="h5" color="black">
          Mead Senior High School
        </Typography>

        <Typography variant="h6" color="black">
          <b>Spokane, Washington</b>
        </Typography>
        <Typography variant="overline" color="black">
           Graduation: June 2024 <br />
        </Typography>
        </Grid>
        <Divider sx={{ marginTop: "1%" }} />    
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="overline" color="black">
              Relevant Corsework
            </Typography>
            <Typography variant="body2" color="black">
            Relevant Coursework: Communication 299: Special Projects in Communication, Communication Studies 146: News Staff 
	          Additional Involvement: Bellevue Student Paper, New Venture Lab, Barbell Club 

            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
            <Typography variant="overline" color="black">
              <br />
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              fontSize="small"
              onClick={() =>
                window.open("amoltafet.github.io/research", "_blank")
              }
            >
              <Typography variant="caption" color="primary">
                
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
