import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Loader, Container, Heading, TextLink, SectionTitle, ImageCard,
         GlideCarousel, GlideSlide } from 'components/index';
import useDataApi from 'library/hooks/useDataApi';
import { HALL_LIST_PAGE } from 'settings/constant';
import LocationWrapper, { CarouselSection } from 'container/Home/Location/Location.style';
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

const LocationGrid = () => {
  const { data } = useDataApi('http://localhost:8080/halls');

  return (
    <LocationWrapper>
      <Container fluid={true}>
        <SectionTitle
          title={<Heading content="전시관별 모아보기" />}
          link={<TextLink link={HALL_LIST_PAGE} content="Show all" />}
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
                      link='/hallList'
                      imageSrc={post.hallImage}
                      title={post.hallName}
                      meta={`Show list`}
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

export { LocationGrid };
export default LocationGrid;
