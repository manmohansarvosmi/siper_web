import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SIPER Lahar — School of Integrated Pharmacy Education & Research" },
      {
        name: "description",
        content:
          "SIPER Lahar is a premier pharmacy college offering B.Pharm, M.Pharm, D.Pharm and Pharm.D programs in Madhya Pradesh, India.",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
