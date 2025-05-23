import React from 'react';
import { Box, Button, Heading, VStack, HStack, Text } from '@chakra-ui/react';
import { useCostContext } from '../contex/CostContex';
import ItemList from '../components/ItemList';
import CostList from '../components/CostList';
import TotalCost from '../components/TotalCost';

export default function Dashboard() {
  const { fetchData } = useCostContext();

  return (
    <Box p={4} maxW="600px" mx="auto">
      <Heading mb={4}>Project Cost Tracker</Heading>
      <VStack spacing={4} align="stretch">
        <HStack>
          <Button colorScheme="blue" onClick={() => {
            const name = prompt("Item name?");
            const cost = parseFloat(prompt("Item cost?"));
            fetch('/api/items', { method: 'POST', body: JSON.stringify({ name, cost }) }).then(fetchData);
          }}>
            Add Item
          </Button>
          <Button colorScheme="green" onClick={() => {
            const description = prompt("Cost description?");
            const amount = parseFloat(prompt("Cost amount?"));
            fetch('/api/costs', { method: 'POST', body: JSON.stringify({ description, amount }) }).then(fetchData);
          }}>
            Add Other Cost
          </Button>
        </HStack>
        <ItemList />
        <CostList />
        <TotalCost />
      </VStack>
    </Box>
  );
}
