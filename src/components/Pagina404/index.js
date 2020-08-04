import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import img404 from '../../assets/img/404.svg';
import { Img404, BackLink, Container, Span } from './styles';

const Page404 = () => {
  return (
    <>
      <Menu />
      <Container>
        <Span>
          {' '}
          Essa página não existe. Ir para a {' '}
          <BackLink to="/">home page</BackLink>.
        </Span>
        <Img404 src={img404} alt="404" />
      </Container>
      <Footer />
    </>
  );
};

export default Page404;