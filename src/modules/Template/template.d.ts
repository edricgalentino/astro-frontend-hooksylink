import type { Content } from '../Content/content';
import type { Theme } from '../Theme/theme';

export type Template = {
  template_id: int;
  user_id: int;
  link: string;
  title: string;
  description: string;
  profile_image: string;
  content: Content[];
  status: 'PUBLISH' | 'DRAFT';
  is_private: boolean;
  is_deleted: boolean;
  is_watermark_removed: boolean;
  type: 'PRIVATE' | 'SHARED';
  like: number;
  view: number;
  theme: Theme;
  created_at: string;
  updated_at: string;
};
