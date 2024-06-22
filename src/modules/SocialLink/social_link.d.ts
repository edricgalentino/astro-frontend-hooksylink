export type SocialLink = {
  social_id: number;
  template_id: number;
  name: string;
  link: string; // as URL
  is_active: boolean;
  clicks: number; // everytime user clicks
  position: number; // as index
  created_at: string;
  updated_at: string;
};
