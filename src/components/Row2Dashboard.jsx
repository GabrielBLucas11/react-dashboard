import { Box, useTheme, Typography, IconButton } from "@mui/material";
import { tokens } from "../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "./LineChart";

const Row2Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box gridColumn="span 8" gridRow="span 2">
      <Box backgroundColor={colors.primary[400]}>
        <Box
          p="0 30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Revenue Generated
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.greenAccent[500]}
            >
              $59,342,32
            </Typography>
          </Box>

          <Box>
            <IconButton>
              <DownloadOutlinedIcon
                sx={{
                  fontSize: "26px",
                  color: colors.greenAccent[500],
                }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box height="250px">
          <LineChart isDashboard={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default Row2Dashboard;
