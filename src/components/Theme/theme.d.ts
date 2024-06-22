import type { Background } from '../Background/background';
import type { Button } from '../Button/button';
import type { Font } from '../Font/font';

export type Theme = {
  theme_id: int;
  template_id: int;
  background: Background;
  button: Button;
  font: Font;
  created_at: string;
  updated_at: string;
};
