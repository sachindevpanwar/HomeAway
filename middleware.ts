import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define which routes should be protected
const isProtectRoute = createRouteMatcher([
  '/bookings(.*)', 
  '/checkout(.*)', 
  '/favorates(.*)', 
  '/profile(.*)', 
  '/rentals(.*)', 
  '/reviews(.*)'
]);

// Export middleware function
export default clerkMiddleware((auth, req) => {
  if (isProtectRoute(req)) {
    auth().protect();
  }
});

// Export middleware configuration
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],

};
