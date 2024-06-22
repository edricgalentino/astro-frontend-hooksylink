export type Lock = {
  lock_id: number;
  content_id: number;
  locked_by:
    | 'SUBSCRIBE'
    | 'MINIMUM-DATE OF BIRTH'
    | 'SENSITIVE CONTENT'
    | 'CODE';
  description: string;
  unlock_by: 'is_subscribe' | '12-12-2003' | 'checked' | 123421;
  is_unlock: boolean;
  created_at: string;
  updated_at: string;
};
