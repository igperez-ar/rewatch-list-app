import { Box, Icon, Text, TouchableOpacity } from '@components/index';
import React from 'react';
import { ICON_RATING_MAP } from 'src/shared/constants';

type RatingInputProps = {
  value: number;
  onPress: (value: number) => void;
  testID?: string;
};

export const RatingInput: React.FC<RatingInputProps> = ({ value, onPress, testID = 'rating_input' }) => {
  return (
    <>
      <Text variant="label">Rating</Text>
      <Box
        flexDirection="row"
        backgroundColor="surface"
        borderRadius={12}
        mt="sm"
        p="md-plus"
      >
        {ICON_RATING_MAP.map((item, index) => (
          <React.Fragment key={item.icon}>
            {index > 0 ? (
              <Box
                width={1}
                backgroundColor="divider"
                marginHorizontal="lg-plus"
              />
            ) : null}
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => onPress(index)}
              testID={`${testID}_item_${index}`}
            >
              <Box alignItems="center" opacity={index === value ? 1 : 0.3}>
                <Icon name={item.icon} size={24} />
                <Text variant="body" mt="sm">
                  {item.name}
                </Text>
              </Box>
            </TouchableOpacity>
          </React.Fragment>
        ))}
      </Box>
    </>
  );
};
