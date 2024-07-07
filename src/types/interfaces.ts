export interface UserInfo {
  name?: string;
  email?: string;
  username?: string;
  id?: string;
}

export interface BlogPostInfo {
  _id: string;
  title: string;
  summary: string;
  cover: string;
  content: string;
  createdAt: string;
  author: {
    _id: string;
    username: string;
  };
}
