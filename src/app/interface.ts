
interface Video {

  id: number
  title: string
  category: [number]
  channel_id: number
  description: string
  duration: string
  published_date: string
  video_url: string
  tags: [number]
  thumbnail: string
  channel_name: string
  channel_picture: string

}



interface Channel {
  id: number
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
  tag_id:[number]
  video_id:[number]
  thumbnail: string
  cover_image: string

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
  title:string
  category:[number]
  tags:[number]

}

export {Video , Tag , Theme , Playlist, Channel , Category};

