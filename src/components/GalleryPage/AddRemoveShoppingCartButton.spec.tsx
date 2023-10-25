import { Router } from "@remix-run/router";
import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import * as store from "../../mobx/RootStore";
import { routes } from "../../utils/router";

window.scrollTo = jest.fn();

const shoppingCartItemId = 1;

function createRouter() {
  return createMemoryRouter(routes, {
    initialEntries: ["/gallery?season=spring&pictureId=1"],
    initialIndex: 1,
  });
}

describe("AddRemoveShoppingCartButton", () => {
  let router: Router;
  beforeEach(() => {
    router = createRouter();
  });

  it("should render add button and show toast on click", async () => {
    const testStore = {
      generalStore: {},
      shoppingCartStore: { shoppingCartImageIds: [], add: jest.fn() },
    };
    render(
      <store.RootStoreProvider
        testStore={testStore as unknown as store.RootStore}
      >
        <ToastContainer />
        <RouterProvider router={router} />
      </store.RootStoreProvider>
    );
    fireEvent.click(screen.getByText("Add to cart"));
    await screen.findByText("Picture added to the shopping cart");
  });
  it("should render remove button and show toast on click", async () => {
    const testStore = {
      generalStore: {},
      shoppingCartStore: {
        shoppingCartImageIds: [shoppingCartItemId],
        remove: jest.fn(),
      },
    };
    render(
      <store.RootStoreProvider
        testStore={testStore as unknown as store.RootStore}
      >
        <ToastContainer />
        <RouterProvider router={router} />
      </store.RootStoreProvider>
    );
    fireEvent.click(screen.getByText("Remove from cart"));
    await screen.findByText("Picture removed from the shopping cart");
  });
});
