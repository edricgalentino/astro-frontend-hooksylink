export type LikeDislike = {
  like_id: number;
  user_id: number;
  template_id: number;
  is_like: boolean; // true if it's a like, false if it's a dislike
  created_at: string;
  updated_at: string;
};
