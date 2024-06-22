import type { SocialLink } from '../SocialLink/social_link';

export type Settings = {
  settings_id: number;
  template_id: number;
  social_icons: {
    socials: SocialLink[];
    position: 'TOP' | 'BOTTOM';
  };
  banner: {
    banner_id: number;
  };
  sensitive_material: {
    is_sensitive: boolean;
    age_restriction: '18' | '21' | '25' | 'SENSITIVE CONTENT';
  };
  SEO: {
    title: string;
    description: string;
  };
  favicon: string; // https://google.com means custom favicon
  privacy_policy: string; // https://google.com
  terms_of_use: string; // https://google.com
  is_can_subscribe: boolean;
  created_at: string;
  updated_at: string;
};
