import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatisticCard from "../components/StatisticCard";
import Reviews from "../components/Reviews";
import UserTable from "../components/UserTable";
import { FaUser, FaRocket, FaShoppingCart, FaThumbsUp } from "react-icons/fa";

const Index = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flex="1" p={4}>
        <Header />
        <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4}>
          <GridItem>
            <StatisticCard icon={FaUser} value="1600" label="Users Active" percentage="+55%" />
          </GridItem>
          <GridItem>
            <StatisticCard icon={FaRocket} value="357" label="Click Events" percentage="+124%" />
          </GridItem>
          <GridItem>
            <StatisticCard icon={FaShoppingCart} value="2340" label="Purchases" percentage="+14%" />
          </GridItem>
          <GridItem>
            <StatisticCard icon={FaThumbsUp} value="940" label="Likes" percentage="+90%" />
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={4}>
          <GridItem colSpan={2}>
            <UserTable />
          </GridItem>
          <GridItem>
            <Reviews />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;