import { Box, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../../components/TabPanel";
import { DataGrid } from "@mui/x-data-grid";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { useState } from "react";

function Analytics(){
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
    <Typography sx={styles.pageTitle} variant="h5">
      Analytics
    </Typography>
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Overview" id="tab-0" />
        <Tab label="Content" id="tab-1" />
        <Tab label="Audience" id="tab-2" />
        <Tab label="Revenue" id="tab-3" />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
        <Box sx={styles.overviewContainer}>
          <Box sx={styles.statsContainer}>
            <Typography variant="h5">
              Your channel got 23,888 views in the last 28 days.
            </Typography>
            
          </Box>
        </Box>
       
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography>Test2</Typography>

      </TabPanel>
      <TabPanel value={value} index={2}>
      <Typography>Test3</Typography>
        
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Typography>Test4</Typography>

      </TabPanel>
  </Box>
  )
}



/** @type {import ("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2,
  },
};

export default Analytics;
