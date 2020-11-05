import {HomeWork12} from "./HomeWork12";
import React from "react";
import { ReduxStoreProviderDecorator } from "./ReduxStoreProviderDecorator";

export default {
    title: "HomeWork12",
    component: HomeWork12,
    decorators: [ReduxStoreProviderDecorator]
}

export const BaseExample = () => {
    return <HomeWork12/>
}