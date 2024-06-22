import type { Contact } from '../Contact/contact';
import type { Lock } from '../Lock/lock';

export type Content = {
  content_id: number;
  template_id: number;
  user_id: number;
  type: 'HEADER' | 'BASE' | 'FORM';
  thumbnail?: string;
  title: string;
  link: string;
  is_active: boolean;
  is_deleted: boolean;
  clicks: number;
  is_deleted: boolean;
  contact?: Contact;
  is_locked: boolean;
  lock: Lock[];
  is_prioritized: boolean;
  priority_type?: 'SPOTLIGHT' | 'ANIMATE';
  priority_animation?: 'POP' | 'BOUNCE' | 'SWIPE';
  is_scheduled: boolean;
  start_show_link?: string;
  end_show_link?: string;
  timezone?: string;
  created_at: string;
  updated_at: string;
};
