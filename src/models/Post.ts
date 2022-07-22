export type IPost = {
  type: "IMAGE" | "VIDEO",
  data: string[],
  username: string,
  avatar: string,
  description: string,
  id: string
}