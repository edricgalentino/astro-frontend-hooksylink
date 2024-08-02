export type Font = {
  font_id: number;
  theme_id: number;
  font_type: FontFamilyType;
  font_color: string; // as #213321
  created_at: string;
  updated_at: string;
};

export type FontFamilyType =
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

// npm i @fontsource/dm-sans @fontsource/inter @fontsource/roboto @fontsource/nunito @fontsource/poppins @fontsource/open-sans @fontsource/lato @fontsource/montserrat @fontsource/raleway @fontsource/oswald
