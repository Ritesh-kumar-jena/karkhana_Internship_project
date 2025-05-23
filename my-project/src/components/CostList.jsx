import React from 'react';
import { Box, Heading, HStack, Text, Button } from '@chakra-ui/react';
import { useCostContext } from '../contex/CostContex';
import axios from 'axios';

export default function CostList() {
  const { costs, fetchData } = useCostContext();

  const handleDelete = async (id) => {
    await axios.delete(`/api/costs/${id}`);
    fetchData();
  };

  return (
    <Box>
      <Heading size="md">Other Costs</Heading>
      {costs.map(cost => (
        <HStack key={cost.id} justify="space-between">
          <Text>{cost.description}: ${cost.amount}</Text>
          <Button size="xs" onClick={() => handleDelete(cost.id)}>Delete</Button>
        </HStack>
      ))}
    </Box>
  );
}
