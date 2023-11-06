export interface ApiResponse<T> {
  data: T;
}

export interface ResponseData {
  content: string;
  id: number;
  language_code: string;
  originator: {
    description: string;
    id: number;
    language_code: string;
    master_id: number;
    name: string;
    url: string;
  };
  tags: string[];
  url: string;
}
