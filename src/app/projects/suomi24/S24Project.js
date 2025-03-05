import React, { useEffect } from "react";
import suomiLogo from "./images/s24Logo.png";
import userJounery from "./images/userjounery.jpeg";
import userResearch from "./images/research.jpg";
import stakeholderMap from "./images/stakeholderMap.jpeg";
import threadViewAd from "./images/threadView_ad_draft.png";
import threadViewAd_old from "./images/threadView_ad_old.png";
import threadViewAd_new from "./images/threadView_ad_new.png";
import home_lo from "./images/home_lo.png";
import home_hi from "./images/home_hi.png";
import home_ads from "./images/home_ads.png";
import design_demo from "./images/design_demo.png";
import design_thread from "./images/design_thread.png";
import design_wireframe from "./images/design_wireframe.png";
import styleguide from "./images/styleguide.jpg";
import home_desk from "./images/s24-home-desk.png";
import home_m from "./images/s24-homepage-m.png";
import navi_view from "./images/s24-navi.png";

import {
  Box,
  Image,
  Flex,
  VStack,
  Text,
  HStack,
  Heading,
  Container,
} from "@chakra-ui/react";
import ImageInArticle from "../../../components/ImageInArticle";
import ImageContainer from "../../../components/ImageContainer/ImageContainer";

const S24Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container id="header-image" maxW="container.xl">
        <ImageContainer
          leftSrc={home_m}
          leftAlt="s24_m"
          middleSrc={home_desk}
          middleAlt="home_desk"
          rightSrc={navi_view}
          rightAlt="navi_view"
        />
      </Container>
      <Container id="introduction" as="section" maxW="container.xl">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          pt="120px"
          pb="120px"
        >
          <VStack w={{ base: "100%", md: "50%" }}>
            <img
              alt="Suomi24"
              src={suomiLogo}
              style={{
                width: "130px",
                borderRadius: "15px",
              }}
            />

            <p
              style={{
                whiteSpace: "nowrap",
                fontWeight: "600",
              }}
            >
              Suomi24: What Finns are talking about
            </p>
          </VStack>
          <Box
            w={{ base: "100%", md: "50%" }}
            pl={{ base: "0", md: "15" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text pt="12px">
              Suomi24.fi is a popular online community in Finland where people
              can discuss various topics, seek advice, and connect with others.
              It was founded in 2000 and has become one of the largest online
              forums in Finland.
            </Text>
            <Text style={{ paddingTop: "16px" }}>
              It has more than 1.4 million weekly users.
            </Text>
          </Box>
        </Flex>
      </Container>
      <Container id="work" as="section" maxW="container.xl">
        <Flex
          id="role-description"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-around"
          flexWrap="wrap"
          alignContent={{ base: "center", md: "normal" }}
          pb="14"
          sx={{ "> div": { paddingBottom: { base: "16px", md: "0" } } }}
        >
          <Box w="200px" borderTop={"1px solid #6e6e6e"}>
            <Text pt="4" fontWeight={"600"}>
              My Role
            </Text>
            <ul>
              <li>User Experience Designer</li>
              <li>Frontend Developer</li>
            </ul>
          </Box>
          <Box w="200px" borderTop={"1px solid #6e6e6e"}>
            <Text pt="4" fontWeight={"600"}>
              {" "}
              Deliverables
            </Text>
            <p>UX</p>
            <ul>
              <li>User survey and interview</li>
              <li>User jounery map</li>
              <li>Stakeholder map</li>
              <li>Personas</li>
              <li>Site map</li>
              <li>Navigation Design</li>
              <li>Search Engine Optimization</li>
            </ul>
            <Text pt="4" fontWeight={"600"}>
              Frontend
            </Text>
            <ul>
              <li>React component library</li>
              <li>Unit testing</li>
            </ul>
          </Box>
          <Box w="200px" borderTop={"1px solid #6e6e6e"}>
            <Text pt="4" fontWeight={"600"}>
              Tools
            </Text>
            <ul>
              <li>Sketch</li>
              <li>Figma</li>
              <li>Balsamiq</li>
              <li>VWO</li>
              <li>Hotjar</li>
              <li>google Analytics</li>
              <li>Google Tag Manager</li>
              <li>React</li>
              <li>Javascript/CSS/HTML</li>
            </ul>
          </Box>
        </Flex>
      </Container>
      <Container
        id="project-detail"
        as="section"
        maxW="container.xl"
        className="project-detail objective"
        style={{ borderTop: "1px solid black" }}
      >
        <Heading as="h2" size="xl">
          Overview
        </Heading>

        <p>
          The Suomi24 team aimed to redesign their website to make it more
          fresh-looking and appealing to younger audiences, while also improve
          its mobile compatibility. In addition to updating the user interface
          (UI), the team needed to replace the outdated FlightJS frontend
          platform with React. I joined the team in August 2018 as the sole UX
          designer, leading the UX research and design for the new UI.
          Additionally, I worked as a frontend engineer with two other engineers
          to maintain and enhance the website.
        </p>
        <section>
          <Heading as="h3" size="lg">
            Problems
          </Heading>
          <p>
            The number of active users is declining. Suomi24 is not appearing on
            the first page of Google search results. Advertisement revenue is
            not showing a profitable trend. The frontend platform being used is
            no longer being updated.
          </p>
          <Heading as="h3" size="lg">
            Proposed Solutions
          </Heading>
          <ol>
            <li>Redesign the UI to adopt modern desktop and mobile UIs.</li>
            <li>
              Improve user experience to encourage more interactions and provide
              users with confidence to navigate the platform.
            </li>
            <li>Increase the metrics for advertisement display.</li>
            <li>
              Conduct Search Engine Optimization (SEO) to improve Suomi24's
              visibility on Google search results.
            </li>
          </ol>
        </section>
      </Container>
      <Container
        id="research"
        as="section"
        maxW="container.xl"
        className="project-detail research"
      >
        <Heading as="h2" size="xl">
          Research
        </Heading>
        <Heading as="h3" size="lg">
          User study
        </Heading>

        <p>
          Our first research focused on real website users. We recruited
          volunteers from the Suomi24 forum, selecting a diverse range of
          participants based on age, gender, location, history with Suomi24, and
          frequency of visits. These participants were invited to participate in
          a<b> one-on-one user interview</b> and a <b>first-impression test</b>,
          which helped us gain an in-depth understanding of their feelings about
          Suomi24. In addition to the interviews, we collected over 500 user
          responses through an <b>online survey</b> on the forum.{" "}
        </p>
        <section>
          <Heading as="h3" size="lg">
            Findings
          </Heading>
          <ol>
            <li>The website appears boring and outdated.</li>
            <li>
              Some components do not follow mobile interaction patterns and do
              not work as expected.
            </li>
            <li>
              The website's anonymous nature discourages users from registering,
              as they fear losing their anonymity.
            </li>
            <li>
              Users are more interested in local events and building their own
              communities.
            </li>
            <li>
              Users who arrive at Suomi24 from Google cannot find anything else
              of interest on the first page they land on.
            </li>
          </ol>
        </section>
      </Container>
      <Container id="gettingCloserToUCD" as="section" maxW="container.xl">
        <Heading as="h2" size="xl">
          Getting Closer to User-centered Design
        </Heading>
        <Heading as="h3" size="lg">
          Use Jounery Map to Identify Users' Motivations and Pain Points
        </Heading>

        <p>
          At first glance, it seems that users find the website useful but not
          interesting. However, upon closer inspection, we found that users have
          divergent motivations. Creating personas has helped us clarify these
          divergences, and we can use them as a basis for use cases in later
          development stages.
        </p>
        <p>
          After discussing with the Product Owner and the Business Development
          team, we have decided to focus on two personas because they
          represented two user groups: the information seeker and the explorer.
          The information seeker is someone who visits the website with a
          specific purpose, seeking knowledge or social approval. On the other
          hand, the explorer visits the website to relax and doesn't have a
          specific purpose in mind.
        </p>

        <ImageInArticle description="Analyze User Behavior And Establish Evaluation Targets">
          <HStack spacing="4">
            <Image
              src={userJounery}
              alt="userJounery"
              w="50%"
              borderRadius="md"
              boxShadow="lg"
            />
            <Image
              src={userResearch}
              alt="User Research"
              w="50%"
              borderRadius="md"
              boxShadow="lg"
            />
          </HStack>
        </ImageInArticle>

        <p>
          To gain insight into user behavior, we analyzed data collected from
          Google Analytics, VWO, and Hotjar. Our analysis focused on where users
          clicked the most, what was visible in the first three seconds after
          the page loaded, whether users scrolled to access the information we
          provided, and whether users found the information relevant and useful.
        </p>
        <p>
          Based on our findings, we concluded that it is essential to rearrange
          the layout to make the most of the first screen. This will enable
          users to quickly access the information they need and make the website
          more user-friendly.
        </p>
        <p>
          To evaluate the ROI of our redesign, it's crucial to analyze the
          analytics data. By doing so, we can set up clear targets and adjust
          our design strategy accordingly.
        </p>
      </Container>
      <Container id="stakeholder" as="section" maxW="container.xl">
        <Heading as="h2" size="xl">
          Collaborating with stakeholder
        </Heading>
        <Heading as="h3" size="lg">
          Clarify responsibilities using Content Map
        </Heading>
        <p>
          Redesigning a website with a long history, such as Suomi24, requires a
          collaborative effort. The project is dependent on other products, with
          numerous links, components, and shared APIs. In addition, the
          marketing and advertisement management team reserves every
          advertisement on the screen, making it difficult to rearrange them. To
          clarify responsibilities and the impact of each stakeholder on the
          redesign work, we collaborated with the product managers, developers,
          marketing team, and content managers to create a stakeholder map.{" "}
        </p>

        <ImageInArticle description="Usability V.S. Revenue?  Or Both">
          <Image
            src={stakeholderMap}
            alt="Stakeholder Map"
            w="80%"
            borderRadius="lg"
          />
        </ImageInArticle>
        <p>
          One of the severe problems found during usability testing and user
          interviews is that there are too many advertisements, particularly in
          the thread pages, which is the landing page for more than 97% of
          users. The irrelevant advertisement image, sometimes resulting in an
          empty white space when the ad doesn't load successfully. This often
          disrupts users, and they may leave the page or find it unappealing.
          However, removing or moving the ad lower down the page is not an
          option as it is one of our main sources of income and must be visible
          at the beginning.
        </p>
        <p>
          {" "}
          I have redesigned the page in a way that the advertisement is visible
          in the first place, along with the topic and a portion of the content.
          The final result was monitored using Google Ad Manager, and both the
          impression and the reading depth on the page slightly increased.
        </p>
        <p>I presented two proposals to let market team choose:</p>
        <ol>
          <li>
            Move the ad beneath the topic and the content of the main thread.
            When text is too long, clip the text
            &lt;text-overflow=‘ellipsis’&gt; to ensure the ad shows more than
            50%.
          </li>
          <li>Introduce a smaller ad slot for mobile view.</li>
        </ol>
        <p>
          The final result was monitored using Google Ad Manager, and both the
          impression and the reading depth on the page slightly increased.
        </p>

        <ImageInArticle description="Improve ad display in the thread view">
          <Box position="relative" h={{ base: "200px", md: "360px" }}>
            <Image
              src={threadViewAd}
              alt="Thread view ads"
              w="80%"
              marginX="auto"
              h="85%"
            />
            <Image
              src={threadViewAd_old}
              alt="Thread view ads"
              position="absolute"
              bottom="0"
              left="-10px"
              w="20%"
              display={{ base: "none", md: "block" }}
            />
            <Image
              src={threadViewAd_new}
              alt="Thread view ads"
              position="absolute"
              bottom="0"
              right="-10px"
              w="20%"
            />
          </Box>
        </ImageInArticle>
      </Container>
      <Container id="buildNavigation" as="section" maxW="container.xl">
        <Heading as="h2" size="xl">
          Build navigation
        </Heading>
        <Heading as="h3" size="lg">
          Refactory the navigationg widget
        </Heading>

        <p>
          There are many topics hidden deep within deep navigation structure,
          like pearls buried under sand. To encourage user navigation, we have
          designed a mega-navigation that includes a search bar, layered
          navigation items, and a specially designed top area for highlighting
          important topics.
        </p>
        <Heading as="h3" size="lg">
          Build a information-rich homepage
        </Heading>
        <p>
          Create an informative homepage that effectively showcases our brand
          and drives more traffic to our discussion forum. We worked closely
          with our content management and marketing teams to redesign the
          layout, ensuring a balance between informative content and
          advertisements.
        </p>

        <ImageInArticle description="Homepage lofi to hifi design" w="100%">
          <Flex flexWrap="wrap" gap="20px">
            <Image
              src={home_lo}
              alt="Homepage-lofi"
              maxHeight={{ md: "395px" }}
            />
            <Image
              src={home_hi}
              alt="Homepage-hifi"
              maxHeight={{ md: "395px" }}
            />
          </Flex>
        </ImageInArticle>
        <Heading as="h3" size="lg">
          Allocate Advertisement
        </Heading>

        <Flex gap="5%" flexWrap="wrap">
          <Box w={{ base: "100%", md: "50%" }} minWidth="350px">
            <Text>
              Advertisement as one of the most important revenue resourse must
              graps much user attention from the page.
            </Text>
            <Text pt="15px">
              We not only need to provide informative ads that are relevent to
              user's need, but also we need to place the ads propertly in proper
              spot and frequency, so that it can keep the balance between user
              experience and revenue
            </Text>
            <Text></Text>
          </Box>
          <Image
            src={home_ads}
            alt="Homepage ads layout"
            w={{ base: "100%", md: "36%" }}
            borderRadius="lg"
          />
        </Flex>
      </Container>

      <Container id="designUI" as="section" maxW="container.xl">
        <Heading as="h2" size="xl">
          Visualizing User-centered Design
        </Heading>
        <Heading as="h3" size="lg">
          Mobile First Improvement
        </Heading>
        <p>
          Research indicates that over 74% of Suomi24 page views are from mobile
          devices, and this number is on the rise. Therefore, we are focusing
          our efforts on refining the mobile UI.
        </p>
        <ol>
          <li>Ensure text content is visible right away.</li>

          <li>
            Improve search-ability by making the search feature available in the
            top navigation widget.
          </li>
          <li>Reduce dividers and layer margins in the thread view.</li>
          <li>Minimize the use of different colors and font sizes.</li>
          <li>Increase the interaction area by using meaningful icons.</li>
          <li>Improve the mobile usability of the navigation widget.</li>
        </ol>
        <p>
          We conducted several rounds of testing to ensure smooth and intuitive
          interactions, as well as a relaxed and effortless UI for mobile users.
        </p>
        <ImageInArticle description="The mockups and style guides">
          <Box position="relative" display={{ base: "none", md: "block" }}>
            <Image
              src={design_demo}
              alt="design demo"
              width="80%"
              position="relative"
              marginX="auto"
            />

            <Image
              src={design_wireframe}
              alt="wireframe"
              width="50%"
              position="absolute"
              bottom="0"
              left="45%"
            />
            <Image
              src={styleguide}
              alt="styleguide"
              height="450px"
              position="absolute"
              bottom="0"
              right="0"
            />
            <Image
              src={design_thread}
              alt="design thread view"
              position="absolute"
              bottom="0"
              width="50%"
            />
          </Box>
          <Flex
            display={{ base: "flex", md: "none" }}
            flexWrap="wrap"
            gap="12px"
            sx={{
              div: {
                borderRadius: "xl",
                boxShadow: "2px 2px 5px 1px rgba(0,0,0,0.2)",
              },
            }}
          >
            <Box
              minWidth="350px"
              maxWidth="450px"
              h="450px"
              backgroundImage={design_demo}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            ></Box>
            <Box
              minWidth="350px"
              maxWidth="450px"
              h="450px"
              backgroundImage={design_wireframe}
              backgroundPosition="right"
              backgroundRepeat="no-repeat"
            ></Box>
            <Box
              minWidth="350px"
              maxWidth="450px"
              h="450px"
              backgroundImage={design_thread}
              backgroundPosition="revert"
              backgroundRepeat="no-repeat"
            ></Box>
            <Box
              minWidth="350px"
              maxWidth="450px"
              h="450px"
              backgroundImage={styleguide}
              backgroundPosition="revert"
              backgroundRepeat="no-repeat"
              backgroundSize="50%"
            ></Box>
          </Flex>
        </ImageInArticle>
      </Container>
      <Container id="recap" as="section" maxW="container.xl">
        <Heading as="h2" size="xl">
          Lessons Learned
        </Heading>
        <Heading as="h3" size="lg">
          Don’t ditch the old design too soon
        </Heading>

        <p>
          We discovered that fewer than 10% of users visit the homepage of
          suomi24.fi, with most of them navigating to other websites. We wanted
          to make the homepage more useful so that users could find interesting
          content and continue their journey inside the forum. With good
          intentions, we made a significant change to the homepage to provide
          more helpful information and allow users to use the homepage more
          effectively.
        </p>
        <p>
          However, our abrupt change replaced the entire old homepage with the
          new design, resulting in complaints from users. We soon realized that
          many users used the old homepage as an index, from which they accessed
          news, mail, and even Google. We acknowledge that this usage of the
          homepage is valuable, and there is nothing inherently wrong with how
          users interacted with it. As a result, we reverted back to the
          original homepage design very quick, and redesign the links.
        </p>
        <p>
          It's important to always keep the user's needs and habits in mind when
          making changes to a website or application. In this case, it seems
          like the users had developed a certain behavior and pattern of use for
          the homepage that was disrupted by the sudden change. It might be
          worth considering conducting more user research to identify what
          specific improvements could be made to the homepage to make it more
          useful without disrupting the user's established patterns of use.
        </p>
      </Container>
    </>
  );
};

export default S24Project;
