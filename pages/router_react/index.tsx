
        import { 
          createRoute,
          useNavigate,
          useParams,
          useSearch,
          Link
        } from '@tanstack/react-router';
        import { 
          CircularProgress,
          Container,
          Typography,
          Alert,
          // other MUI components
        } from '@mui/material';
        
        interface RouteParams {
          // Add proper route params typing here
        }
        
        interface SearchParams {
          // Add proper search params typing here
        }
        
        interface RouteData {
          // Add proper data typing here
        }
        
        const WelcomeRoute = createRoute<RouteParams, RouteData>({
          path: '/',
          component: () => {
            const params = useParams<RouteParams>();
            const search = useSearch<SearchParams>();
            const navigate = useNavigate();

            // Implement data fetching and mutations here
            // Use TanStack Router loader pattern
            // Implement proper TypeScript types for data
            // Handle loading and error states

            return (
              <Container maxWidth="md">
                {/* Implement proper loading states */}
                {/* Handle error states with MUI components */}
                <Typography variant="h4" component="h1" gutterBottom>
                  Welcome
                </Typography>
                {/* Add other MUI components for layout and UI */}
              </Container>
            );
          },
        });
        
        const UserMgmtRoute = createRoute<RouteParams, RouteData>({
          path: '/LLM-Search',
          component: () => {
            const params = useParams<RouteParams>();
            const search = useSearch<SearchParams>();
            const navigate = useNavigate();

            // Implement data fetching and mutations here
            // Use TanStack Router loader pattern
            // Implement proper TypeScript types for data
            // Handle loading and error states

            return (
              <Container maxWidth="md">
                {/* Implement proper loading states */}
                {/* Handle error states with MUI components */}
                <Typography variant="h4" component="h1" gutterBottom>
                  User Management
                </Typography>
                {/* Add other MUI components for layout and UI */}
              </Container>
            );
          },
        });
        
        const ContactFlowRoute = createRoute<RouteParams, RouteData>({
          path: '/LLM-Grid',
          component: () => {
            const params = useParams<RouteParams>();
            const search = useSearch<SearchParams>();
            const navigate = useNavigate();

            // Implement data fetching and mutations here
            // Use TanStack Router loader pattern
            // Implement proper TypeScript types for data
            // Handle loading and error states

            return (
              <Container maxWidth="md">
                {/* Implement proper loading states */}
                {/* Handle error states with MUI components */}
                <Typography variant="h4" component="h1" gutterBottom>
                  Contact Flows
                </Typography>
                {/* Add other MUI components for layout and UI */}
              </Container>
            );
          },
        });
        
        const RoutingProfileRoute = createRoute<RouteParams, RouteData>({
          path: '/LLM-Views',
          component: () => {
            const params = useParams<RouteParams>();
            const search = useSearch<SearchParams>();
            const navigate = useNavigate();

            // Implement data fetching and mutations here
            // Use TanStack Router loader pattern
            // Implement proper TypeScript types for data
            // Handle loading and error states

            return (
              <Container maxWidth="md">
                {/* Implement proper loading states */}
                {/* Handle error states with MUI components */}
                <Typography variant="h4" component="h1" gutterBottom>
                  Routing Profiles
                </Typography>
                {/* Add other MUI components for layout and UI */}
              </Container>
            );
          },
        });
        
        const routes = [
          WelcomeRoute,
          UserMgmtRoute,
          ContactFlowRoute,
          RoutingProfileRoute,
        ];
        
        export default routes;