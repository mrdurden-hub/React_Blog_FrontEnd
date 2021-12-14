import Disqus from 'disqus-react';
import { Container } from './styled';

// eslint-disable-next-line react/prop-types
export default function Comments({ slug, title }) {
  const disqusShortname = 'mateuscarvalho';
  const disqusConfig = {
    url: `/posts/${slug}`,
    identifier: slug,
    title,
    language: 'pt_BR',
  };

  return (
    <Container>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </Container>
  );
}
