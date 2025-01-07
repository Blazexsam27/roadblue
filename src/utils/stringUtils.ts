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

  convertToBlobAndUrl = (data: string, type: string) => {
    try {
      const blob = new Blob([data], {
        type,
      });

      const url = URL.createObjectURL(blob);

      return { blob, url };
    } catch (error: any) {
      throw new Error(error);
    }
  };

  // export data to json and returns a blob and its url
  exportJSON = (data: any) => {
    try {
      const stringData = JSON.stringify(data, null, 2);
      return this.convertToBlobAndUrl(stringData, "application/json");
    } catch (error: any) {
      throw new Error(error);
    }
  };

  // export data to xml
  exportToXml = (data: any) => {
    try {
      const xmlData = this.jsonToXML(data);
      return this.convertToBlobAndUrl(xmlData, "application/xml");
    } catch (error: any) {
      throw new Error(error);
    }
  };

  // convert data into xml format
  jsonToXML = (json: string, indent = ""): string => {
    try {
      const isArray = Array.isArray(json);
      const keys = isArray ? Object.keys(json) : Object.keys(json || {});

      return keys
        .map((key: any) => {
          const value = json[key];
          const tag = isArray ? "item" : key;

          if (typeof value === "object" && value !== null) {
            return `${indent}<${tag}>\n${this.jsonToXML(
              value,
              indent + "  "
            )}\n${indent}</${tag}>`;
          }

          return `${indent}<${tag}>${value}</${tag}>`;
        })
        .join("\n");
    } catch (error: any) {
      throw new Error(error);
    }
  };
}

export default new Utils();
