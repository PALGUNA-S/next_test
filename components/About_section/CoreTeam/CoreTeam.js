import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const teamData = [
  {
    id: 1,
    fname: "Vishnupriya ",
    lname: "Kanuri",
    designation: "Founders Office",
    avatar: '/Assets/About_section/Team/Vishnupriya.png',
    link: "https://www.linkedin.com/in/vishnupriya-kanuri-46b9a5175/",
  },
  {
    id: 3,
    fname: "Ayush",
    lname: "K",
    designation: "Business development Manager",
    avatar: '/Assets/About_section/Team/Ayush.png',
    link: "https://www.linkedin.com/in/ayush-k-12634a238/",
  },
  {
    id: 4,
    fname: "Vishakha",
    lname: "Gautam",
    designation: "Product Manager",
    avatar: '/Assets/About_section/Team/Vishakha.png',
    link: "https://www.linkedin.com/in/vishakha-gautam-675969192/",
  },
  {
    id: 5,
    fname: "Sushmita",
    lname: "Dubey",
    designation: "Human Resources",
    avatar: '/Assets/About_section/Team/Sushmita.png',
    link: "https://www.linkedin.com/in/sushmita-dubey-79265a167?",
  },
  {
    id: 6,
    fname: "Manish ",
    lname: "Kumar",
    designation: "Compliance Manager",
    avatar: '/Assets/About_section/Team/Manesh.png',
    link: "https://www.linkedin.com/in/manish-kumar-mehra-62a642151/",
  },
  {
    id: 7,
    fname: "Bhargav Chandra  ",
    lname: "Mutyala",
    designation: "	Backend Lead",
    avatar: '/Assets/About_section/Team/Bhargav.png',
    link: "https://www.linkedin.com/in/bhargav-m-94784014b/",
  },
  {
    id: 8,
    fname: "Nagesh",
    lname: "Pannati",
    designation: "Senior Software Engineer",
    avatar: '/Assets/About_section/Team/Nagesh.png',
    link: "https://www.linkedin.com/in/nagesh-pannati-904503145/",
  },
  {
    id: 9,
    fname: "Sai Krishna",
    lname: "Janga",
    designation: "Junior Software Engineer",
    avatar: '/Assets/About_section/Team/Saik.png',
    link: "https://www.linkedin.com/in/janga-saikrishna-reddy-2575981b2/",
  },
  {
    id: 10,
    fname: "Sai Rahul ",
    lname: "Kommineni",
    designation: "Junior Software Developer",
    avatar: '/Assets/About_section/Team/SaiRahul.png',
    link: "https://www.linkedin.com/in/sai-rahul-kommineni-514a54123/",
  },
  {
    id: 11,
    fname: "Puja",
    lname: "Prasad",
    designation: "Customer Success Manager",
    avatar: '/Assets/About_section/Team/Puja.png',
    link: "https://www.linkedin.com/in/puja-prasad-08a924216/",
  },
  {
    id: 12,
    fname: "Sultana",
    lname: "Tabassum K",
    designation: "Customer Success Manager",
    avatar: '/Assets/About_section/Team/Sultana.png',
    link: "https://www.linkedin.com/in/sultana-tabassum-k-b37aa1153/",
  },
  {
    id: 20,
    fname: 'Joswin Vernon',
    lname: "Mascarenhas",
    designation: "Customer Success Manager",
    avatar: 'https://www.leremitt.com/Images/Team/Joswin.png',
    link: "https://www.linkedin.com/in/joswin-mascarenhas-311577167/",
  },
  {
    id: 13,
    fname: "Revati ",
    lname: "Jawale",
    designation: "Junior Software Engineer",
    avatar: '/Assets/About_section/Team/Revati.png',
    link: "https://www.linkedin.com/in/jawale-revati-13a327246/",
  },
  {
    id: 14,
    fname: "Matthew",
    lname: "Blessington K",
    designation: "Graphic Designer",
    avatar: '/Assets/About_section/Team/Matthew.png',
    link: "https://www.linkedin.com/in/matthew-blessington-011861293/",
  },
  {
    id: 20,
    fname: "Nipun",
    lname: "Sharma",
    designation: "Marketing Lead",
    avatar: '/Assets/About_section/Team/Nipun.png',
    link: "https://www.linkedin.com/in/nipunsharmaa/",
  },
  {
    id: 15,
    fname: "Anusha ",
    lname: "Pothureddypalli",
    designation: "Junior Software Engineer",
    avatar: '/Assets/About_section/Team/Anusha.png',
    link: "https://www.linkedin.com/in/anusha-pothureddypalli-0a16771b0/",
  },
  {
    id: 16,
    fname: "Irfan",
    lname: "Khan",
    designation: "Frontend Developer",
    avatar: '/Assets/About_section/Team/Irfan.png',
    link: "https://www.linkedin.com/in/irfan-khan-b63a66107/",
  },
  {
    id: 17,
    fname: "Mohan Chandra ",
    lname: "Mutyala",
    designation: "Trainee Software Engineer",
    avatar: '/Assets/About_section/Team/Mohan.png',
    link: "https://www.linkedin.com/in/mohan-mutyala-9201911b7/",
  },
  {
    id: 18,
    fname: "Palguna ",
    lname: "Suggu",
    designation: "Trainee Software Engineer",
    avatar: '/Assets/About_section/Team/Palguna.png',
    link: "https://www.linkedin.com/feed/",
  },

];

const foundersData = [
  {
    id: 1,
    Image: '/Assets/About_section/Team/Sheetal.png',
    name: "Sheetal ",
    lname: "Jain",
    inlink: "https://www.linkedin.com/in/jainsheetal/",
    title: "Co-founder & CEO",
  },
  {
    id: 2,
    Image: '/Assets/About_section/Team/Mahesh_Kumar.png',
    name: "Mahesh Kumar ",
    lname: "Barate",
    inlink: "https://www.linkedin.com/in/maheshbarate/",
    title: "Founder",
  },
  {
    id: 3,
    Image: '/Assets/About_section/Team/Hari_Cto.png',
    name: "Hari ",
    lname: "Ambati",
    inlink: "https://www.linkedin.com/in/hambati/",
    title: "Co-founder & CTO",
  },
];

const Founders = () => {
  return (
    <section
      style={{
        backgroundImage: `url(/assets/About_section/CoreTeam_bg.svg)`,
        backgroundColor: '#d3f0f5',
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <Box>
              <Typography pb={1} variant="h2" sx={{ fontWeight: "600", fontSize: '2.25rem' }}> Team</Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} pt={4}>
          {foundersData.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <Card sx={{ background: "#ebfaff", border: "none", borderRadius: "0", boxShadow: "none", height: "100%", display: "flex", flexDirection: "column", }}>
                <CardMedia>
                  <img src={item.Image} alt="img" width={"100%"} />
                </CardMedia>

                <CardContent sx={{ paddingBottom: "1px", flexGrow: 1 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body1" fontSize={'1.3rem'} sx={{ fontWeight: "700" }}>
                      <span style={{ color: "#142d82" }}>{item.name}</span>
                      <span style={{ color: "#00b8d4" }}>{item.lname}</span>
                    </Typography>
                    <Link href={item.inlink} target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon style={{ color: '#0072b1' }} />
                    </Link>
                  </Box>
                  <Typography variant="subtitle1" sx={{ paddingBottom: "5px", fontWeight: "300" }} > {item.title}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: "400", textAlign: "justify" }} >{item.text}</Typography>
                </CardContent>

                {/* <CardActions>
                  <CardActions disableSpacing>
                    <IconButton
                      sx={{ fontSize: "15px", color: "black" }}
                      onClick={() => handleIconClick(data[0].flink)}
                    >
                      <FaFacebookF />
                    </IconButton>
                    <IconButton
                      sx={{ fontSize: "15px", color: "black" }}
                      onClick={() => handleIconClick(data[0].tlink)}
                    >
                      <FaTwitter />
                    </IconButton>
                    <IconButton
                      sx={{ fontSize: "15px", color: "black" }}
                      onClick={() => handleIconClick(data[0].inlink)}
                    >
                      <FaLinkedinIn />
                    </IconButton>
                  </CardActions>
                </CardActions> */}
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box pt={6}>
          <div style={{ marginTop: "25px" }}>
            <Splide
              options={{
                perPage: 4, gap: 16, type: "loop", interval: 6000, autoplay: true,
                breakpoints: {
                  1280: {
                    perPage: 4, // Large screens (1280px and above)
                  },
                  960: {
                    perPage: 3, // Medium screens (960px - 1279px)
                  },
                  600: {
                    perPage: 2, // Small screens (600px - 959px)
                  },
                  599: {
                    perPage: 2, // Extra small screens (0px - 599px)
                  },
                },
              }}
            >
              {teamData.map((item) => (
                <SplideSlide key={item.id}>
                  <Card
                    sx={{
                      background: "#ebfaff", height: "100%", border: "none", boxShadow: "none", borderRadius: "0", transition: "background-color 0.8s, color 0.9s",
                      "&:hover": {
                        backgroundColor: "#142d82",
                        color: "white",
                      },
                    }}
                  >
                    <CardMedia
                      sx={{
                        overflow: "hidden", transition: "transform 1.2s",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <img src={item.avatar} alt="avatar" style={{ width: "100%" }} />
                    </CardMedia>
                    <CardContent sx={{ padding: "20px 10px 10px 10px", ":last-of-type": { paddingBottom: 2 }, }} >
                      <Box sx={{ display: "flex", justifyContent: "space-between", }} >
                        <Typography variant="body1" sx={{ fontWeight: "700" }}>
                          <span>{item.fname}</span> {""}
                          <span>{item.lname}</span>
                        </Typography>
                        <Typography variant="body1">
                          <Link href={item.link} target="_blank" rel="noopener noreferrer" >
                            <FaLinkedinIn />
                          </Link>
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ paddingBottom: "5px", fontWeight: "300" }} >
                        {item.designation}
                      </Typography>
                    </CardContent>
                  </Card>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default Founders;
