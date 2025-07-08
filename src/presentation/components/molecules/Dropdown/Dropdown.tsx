import { Box, Icon, Text, TouchableOpacity } from '@components/index';
import { useState } from 'react';
import { FlatList } from 'react-native';

type DropdownProps<T> = {
  label?: string;
  placeholder?: string;
  value?: T;
  data: T[];
  onPress?: (item: T) => void;
  labelExtractor: (item: T) => string;
  keyExtractor: (item: T) => string;
};

export const Dropdown = <T,>({
  label,
  placeholder = 'Select an option',
  value,
  data,
  onPress,
  labelExtractor,
  keyExtractor,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = (item: T) => {
    setIsOpen(false);
    onPress?.(item);
  };

  return (
    <>
      {label ? (
        <Text variant="label" mb="sm">
          {label}
        </Text>
      ) : null}
      <TouchableOpacity onPress={() => setIsOpen(open => !open)}>
        <Box
          flexDirection="row"
          alignItems="center"
          borderWidth={1}
          backgroundColor="surface"
          borderColor="divider"
          borderRadius={12}
          p="md-plus"
        >
          <Text flex={1} color={value ? 'textPrimary' : 'textDisabled'}>
            {value ? labelExtractor(value) : placeholder}
          </Text>
          <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} size={20} />
        </Box>
      </TouchableOpacity>
      {isOpen && (
        <Box
          mt="sm"
          borderWidth={1}
          borderColor="divider"
          borderRadius={8}
          backgroundColor="background"
          overflow="hidden"
          maxHeight={200}
        >
          <FlatList
            data={data}
            keyExtractor={keyExtractor}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handlePress(item)}>
                <Box
                  p="md-plus"
                  backgroundColor={item === value ? 'surface' : 'background'}
                >
                  <Text>{labelExtractor(item)}</Text>
                </Box>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
          />
        </Box>
      )}
    </>
  );
};
