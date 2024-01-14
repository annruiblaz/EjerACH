export interface infoVecinos {
  id: number;
  "file-name": string;
  name: Name;
  personality: Personality;
  "birthday-string": string;
  birthday: string;
  species: string;
  gender: Gender;
  subtype: Subtype;
  hobby: Hobby;
  "catch-phrase": string;
  icon_uri: string;
  image_uri: string;
  "bubble-color": string;
  "text-color": string;
  saying: string;
  "catch-translations": CatchTranslations;
}

export interface CatchTranslations {
  "catch-USen": string;
  "catch-EUen": string;
  "catch-EUde": string;
  "catch-EUes": string;
  "catch-USes": string;
  "catch-EUfr": string;
  "catch-USfr": string;
  "catch-EUit": string;
  "catch-EUnl": string;
  "catch-CNzh": string;
  "catch-TWzh": string;
  "catch-JPja": string;
  "catch-KRko": string;
  "catch-EUru": string;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}

export enum Hobby {
  Education = "Education",
  Fashion = "Fashion",
  Fitness = "Fitness",
  Music = "Music",
  Nature = "Nature",
  Play = "Play",
}

export interface Name {
  "name-USen": string;
  "name-EUen": string;
  "name-EUde": string;
  "name-EUes": string;
  "name-USes": string;
  "name-EUfr": string;
  "name-USfr": string;
  "name-EUit": string;
  "name-EUnl": string;
  "name-CNzh": string;
  "name-TWzh": string;
  "name-JPja": string;
  "name-KRko": string;
  "name-EUru": string;
}

export enum Personality {
  Cranky = "Cranky",
  Jock = "Jock",
  Lazy = "Lazy",
  Normal = "Normal",
  Peppy = "Peppy",
  Smug = "Smug",
  Snooty = "Snooty",
  Uchi = "Uchi",
}

export enum Subtype {
  A = "A",
  B = "B",
}
