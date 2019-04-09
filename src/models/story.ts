import { Comment } from ".";

export interface Story {
  id: number;
  title: string;
  points?: number;
  user: string;
  time: number;
  time_ago: string;
  comments_count: 138;
  type: string;
  url: string;
  domain: string;
  comments?: Comment[];
}
