import { useTheme, Box, Typography } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import BarChart from "./BarChart";
import GeographyChart from "./GeographyChart";

const Row3Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
      gridColumn="span 12"
      gridRow="span 2"
    >
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography variant="h5" fontWeight="600">
          Campaign
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="25px"
        >
          <ProgressCircle size="125" />
          <Typography
            variant="h5"
            color={colors.greenAccent[500]}
            sx={{ mt: "15px" }}
          >
            $12,345 revenue generated
          </Typography>
          <Typography variant="h5" fontWeight="600">
            Includes extra misc expenditures and costs
          </Typography>
        </Box>
      </Box>

      {/*  */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ p: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Box height="250px" mt="-20px">
          <BarChart isDashboard={true} />
        </Box>
      </Box>

      {/*  */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
          Geography Base Traffic
        </Typography>
        <Box height="200px">
          <GeographyChart isDashboard={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default Row3Dashboard;
