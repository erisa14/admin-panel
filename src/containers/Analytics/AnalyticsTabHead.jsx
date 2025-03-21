import { Box, Button, Typography } from "@mui/material";

function AnalyticsTabHead({ title, value, icon, subtitle, children, onClick }) {
  return (
    <Button onClick={onClick} sx={styles.container}>
      <Typography sx={styles.tabTitle}>{title}</Typography>
      <Box sx={styles.tabValueRow}>
        <Typography sx={styles.tabValue}>{value}</Typography>
        {icon}
      </Box>
      <Typography sx={styles.tabSubtitle}>{subtitle}</Typography>
      {children}
    </Button>
  );
}

/** @type {import ("@mui/material").SxProps} */
const styles = {
  container: {
    display: "flex",
    alignSelf: "center",
    flexDirection: "column",
    color: "neutral.normal",
    textTransform: "capitalize",
    py: 2,
    border: 1,
    borderColor: "neutral.medium",
    flexGrow: 1,
  },
  tabTitle: {
    fontSize: "0.8rem",
    fontWeight: 500,
  },
  tabValueRow: {
    display: "flex",
    alignItems: "center",
  },
  tabValue: {
    fontSize: { xs: "1rem", md: "1.5rem" },
    color: "neutral.main",
    mr: 1,
  },
  tabSubtitle: {
    fontSize: "0.6rem",
    fontStyle: "italic",
    textTransform: "lowercase",
    display: { xs: "none", md: "inline" },
  },
};

export default AnalyticsTabHead;
