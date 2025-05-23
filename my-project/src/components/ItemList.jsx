import React from 'react';
import { Box, Heading, HStack, Text, Button } from '@chakra-ui/react';
import { useCostContext } from '../contex/CostContex';
import axios from 'axios';

export default function ItemList() {
  const { items, fetchData } = useCostContext();

  const handleDelete = async (id) => {
    await axios.delete(`/api/items/${id}`);
    fetchData();
  };

  return (
    <Box>
      <Heading size="md">Items</Heading>
      {items.map(item => (
        <HStack key={item.id} justify="space-between">
          <Text>{item.name}: ${item.cost}</Text>
          <Button size="xs" onClick={() => handleDelete(item.id)}>Delete</Button>
        </HStack>
      ))}
    </Box>
  );
}
