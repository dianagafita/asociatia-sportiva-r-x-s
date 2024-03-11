import { Typography, Box } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box mb="30px" backgroundColor="var(--main-color)">
      <Typography
        variant="h3"
        color="white"
        fontWeight="bold"
        sx={{
          m: "1rem 0 5px 0",
          fontSize: { xs: "1.5rem", sm: "2rem" }, // Define font size for different screen sizes
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color="var(--second-color)"
        sx={{
          fontSize: { xs: "1rem", sm: "1.5rem" }, // Define font size for different screen sizes
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
