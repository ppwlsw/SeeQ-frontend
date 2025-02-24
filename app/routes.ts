import {
  index,
  layout,
  route,
  type RouteConfig,
  type RouteConfigEntry,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

// Helper function to merge route configurations
const mergeRouteConfigs = (
  autoRoutes: RouteConfigEntry[],
  manualRoutes: RouteConfigEntry[]
): RouteConfigEntry[] => {
  // Create a map of manual routes by path for quick lookup
  const manualRouteMap = new Map(
    manualRoutes.map((r) => [r.path || r.file, r])
  );

  // Start with automatic routes
  const mergedRoutes = [...autoRoutes];

  // Add or override with manual routes
  manualRoutes.forEach((manualRoute) => {
    const existingIndex = mergedRoutes.findIndex(
      (r) => (r.path || r.file) === (manualRoute.path || manualRoute.file)
    );

    if (existingIndex !== -1) {
      // Override existing route
      mergedRoutes[existingIndex] = manualRoute;
    } else {
      // Add new route
      mergedRoutes.push(manualRoute);
    }
  });

  return mergedRoutes;
};

// Create a function that returns the hybrid router configuration
const createHybridRouter = async (
  defineManualRoutes: () => RouteConfigEntry[]
): Promise<RouteConfig> => {
  // Get automatic routes - await the Promise
  const automaticRoutes = await flatRoutes();

  // Get manual routes
  const manualRoutes = defineManualRoutes();

  // Merge both route configurations
  return mergeRouteConfigs(automaticRoutes, manualRoutes);
};

// Example usage - now using async
export default createHybridRouter(() => []) satisfies Promise<RouteConfig>;
