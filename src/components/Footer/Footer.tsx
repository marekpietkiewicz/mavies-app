import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Footer(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{ mt: 8, mb: 4 }}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/marek-pietkiewicz-b7132813/"
        target="_blank"
      >
        Marek Pietkiewicz
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Footer;
