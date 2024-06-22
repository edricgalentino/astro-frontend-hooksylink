export type Contact = {
  contact_id: number;
  content_id: number;
  request_user_id: number;
  receive_user_id: number;
  form_type: 'CONTACT' | 'REGISTER_EVENT';
  fields: ContactField[];
  email: string;
  spreadsheet_url?: string;
  description?: string;
  thanks_message?: string;
  created_at: string;
  updated_at: string;
};

export type ContactField = {
  enabled: boolean;
  label: 'NAME' | 'EMAIL' | 'PHONE' | 'MESSAGE' | 'COUNTRY';
  required: boolean;
  type: 'TEXT' | 'EMAIL' | 'PHONE' | 'TEXT_AREA' | 'COUNTRY';
};
