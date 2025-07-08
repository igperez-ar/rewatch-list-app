import { Box } from '@components/atoms';
import { SafeAreaBox } from '@components/native-components';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { IOS } from 'src/shared/constants';

type MainContainerProps = React.PropsWithChildren<{
  header?: React.ReactNode;
  footer?: React.ReactNode;
  barStyle?: 'light-content' | 'dark-content';
}>;

export const MainContainer: React.FC<MainContainerProps> = ({
  header,
  footer,
  children,
  barStyle = 'light-content',
}) => {
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <Box height="100%" backgroundColor="background">
        <SafeAreaBox>
          <KeyboardAvoidingView behavior={IOS ? 'padding' : undefined}>
            <Box
              height="100%"
              flexDirection="column"
              alignContent="space-between"
            >
              {header}
              <Box flex={1}>{children}</Box>
              {footer}
            </Box>
          </KeyboardAvoidingView>
        </SafeAreaBox>
      </Box>
    </>
  );
};
