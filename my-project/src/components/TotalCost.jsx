import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useCostContext } from '../contex/CostContex';

export default function TotalCost() {
  const { items, costs } = useCostContext();
  const total = [...items.map(i => i.cost), ...costs.map(c => c.amount)].reduce((a, b) => a + b, 0);

  return (
    <Box mt={4}>
      <Text fontWeight="bold">Total Cost: ${total.toFixed(2)}</Text>
    </Box>
  );
}
