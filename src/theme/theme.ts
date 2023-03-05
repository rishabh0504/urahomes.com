import { badgeStyles } from '@/components/badge/badge';
import { buttonStyles } from '@/components/button/button';
import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './style';

export default extendTheme(
  globalStyles, // Global styles
  buttonStyles, // Button styles
  badgeStyles // Badge styles
);
