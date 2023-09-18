import { useTheme, Box } from "@mui/material";
import { tokens } from "../theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "./StatBox";

const Row1Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap="20px"
      gridColumn="span 12"
    >
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="12,361"
          subtitle="Emails Sent"
          progress="0.10"
          increase="+14%"
          icon={
            <EmailIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: "26px",
              }}
            />
          }
        />
      </Box>

      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="20,361"
          subtitle="Sales Obtained"
          progress="0.45"
          increase="+15%"
          icon={
            <PointOfSaleIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: "26px",
              }}
            />
          }
        />
      </Box>

      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="5,268"
          subtitle="New Clients"
          progress="0.20"
          increase="+9%"
          icon={
            <PersonAddIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: "26px",
              }}
            />
          }
        />
      </Box>

      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="1,325.154"
          subtitle="Traffic Inbound"
          progress="0.80"
          increase="+43%"
          icon={
            <TrafficIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: "26px",
              }}
            />
          }
        />
      </Box>
    </Box>
  );
};

export default Row1Dashboard;
