import Disqus from 'disqus-react';
import P from 'prop-types';
import { Container } from './styled';

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

Comments.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  slug: P.string.isRequired,
  title: P.string.isRequired,
};
