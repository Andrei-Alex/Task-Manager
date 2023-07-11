import React from "react";
import {render} from "@testing-library/react";
import renderer from "react-test-renderer";
import { screen } from "@testing-library/dom";
import LinkList from "./LinkList";
import {NavElement} from "../../../../libs/sharedTypes";

const mockedLinks: NavElement[]= [{
    id:'link-1',
    name: 'Main Title',
    navigateTo: 'PageOne'
    },
    {
        id:'link-2',
        name: 'Second Title',
        navigateTo: 'PageTwo'
    }]
describe("NavLinks", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<LinkList listElements={mockedLinks}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("Should Display links", () => {
        render(<LinkList listElements={mockedLinks}/>);
        const firstTitle = screen.getByText("Main Title");
        expect(firstTitle).toBeInTheDocument();
        const secondTitle = screen.getByText("Second Title")
        expect(secondTitle).toBeInTheDocument();
    });
});
