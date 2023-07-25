import React from "react";
import {render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { screen } from "@testing-library/dom";
import LinkList from "./LinkList";
import {RouterContext} from "next/dist/shared/lib/router-context";
import {routerMock} from "@/__MOCK__";
jest.mock('next/router');
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
        expect(firstTitle).toHaveAttribute('href', 'PageOne');
        const secondTitle = screen.getByText("Second Title")
        expect(secondTitle).toBeInTheDocument();
        expect(secondTitle).toHaveAttribute('href', 'PageTwo');
    });
    it('calls the push function when clicked', () => {
        const mockHandleLinkClick = jest.fn();
        render(
        <RouterContext.Provider value={routerMock({ pathname: '/', push: mockHandleLinkClick })}>
            <LinkList listElements={mockedLinks} />
        </RouterContext.Provider>
        );
        const linkElement = screen.getByText("Main Title");
        fireEvent.click(linkElement);
        expect(mockHandleLinkClick).toHaveBeenCalledTimes(1);

    });
});


