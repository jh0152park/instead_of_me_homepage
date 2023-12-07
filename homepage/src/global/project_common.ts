import { atom } from "recoil";

export enum languageCode {
    "KOR",
    "ENG",
}

export const languageState = atom<languageCode>({
    key: "language",
    default: 0,
});

export const displayResolution = atom<string>({
    key: "DisplayResolution",
    default: "web",
});

export const languageSelected = atom<boolean>({
    default: false,
    key: "LanguageSelected",
});
