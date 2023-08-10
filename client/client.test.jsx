import * as React from 'react';
import { createRoot} from "react-dom/client";
import { Home } from "./index";
import {act} from "react-dom/test-utils";

describe("client test suite", () => {

    it("home gets rendered", () => {
        const element = document.createElement("div");

        const root = createRoot(element);

        act( () => {
            root.render(<Home/>);
        });

        expect(element.querySelector("h1")?.innerHTML).toEqual("WorkSpace");
        expect(element.innerHTML).toMatchSnapshot();
    });

    });
