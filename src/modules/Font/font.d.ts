export type Font = {
  font_id: number;
  theme_id: number;
  font_type:
    | 'DM Sans'
    | 'Inter'
    | 'Roboto'
    | 'Nunito'
    | 'Poppins'
    | 'Open Sans'
    | 'Lato'
    | 'Montserrat'
    | 'Raleway'
    | 'Oswald';
  font_color: string; // as #213321
  created_at: string;
  updated_at: string;
};
