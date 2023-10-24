import { atom } from "recoil";

export enum languageCode {
    "KOR",
    "ENG",
}

export const languageState = atom<languageCode>({
    key: "language",
    default: 0,
});
