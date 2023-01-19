import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import * as store from "../../mobx/RootStore";
import { routes } from "../../utils/router";

window.scrollTo = jest.fn();

const shoppingCartItem = { id: 1, src: "", srcSmall: "" };

const router = createMemoryRouter(routes, {
  initialEntries: ["/gallery?season=spring&pictureId=1"],
  initialIndex: 1,
});

describe("AddRemoveShoppingCartButton", () => {
  it("should render add button", () => {
    const testStore = {
      generalStore: {},
      shoppingCartStore: { shoppingCartItems: [] },
    };
    render(
      <store.RootStoreProvider
        testStore={testStore as unknown as store.RootStore}
      >
        <RouterProvider router={router} />
      </store.RootStoreProvider>
    );
    expect(screen.getByText("Add to cart")).toBeTruthy();
  });
  it("should render remove button", () => {
    const testStore = {
      generalStore: {},
      shoppingCartStore: { shoppingCartItems: [shoppingCartItem] },
    };
    render(
      <store.RootStoreProvider testStore={testStore as store.RootStore}>
        <RouterProvider router={router} />
      </store.RootStoreProvider>
    );
    expect(screen.getByText("Remove from cart")).toBeTruthy();
  });
});
