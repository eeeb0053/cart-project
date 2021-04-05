import React, { useContext, Fragment } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoIosAdd,
} from 'react-icons/io';
import { Menu, Popover } from 'antd';
import { Container, Image, Heading, Text, Loader, ProfilePicLoader } from 'components/index';
import { AuthProvider, AuthContext } from 'context/index';
import { AgentItemLists, AgentFavItemLists, AgentContact } from 'container/index';
import useDataApi from 'library/hooks/useDataApi';
import {
  ADD_EXHBN_PAGE,
  USER_PROFILE_FAVOURITE,
  USER_PROFILE_CONTACT
} from 'settings/constant';
import AgentDetailsPage, {
  BannerSection,
  UserInfoArea,
  ProfileImage,
  ProfileInformationArea,
  ProfileInformation,
  SocialAccount,
  NavigationArea,
} from 'container/Agent/AccountDetails/AgentDetails.style';

const ProfileNavigation = (props) => {
  const { match, className } = props;
  const { loggedIn } = useContext(AuthContext);
  return (
    <NavigationArea>
      <Container fluid={true}>
        <Menu className={className}>
          <Menu.Item key="0">
            <NavLink exact to={`${match.url}`}>
              내 예약목록
            </NavLink>
          </Menu.Item>
          <Menu.Item key="1">
            <NavLink to={`${match.url}${USER_PROFILE_FAVOURITE}`}>
              내가 찜한 전시
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to={`${match.url}${USER_PROFILE_CONTACT}`}>
              내가 쓴 리뷰
            </NavLink>
          </Menu.Item>
        </Menu>

        {loggedIn && (
          <Link className="add_card" to={ADD_EXHBN_PAGE}>
            <IoIosAdd /> Add Hotel
          </Link>
        )}
      </Container>
    </NavigationArea>
  );
};

const ProfileRoute = (props) => {
  const { match } = props;
  return (
    <Container fluid={true}>
      <Route exact path={`${match.path}`} component={AgentItemLists} />
      <Route
        path={`${match.path}${USER_PROFILE_FAVOURITE}`}
        component={AgentFavItemLists}
      />
      <Route
        path={`${match.path}${USER_PROFILE_CONTACT}`}
        component={AgentContact}
      />
    </Container>
  );
};

const AgentProfileInfo = () => {
  const { data, loading } = useDataApi('/data/agent.json');
  if (isEmpty(data) || loading) return <Loader />;
  const {
    last_name,
    first_name,
    content,
    profile_pic,
    cover_pic,
    social_profile,
  } = data[0];

  const username = `${last_name} ${first_name}`;

  return (
    <Fragment>
      <BannerSection>
        <Image className="absolute" src={cover_pic.url} alt="Profile cover" />
      </BannerSection>
      <UserInfoArea>
        <Container fluid={true}>
          <ProfileImage>
            {profile_pic ? (
              <Image src={profile_pic.url} alt="Profile" />
            ) : (
              <ProfilePicLoader />
            )}
          </ProfileImage>
          <ProfileInformationArea>
            <ProfileInformation>
              <Heading content={username} />
              <Text content={content} />
            </ProfileInformation>
            <SocialAccount>
              <Popover content="Twitter">
                <a
                  href={social_profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoTwitter className="twitter" />
                </a>
              </Popover>
              <Popover content="Facebook">
                <a
                  href={social_profile.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoFacebook className="facebook" />
                </a>
              </Popover>
              <Popover content="Instagram">
                <a
                  href={social_profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram className="instagram" />
                </a>
              </Popover>
            </SocialAccount>
          </ProfileInformationArea>
        </Container>
      </UserInfoArea>
    </Fragment>
  );
};

export default function AgentDetailsViewPage(props) {
  return (
    <AgentDetailsPage>
      <AuthProvider>
        <AgentProfileInfo />
        <ProfileNavigation {...props} />
        <ProfileRoute {...props} />
      </AuthProvider>
    </AgentDetailsPage>
  );
}
