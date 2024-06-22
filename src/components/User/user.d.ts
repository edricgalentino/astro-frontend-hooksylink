import type { Link } from '../Link/link';
import type { Template } from '../Template/template';

export type User = {
  user_id: int;
  templates: Template[];
  links: Link[];
  username: string;
  email: string;
  password: string;
  name: string;
  plan: 'FREE' | 'STARTER' | 'PRO';
  is_onboarded: boolean;
  personal_actions: string[];
  created_at: string;
  updated_at: string;
};
