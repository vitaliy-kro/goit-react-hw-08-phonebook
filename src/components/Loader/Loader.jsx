import ContentLoader from 'react-content-loader';
import { Skeleton, Box } from '@mui/material';
export const ContactsInfoLoader = props => (
  <ContentLoader
    width={700}
    height={350}
    viewBox="0 0 750 350"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect x="30" y="52" rx="6" ry="6" width="483" height="10" />
    <circle cx="4" cy="55" r="4" />
    <rect x="30" y="80" rx="6" ry="6" width="420" height="10" />
    <circle cx="4" cy="83" r="4" />
    <rect x="30" y="103" rx="6" ry="6" width="483" height="10" />
    <circle cx="4" cy="106" r="4" />
    <rect x="30" y="123" rx="6" ry="6" width="444" height="10" />
    <circle cx="4" cy="126" r="4" />
    <rect x="30" y="143" rx="6" ry="6" width="483" height="10" />
    <circle cx="4" cy="146" r="4" />
  </ContentLoader>
);

const ContactsLoader = () => {
  return (
    <>
      <Box sx={{ py: 3 }}>
        <Skeleton
          animation="wave"
          variant="text"
          width={250}
          height={90}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Skeleton
            animation="wave"
            variant="rounded"
            width={200}
            height={40}
          />
          <Skeleton
            animation="wave"
            variant="rounded"
            width={200}
            height={40}
            sx={{ ml: 1 }}
          />
          <Skeleton
            animation="wave"
            variant="rounded"
            width={200}
            height={30}
            sx={{ ml: 1 }}
          />
        </Box>
      </Box>
      <Box sx={{ py: 3 }}>
        <Skeleton
          animation="wave"
          variant="text"
          width={250}
          height={90}
          sx={{ mb: 2 }}
        />
        <Skeleton animation="wave" variant="rounded" width={305} height={35} />
      </Box>
    </>
  );
};

const HomeSkeleton = () => {
  return (
    <>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Skeleton animation="wave" variant="rounded" width={70} height={70} />
        <Skeleton
          animation="wave"
          variant="text"
          width={500}
          height={130}
          sx={{ ml: 2 }}
        />
      </Box>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Skeleton animation="wave" variant="rounded" width={100} height={45} />
        <Skeleton
          animation="wave"
          variant="rounded"
          width={100}
          height={45}
          sx={{ ml: 5 }}
        />
      </Box>
    </>
  );
};

const SignInSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        py: 2,
      }}
    >
      <Skeleton
        animation="wave"
        variant="circular"
        width={40}
        height={40}
        sx={{ mb: 1 }}
      />
      <Skeleton
        animation="wave"
        variant="text"
        width={80}
        height={40}
        sx={{ mb: 2 }}
      />
      <Skeleton
        animation="wave"
        variant="rounded"
        width={460}
        height={50}
        sx={{ mb: 2 }}
      />
      <Skeleton
        animation="wave"
        variant="rounded"
        width={460}
        height={50}
        sx={{ mb: 3 }}
      />
      <Skeleton animation="wave" variant="rounded" width={460} height={40} />
    </Box>
  );
};

const SignUpSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        py: 2,
      }}
    >
      <Skeleton
        animation="wave"
        variant="circular"
        width={40}
        height={40}
        sx={{ mb: 1 }}
      />
      <Skeleton
        animation="wave"
        variant="text"
        width={80}
        height={40}
        sx={{ mb: 2 }}
      />
      <Skeleton
        animation="wave"
        variant="rounded"
        width={700}
        height={50}
        sx={{ mb: 2 }}
      />
      <Skeleton
        animation="wave"
        variant="rounded"
        width={700}
        height={50}
        sx={{ mb: 3 }}
      />
      <Skeleton animation="wave" variant="rounded" width={700} height={40} />
    </Box>
  );
};

export const Loader = ({ location }) => {
  switch (location) {
    case '/':
      return <HomeSkeleton />;
    case '/contacts':
      return <ContactsLoader />;
    case '/login':
      return <SignInSkeleton />;
    case '/register':
      return <SignUpSkeleton />;
    default:
      return;
  }
};
