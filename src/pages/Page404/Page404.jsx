import * as styled from './styled';

export default function Page404() {
  return (
    <styled.Container>
      <styled.NotFoundMessage>
        <h1>Page not found</h1>
        <h3>Sorry, but i didnt finds any content</h3>
      </styled.NotFoundMessage>
    </styled.Container>
  );
}
