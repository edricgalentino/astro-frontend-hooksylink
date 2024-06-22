export type Button = {
  button_id: number;
  theme_id: number;
  type: 'FILL' | 'OUTLINE' | 'SOFT SHADOW' | 'HARD SHADOW';
  rounded: 'NOT' | 'MEDIUM' | 'FULL';
  color: string; // as #213321
  font_color: string; // as #213321
  created_at: string;
  updated_at: string;
};
