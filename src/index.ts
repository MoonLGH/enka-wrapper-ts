import fetch, {RequestInit} from "node-fetch";
import {baseurl, endPoint} from "./util/endpoints";
import type {PlayerInfo} from "./util/interfaces";
export class Client {
  options:RequestInit;
  constructor(options:RequestInit={}) {
    this.options = options;
  }

  async getUser(uid:string|number) {
    if (typeof uid !== "number" || typeof uid !== "string") throw new Error("Parameter `uid` must be a number|string.");

    const res = await fetch(baseurl+endPoint.user.replace("{UID}", `${uid}`), this.options);

    if (res.status !== 200) {
      throw new Error(`User with uid:${uid} was not found.`);
    }
    return (await res.json() as PlayerInfo);
  }
}
