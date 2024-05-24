export const hamburger="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg";
export const youtubeLogo="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500";
export const userlogo="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=";
const GOOGLE_API_KEY="AIzaSyAMvwB8_7CPBX3ch9YuYNh82BCfjTg9uus";

export const HOMEPAGE_VIDEOS_API='https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=40&regionCode=IN&key='+GOOGLE_API_KEY;

export const COMMENTS_API="https://www.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY +"&textFormat=plainText&maxResults=50&part=snippet&videoId=";

export const VIDEO_INFO_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&key="+GOOGLE_API_KEY+"&id="

export const YOUTUBE_SEARCH_SUGGESTIONS_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_SEARCH_RESULTS_API="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key="+GOOGLE_API_KEY+"&q="

export const OFFSET_LIVE_CHAT=30;