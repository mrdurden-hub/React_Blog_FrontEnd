import { DiscussionEmbed } from 'disqus-react';
import P from 'prop-types';
import { Container } from './styled';

export default function Comments({ slug, title }) {
  return (
    <Container>
      <DiscussionEmbed
        shortname="mateuscarvalho"
        config={{
          url: `/posts/${slug}`,
          identifier: slug,
          title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
}

Comments.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  slug: P.string.isRequired,
  title: P.string.isRequired,
};
