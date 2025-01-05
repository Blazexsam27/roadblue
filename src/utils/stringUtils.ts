import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string";

class Utils {
  // encode the json data into base64 string to append into share link
  encodeToBase64 = (data: any) => {
    return btoa(JSON.stringify(data));
  };

  // decode the base64 string to json data
  decodeToJSON = (data: string) => {
    return JSON.parse(atob(data));
  };

  // encode using lz-string (compressed string)
  encodeToLzString = (data: any) => {
    return compressToEncodedURIComponent(JSON.stringify(data));
  };

  // decode using lz-string
  decodeFromLzString = (data: string) => {
    return decompressFromEncodedURIComponent(data);
  };
}

export default new Utils();
