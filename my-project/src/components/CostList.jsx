import React from 'react';
import { Box, Heading, HStack, Text, Button } from '@chakra-ui/react';
import { useCostContext } from '../context/CostContext';

export default function CostList() {
  const { costs, deleteCost } = useCostContext();

  const handleDelete = async (id) => {
    await deleteCost(id);
  };

  return (
    <Box>
      <Heading size="md" mb={2}>Other Costs</Heading>
      {costs.length === 0 ? (
        <Text>No other costs added yet.</Text>
      ) : (
        costs.map(cost => (
          <HStack key={cost.id} justify="space-between" py={1}>
            <Text>{cost.description}: ${cost.amount}</Text>
            <Button size="xs" colorScheme="red" onClick={() => handleDelete(cost.id)}>
              Delete
            </Button>
          </HStack>
        ))
      )}
    </Box>
  );
}