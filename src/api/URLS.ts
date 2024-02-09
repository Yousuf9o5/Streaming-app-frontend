export default class URLS {
  // static readonly baseUrlV1 = "http://192.168.200.19:3000/api/v1";

  static readonly root = "http://192.168.0.112:3001";

  static readonly baseUrlV1 = "http://192.168.0.112:3001/api/v1";

  static readonly home = "";

  static readonly login = "user/login";

  static readonly signup = "user/signup";

  static readonly GetUserMovies = "user/get/movies";

  static readonly UserInformation = "user/get/my-information";

  // room apis
  static readonly CreateRoom = "room/create";
  static readonly GetRoomById = "room/get/by-id/";
  static readonly GetRoomMembers = "room/get/members";

  // movie id
  static readonly GetMovieById = "movie/get/by-id/";
}
