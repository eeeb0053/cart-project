import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Loader, Container, Heading, TextLink, SectionTitle, ImageCard,
         GlideCarousel, GlideSlide } from 'components/index';
import useDataApi from 'library/hooks/useDataApi';
import { HALL_LIST_PAGE } from 'settings/constant';
import LocationWrapper, { CarouselSection } from 'container/Home/HallGrid/HallGrid.style';
const carouselOptions = {
  type: 'carousel',
  perView: 5,
  gap: 30,
  hoverpause: true,
  breakpoints: {
    1440: {
      perView: 5,
      gap: 20,
    },
    1200: {
      perView: 4,
    },
    991: {
      perView: 3,
      gap: 15,
    },
    667: {
      perView: 2,
      gap: 20,
    },
    480: {
      perView: 1,
      gap: 0,
    },
  },
};

const HallGrid = () => {
  const { data } = useDataApi('http://localhost:8080/halls');

  return (
    <LocationWrapper>
      <Container fluid={true}>
        <SectionTitle
          title={<Heading content="전시관별 모아보기" />}
        />

        <CarouselSection>
          {data.length !== 0 ? (
            <GlideCarousel
              carouselSelector="explore_carousel"
              prevButton={<IoIosArrowBack />}
              nextButton={<IoIosArrowForward />}
              options={carouselOptions}
            >
              <>
                {data.map((post, index) => (
                  <GlideSlide key={index}>
                    <ImageCard
                      link={`${HALL_LIST_PAGE}/${index+1}`}
                      imageSrc={post.hallImage}
                      title={post.hallName}
                      meta={`Show list`}
                      number={index+1}
                    />
                  </GlideSlide>
                ))}
              </>
            </GlideCarousel>
          ) : (
            <Loader />
          )}
        </CarouselSection>
      </Container>
    </LocationWrapper>
  );
};

export default HallGrid;
