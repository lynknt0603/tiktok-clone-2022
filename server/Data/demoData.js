const baseUrl = process.env.PUBLIC_BASE_URL || `http://localhost:${process.env.PORT || 5000}`;

const demoUsers = [
  {
    _id: "64a000000000000000000001",
    id: "64a000000000000000000001",
    name: "Tài khoản demo 01",
    nickname: "demo_video_01",
    avatar: `${baseUrl}/demo-assets/images/avatar-01.png`,
    tick: true,
    follower_count: 12500,
    following_count: 12,
    heart_count: 48300,
  },
  {
    _id: "64a000000000000000000002",
    id: "64a000000000000000000002",
    name: "Tài khoản demo 02",
    nickname: "demo_video_02",
    avatar: `${baseUrl}/demo-assets/images/avatar-02.jpeg`,
    tick: true,
    follower_count: 8200,
    following_count: 8,
    heart_count: 27100,
  },
  {
    _id: "64a000000000000000000003",
    id: "64a000000000000000000003",
    name: "Tài khoản demo 03",
    nickname: "demo_video_03",
    avatar: `${baseUrl}/demo-assets/images/avatar-03.png`,
    tick: true,
    follower_count: 5600,
    following_count: 5,
    heart_count: 19400,
  },
];

const demoTrendy = [
  {
    _id: "65a000000000000000000001",
    id: "65a000000000000000000001",
    name: "xuhuong",
    description: "Nội dung nổi bật",
    watch_count: 62000,
  },
  {
    _id: "65a000000000000000000002",
    id: "65a000000000000000000002",
    name: "tintuc",
    description: "Tin tức và đời sống",
    watch_count: 41000,
  },
];

const demoMusic = [
  {
    _id: "66a000000000000000000001",
    id: "66a000000000000000000001",
    name: "Âm thanh demo",
    singer: "TikTok Clone",
    music: `${baseUrl}/demo-assets/audio/demo-audio.mp3`,
    thumbnail: `${baseUrl}/demo-assets/images/music-cover.jpg`,
    video_count: 3,
  },
];

const demoVideos = [
  {
    _id: "67a000000000000000000001",
    id: "67a000000000000000000001",
    author: demoUsers[0],
    music: demoMusic[0],
    trendy: demoTrendy[0],
    description: "Video demo có sẵn trong project.",
    video: `${baseUrl}/demo-assets/video/demo-video-01.mp4`,
    heart_count: 1820,
    comment_count: 96,
    share_count: 48,
    watch_count: 12600,
    isPrivate: false,
  },
  {
    _id: "67a000000000000000000002",
    id: "67a000000000000000000002",
    author: demoUsers[1],
    music: demoMusic[0],
    trendy: demoTrendy[1],
    description: "Nội dung mẫu chạy khi chưa kết nối MongoDB.",
    video: `${baseUrl}/demo-assets/video/demo-video-02.mp4`,
    heart_count: 970,
    comment_count: 41,
    share_count: 23,
    watch_count: 7300,
    isPrivate: false,
  },
  {
    _id: "67a000000000000000000003",
    id: "67a000000000000000000003",
    author: demoUsers[2],
    music: demoMusic[0],
    trendy: demoTrendy[0],
    description: "Khởi động backend để xem bộ video demo đi kèm project.",
    video: `${baseUrl}/demo-assets/video/demo-video-03.mp4`,
    heart_count: 615,
    comment_count: 28,
    share_count: 17,
    watch_count: 4900,
    isPrivate: false,
  },
];

module.exports = {
  demoMusic,
  demoTrendy,
  demoUsers,
  demoVideos,
};
