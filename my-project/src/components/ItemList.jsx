import React from 'react';
import { Box, Heading, HStack, Text, Button } from '@chakra-ui/react';
import { useCostContext } from '../context/CostContext';

export default function ItemList() {
  const { items, deleteItem } = useCostContext();

  const handleDelete = async (id) => {
    await deleteItem(id);
  };

  return (
    <Box>
      <Heading size="md" mb={2}>Items</Heading>
      {items.length === 0 ? (
        <Text>No items added yet.</Text>
      ) : (
        items.map(item => (
          <HStack key={item.id} justify="space-between" py={1}>
            <Text>{item.name}: ${item.cost}</Text>
            <Button size="xs" colorScheme="red" onClick={() => handleDelete(item.id)}>
              Delete
            </Button>
          </HStack>
        ))
      )}
    </Box>
  );
}