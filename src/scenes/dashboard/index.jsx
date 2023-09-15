import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/LineChart";
import Row1Dashboard from "../../components/Row1Dashboard";
import Row2Dashboard from "../../components/Row2Dashboard";
import TransactionsDashboard from "../../components/TransactionsDashboard";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your Dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon
              sx={{
                mr: "10px",
              }}
            />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Drid and Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Row1Dashboard /> {/* Row 1 */}
        <Row2Dashboard /> {/* Row 2 */}
        <TransactionsDashboard /> {/* Transactions */}
      </Box>
    </Box>
  );
};

export default Dashboard;
