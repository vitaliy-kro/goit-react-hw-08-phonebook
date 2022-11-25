import ContentLoader from 'react-content-loader';

export const Loader = props => (
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
