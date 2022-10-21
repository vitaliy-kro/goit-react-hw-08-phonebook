import ContentLoader from 'react-content-loader';

export const Loader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#d1d1d1"
    foregroundColor="#ecebeb"
  >
    <rect x="17" y="4" rx="0" ry="0" width="217" height="45" />
    <rect x="199" y="26" rx="0" ry="0" width="2" height="0" />
    <rect x="21" y="67" rx="0" ry="0" width="321" height="118" />
    <rect x="17" y="214" rx="0" ry="0" width="203" height="37" />
    <rect x="31" y="260" rx="0" ry="0" width="82" height="13" />
    <rect x="21" y="284" rx="0" ry="0" width="199" height="22" />
    <circle cx="28" cy="336" r="5" />
    <circle cx="28" cy="358" r="5" />
    <rect x="43" y="332" rx="0" ry="0" width="139" height="5" />
    <rect x="44" y="355" rx="0" ry="0" width="139" height="5" />
  </ContentLoader>
);
