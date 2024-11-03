export interface BlogAuthor {
  _id: string;
  username: string;
}

export interface BlogInterface {
  _id: string;
  title: string;
  summary: string;
  cover: string;
  content: string;
  createdAt: string;
  author: BlogAuthor;
  tag?: string;
  imageUrl: string;
  label: string;
  description: string;
  link: string;
  readTime: string;
  date: string;
}

export interface UserInfo {
  name?: string;
  email?: string;
  username?: string;
  id?: string;
}
