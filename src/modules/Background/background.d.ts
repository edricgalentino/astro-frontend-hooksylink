export type Background = {
  background_id: number;
  theme_id: number;
  type: 'FLAT COLOUR' | 'GRADIENT';
  color: string; // as #213321
  dekstop_color: string; // as #232132
  image?: string; // https://google.com | if image null, set as default color.
  dekstop_image?: string; // https://google.com | if image null, set as default color
  created_at: string;
  updated_at: string;
};
