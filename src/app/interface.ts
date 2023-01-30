
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

}


interface Channel {
  channel_id: number
  name: string
  cover_image: string
  description: string
  profile_picture: string

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



}

interface NrVideosChannel{
  id:number
  number_of_videos:number
  name:string
}

interface Comments {
  avatar: string
  name: string
  email: string
  body: string
  date: string
}

interface Rating {
  count: number
}

export {Video , Tag , Theme , Playlist, Channel , Category, NrVideosChannel, Comments, Rating};

