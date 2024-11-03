export interface BlogAuthor {
  _id: string;
  username: string;
}

export interface BlogInterface {
  _id: string;
  title: string;
  summary: string;
  imageUrl: string;
  content: string;
  date: string;
  author: BlogAuthor;
  tag?: string[];
  label: string;
  description: string;
  link: string;
  readTime: string;
}

export interface UserInfo {
  name?: string;
  email?: string;
  username?: string;
  id?: string;
}
