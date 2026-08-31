import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPendingComponent: () => (
      <div className="grid min-h-screen place-items-center bg-navy-deep">
        <div className="flex flex-col items-center gap-5">
          <span className="animate-pulse rounded-md bg-navy-foreground/95 px-5 py-4">
            <img src={LOGO_URL} alt="Datta Infotech Consultants logo" className="h-12 w-auto" />
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Loading</span>
        </div>
      </div>
    ),
  });

  return router;
};
