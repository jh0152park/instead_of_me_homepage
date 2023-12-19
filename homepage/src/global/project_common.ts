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

export const phoneState = atom<boolean>({
    default: false,
    key: "PhoneState",
});

export const showSample = atom<boolean>({
    default: false,
    key: "ShowSample",
});

export interface ISampleKey {
    cafe: string;
    flower: string;
    glamping: string;
    hospital: string;
    logistics: string;
    tax: string;
}

export const SampleKeys = [
    "cafe",
    "flower",
    "glamping",
    "hospital",
    "logistics",
    "tax",
];

interface IObjSig {
    [key: string]: string;
}

export const sampleURL: IObjSig = {
    cafe: "https://jh0152park.github.io/instead_of_me_cafe/",
    flower: "https://jh0152park.github.io/instead_of_me_flower_shop/",
    glamping: "https://jh0152park.github.io/instead_of_me_glamping/",
    hospital: "https://lovers2020.github.io/instead_of_me_hospital/",
    logistics: "https://yuhyeon0516.github.io/Instead_of_me_logistics/",
    tax: "https://yuhyeon0516.github.io/Instead_of_me_tax-accountant/",
};
