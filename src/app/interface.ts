
interface Video {

  id: number
  title: string
  category: string
  channel_id: number
  description: string
  duration: string
  published_date: string
  video_url: string
  tags: string|number
  thumbnail: string
  channel_name: string
  channel_picture: string
  path:string

}




interface Channel {
  channel_id: number
  name: string
  cover_image: string
  description: string
  profile_picture: string
  path:string

}

interface Theme {

  id:number
  title: string
  teaser: string
  body: string
  tag_id:string
  video_id:string
  thumbnail: string
  cover_image: string
  channel_name: string
  channel_cover: string
  channel_picture: string
  path:string
  external_links: string[]

}

interface Tag {
    name:string
    id:number

}

interface Category {
  id:number
  name:string

}


interface Playlist{
  playlist_id:string
  title:string
  category:string
  videos:string
  image:string
  date:string
  category_name:string
  path:string



}

interface NrVideosChannel{
  id:number
  number_of_videos:number
  name:string
}

interface Comments {
  "comment": string,
  "email": string,
  "username": string,
  "date": string,
  "id": string |number
  "comment_id": string |number,
  "reply_comment_id": string |number
}

interface Rating {
  count: number
}

interface PostMessage{
  "entity_id":[{"target_id":number}],
  "entity_type":[{"value":string}],
  "field_name":[{"value":string}],
  "comment_type":[{"target_id":string}],
  "comment_body":[{"value":string ,"format":"plain_text"}],
  "field_email":[{"value":"diog.azev97@gmail.com"}],
  "field_user_avatar":[{"value":"jkh"}],
  "field_username":[{"value":"Ola"}],
  "langcode": [{"value": string} ]

}

export {Video , Tag , Theme , Playlist, Channel , Category, NrVideosChannel, Comments, Rating};

