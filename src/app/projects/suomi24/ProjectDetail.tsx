import React from 'react';
import Image from 'next/image';
import { ImageContainer } from '@/modules';
import { ImageInArticle, ScrollInComponent } from '@/components';

const ProjectDetail: React.FC = () => {
  return (
    <>
      <section id='header-image' className='inline-flex justify-center w-full'>
        <div className='w-full max-w-5xl'>
          <ImageContainer
            leftSrc='/projects/s24/s24-homepage-m.png'
            leftAlt='s24_m'
            middleSrc='/projects/s24/s24-home-desk.png'
            middleAlt='home_desk'
            rightSrc='/projects/s24/s24-navi.png'
            rightAlt='navi_view'
          />
        </div>
      </section>
      <section id='introduction'>
        <div className='flex flex-col md:flex-row pt-28 gap-8 pb-28 px-10 max-w-5xl mx-auto'>
          <div className='flex flex-col justify-center items-center gap-6'>
            <Image
              alt='Suomi24'
              src={'/projects/s24/s24Logo.png'}
              width={120}
              height={120}
              style={{
                width: '130px',
                borderRadius: '15px',
              }}
            />

            <p className='font-semibold text-nowrap'>
              Suomi24: What Finns are talking about
            </p>
          </div>
          <div className='text-center md:text-left md:pl-10 pt-4 text-lg'>
            <p className='pt-3'>
              Suomi24.fi is a popular online community in Finland where people
              can discuss various topics, seek advice, and connect with others.
              It was founded in 2000 and has become one of the largest online
              forums in Finland.
            </p>
            <p className='pt-4'>It has more than 1.4 million weekly users.</p>
          </div>
        </div>
      </section>
      <section id='mywork' className='pb-14'>
        <div className='container max-w-5xl mx-auto'>
          <div
            id='role-description'
            className='flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start gap-6 px-8'
          >
            <div className='w-full md:w-52 border-t border-gray-700'>
              <h4 className='font-semibold pt-4'>My Role</h4>
              <ul className='pt-2'>
                <li>User Experience Designer</li>
                <li>Frontend Developer</li>
              </ul>
            </div>
            <div className='w-full md:w-52 border-t border-gray-700'>
              <h4 className='font-semibold pt-4'>Deliverables</h4>
              <p className='font-semibold pt-2'>UX</p>
              <ul className='pt-2'>
                <li>User survey and interview</li>
                <li>User jounery map</li>
                <li>Stakeholder map</li>
                <li>Personas</li>
                <li>Site map</li>
                <li>Navigation Design</li>
                <li>Search Engine Optimization</li>
              </ul>
              <p className='font-semibold pt-4'>Frontend</p>
              <ul className='pt-2'>
                <li>React component library</li>
                <li>Unit testing</li>
              </ul>
            </div>
            <div className='w-full md:w-52 border-t border-gray-700'>
              <h4 className='font-semibold pt-4'>Tools</h4>
              <ul className='pt-2'>
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
            </div>
          </div>
        </div>
      </section>
      <ScrollInComponent
        id='overview'
        as='section'
        className='border-t border-gray-700 pt-10 pb-7'
      >
        <div className='container max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold mb-6'>Overview</h2>

          <p>
            The Suomi24 team aimed to redesign their website to make it more
            fresh-looking and appealing to younger audiences, while also improve
            its mobile compatibility. In addition to updating the user interface
            (UI), the team needed to replace the outdated FlightJS frontend
            platform with React. I joined the team in August 2018 as the sole UX
            designer, leading the UX research and design for the new UI.
            Additionally, I worked as a frontend engineer with two other
            engineers to maintain and enhance the website.
          </p>
          <h3 className='text-2xl font-bold mt-10 mb-4'>Problems</h3>
          <p>
            The number of active users is declining. Suomi24 is not appearing on
            the first page of Google search results. Advertisement revenue is
            not showing a profitable trend. The frontend platform being used is
            no longer being updated.
          </p>
          <h3 className='text-2xl font-bold mt-10 mb-4'>Proposed Solutions</h3>
          <ol className='list-decimal pl-6'>
            <li>Redesign the UI to adopt modern desktop and mobile UIs.</li>
            <li>
              Improve user experience to encourage more interactions and provide
              users with confidence to navigate the platform.
            </li>
            <li>Increase the metrics for advertisement display.</li>
            <li>
              Conduct Search Engine Optimization (SEO) to improve Suomi24&apos;s
              visibility on Google search results.
            </li>
          </ol>
        </div>
      </ScrollInComponent>
      <ScrollInComponent
        as='section'
        id='research'
        className='relative w-screen pt-7 bg-purple-100/30 left-0 pb-7'
      >
        <div className='container max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold mb-6'>Research</h2>
          <h3 className='text-2xl font-bold mb-4'>User study</h3>

          <p className='my-2'>
            Our first research focused on real website users. We recruited
            volunteers from the Suomi24 forum, selecting a diverse range of
            participants based on age, gender, location, history with Suomi24,
            and frequency of visits. These participants were invited to
            participate in a<b> one-on-one user interview</b> and a{' '}
            <b>first-impression test</b>, which helped us gain an in-depth
            understanding of their feelings about Suomi24. In addition to the
            interviews, we collected over 500 user responses through an{' '}
            <b>online survey</b> on the forum.
          </p>
          <h3 className='text-2xl font-bold mt-10 mb-4'>Findings</h3>
          <ol>
            <li>The website appears boring and outdated.</li>
            <li>
              Some components do not follow mobile interaction patterns and do
              not work as expected.
            </li>
            <li>
              The website&apos;s anonymous nature discourages users from
              registering, as they fear losing their anonymity.
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
        </div>
      </ScrollInComponent>
      <ScrollInComponent as='section' id='gettingCloserToUCD' className='py-7'>
        <div className='container max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold mb-6'>
            Getting Closer to User-centered Design
          </h2>
          <h3 className='text-2xl font-bold mt-10 mb-4'>
            Use Jounery Map to Identify Users&apos; Motivations and Pain Points
          </h3>

          <p className='my-2'>
            At first glance, it seems that users find the website useful but not
            interesting. However, upon closer inspection, we found that users
            have divergent motivations. Creating personas has helped us clarify
            these divergences, and we can use them as a basis for use cases in
            later development stages.
          </p>
          <p className='my-2'>
            After discussing with the Product Owner and the Business Development
            team, we have decided to focus on two personas because they
            represented two user groups: the information seeker and the
            explorer. The information seeker is someone who visits the website
            with a specific purpose, seeking knowledge or social approval. On
            the other hand, the explorer visits the website to relax and
            doesn&apos;t have a specific purpose in mind.
          </p>

          <ImageInArticle description='Analyze User Behavior And Establish Evaluation Targets'>
            <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
              <div className='relative w-1/2 h-96'>
                <Image
                  src='/projects/s24/userjounery.jpeg'
                  alt='userJounery'
                  fill
                />
              </div>
              <div className='relative w-1/2 h-96'>
                <Image
                  src='/projects/s24/research.jpg'
                  alt='User Research'
                  fill
                />
              </div>
            </div>
          </ImageInArticle>

          <p className='my-2'>
            To gain insight into user behavior, we analyzed data collected from
            Google Analytics, VWO, and Hotjar. Our analysis focused on where
            users clicked the most, what was visible in the first three seconds
            after the page loaded, whether users scrolled to access the
            information we provided, and whether users found the information
            relevant and useful.
          </p>
          <p className='my-2'>
            Based on our findings, we concluded that it is essential to
            rearrange the layout to make the most of the first screen. This will
            enable users to quickly access the information they need and make
            the website more user-friendly.
          </p>
          <p className='my-2'>
            To evaluate the ROI of our redesign, it&apos;s crucial to analyze
            the analytics data. By doing so, we can set up clear targets and
            adjust our design strategy accordingly.
          </p>
        </div>
      </ScrollInComponent>
      <ScrollInComponent as='section' id='stakeholder'>
        <div className='container max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold mb-6'>
            Collaborating with stakeholder
          </h2>
          <h3 className='text-2xl font-bold mt-10 mb-4'>
            Clarify responsibilities using Content Map
          </h3>
          <p className='my-2'>
            Redesigning a website with a long history, such as Suomi24, requires
            a collaborative effort. The project is dependent on other products,
            with numerous links, components, and shared APIs. In addition, the
            marketing and advertisement management team reserves every
            advertisement on the screen, making it difficult to rearrange them.
            To clarify responsibilities and the impact of each stakeholder on
            the redesign work, we collaborated with the product managers,
            developers, marketing team, and content managers to create a
            stakeholder map.{' '}
          </p>

          <ImageInArticle description='Usability V.S. Revenue?  Or Both'>
            <div className='inline-flex justify-center w-full'>
              <Image
                src='/projects/s24/stakeholderMap.jpeg'
                alt='Stakeholder Map'
                width={640}
                height={480}
              />
            </div>
          </ImageInArticle>
          <p className='my-2'>
            One of the severe problems found during usability testing and user
            interviews is that there are too many advertisements, particularly
            in the thread pages, which is the landing page for more than 97% of
            users. The irrelevant advertisement image, sometimes resulting in an
            empty white space when the ad doesn&apos;t load successfully. This
            often disrupts users, and they may leave the page or find it
            unappealing. However, removing or moving the ad lower down the page
            is not an option as it is one of our main sources of income and must
            be visible at the beginning.
          </p>
          <p className='my-2'>
            I have redesigned the page in a way that the advertisement is
            visible in the first place, along with the topic and a portion of
            the content. The final result was monitored using Google Ad Manager,
            and both the impression and the reading depth on the page slightly
            increased.
          </p>
          <p className='my-2'>
            I presented two proposals to let market team choose:
          </p>
          <ol>
            <li>
              Move the ad beneath the topic and the content of the main thread.
              When text is too long, clip the text
              &lt;text-overflow=‘ellipsis’&gt; to ensure the ad shows more than
              50%.
            </li>
            <li>Introduce a smaller ad slot for mobile view.</li>
          </ol>
          <p className='my-2'>
            The final result was monitored using Google Ad Manager, and both the
            impression and the reading depth on the page slightly increased.
          </p>

          <ImageInArticle description='Improve ad display in the thread view'>
            <div className='relative h-52 md:h-64'>
              <Image
                src='/projects/s24/threadView_ad_draft.png'
                alt='Thread view ads'
                width={480}
                height={320}
                className='absolute top-0 left-1/2 -translate-x-1/2 object-cover'
              />
              <Image
                src='/projects/s24/threadView_ad_old.png'
                alt='Thread view ads'
                width={100}
                height={160}
                className='absolute top-20 left-1/4 -translate-x-1/2 hidden md:block'
              />
              <Image
                src='/projects/s24/threadView_ad_new.png'
                alt='Thread view ads'
                width={100}
                height={160}
                className='absolute top-20 right-1/4 translate-x-1/2 hidden md:block'
              />
            </div>
          </ImageInArticle>
        </div>
      </ScrollInComponent>
      <ScrollInComponent as='section' id='buildNavigation'>
        <div className='container max-w-5xl mx-auto'>
          <h2>Build navigation</h2>
          <h3>Refactory the navigationg widget</h3>

          <p>
            There are many topics hidden deep within deep navigation structure,
            like pearls buried under sand. To encourage user navigation, we have
            designed a mega-navigation that includes a search bar, layered
            navigation items, and a specially designed top area for highlighting
            important topics.
          </p>
          <h3>Build a information-rich homepage</h3>
          <p>
            Create an informative homepage that effectively showcases our brand
            and drives more traffic to our discussion forum. We worked closely
            with our content management and marketing teams to redesign the
            layout, ensuring a balance between informative content and
            advertisements.
          </p>

          <ImageInArticle description='Homepage lofi to hifi design'>
            <div className='flex flex-col md:flex-row h-60 md:h-96 max-w-5xl w-full justify-center gap-6'>
              <div className='w-full md:w-2/5 relative'>
                <Image
                  src='/projects/s24/home_lo.png'
                  alt='Homepage-lofi'
                  fill
                />
              </div>
              <div className='w-full md:w-2/5 relative'>
                <Image
                  src='/projects/s24/home_hi.png'
                  alt='Homepage-hifi'
                  fill
                />
              </div>
            </div>
          </ImageInArticle>

          <h3>Allocate Advertisement</h3>

          <div className='flex flex-col md:flex-row gap-6'>
            <div className=' w-full md:w-2/3'>
              <p>
                Advertisement as one of the most important revenue resourse must
                graps much user attention from the page.
              </p>
              <p>
                We not only need to provide informative ads that are relevent to
                user&apos;s need, but also we need to place the ads propertly in
                proper spot and frequency, so that it can keep the balance
                between user experience and revenue
              </p>
            </div>
            <div className='w-full md:w-1/3 h-96 relative md:mr-10'>
              <Image
                src='/projects/s24/home_ads.png'
                alt='Homepage ads layout'
                fill
              />
            </div>
          </div>
        </div>
      </ScrollInComponent>
      <ScrollInComponent as='section' id='designUI'>
        <div className='container max-w-5xl mx-auto'>
          <h2>Visualizing User-centered Design</h2>
          <h3>Mobile First Improvement</h3>
          <p>
            Research indicates that over 74% of Suomi24 page views are from
            mobile devices, and this number is on the rise. Therefore, we are
            focusing our efforts on refining the mobile UI.
          </p>
          <ol>
            <li>Ensure text content is visible right away.</li>

            <li>
              Improve search-ability by making the search feature available in
              the top navigation widget.
            </li>
            <li>Reduce dividers and layer margins in the thread view.</li>
            <li>Minimize the use of different colors and font sizes.</li>
            <li>Increase the interaction area by using meaningful icons.</li>
            <li>Improve the mobile usability of the navigation widget.</li>
          </ol>
          <p>
            We conducted several rounds of testing to ensure smooth and
            intuitive interactions, as well as a relaxed and effortless UI for
            mobile users.
          </p>
          <ImageInArticle description='The mockups and style guides'>
            <div className='relative w-full h-[500px]'>
              <div className='absolute w-4/5 mx-auto h-full left-1/2 -translate-x-1/2'>
                <Image
                  src='/projects/s24/design_demo.png'
                  alt='design demo'
                  fill
                />
              </div>

              <div className='absolute w-1/2 h-64 bottom-0 right-32'>
                <Image
                  src='/projects/s24/design_wireframe.png'
                  alt='wireframe'
                  fill
                />
              </div>
              <div className='absolute h-[450px] w-32 right-0 bottom-0'>
                <Image
                  src='/projects/s24/styleguide.jpg'
                  alt='styleguide'
                  fill
                />
              </div>
              <div className='absolute h-56 w-80 bottom-0 -left-3'>
                <Image
                  src='/projects/s24/design_thread.png'
                  alt='design thread view'
                  fill
                />
              </div>
            </div>
          </ImageInArticle>
        </div>
      </ScrollInComponent>
      <ScrollInComponent
        as='section'
        id='recap'
        className='pb-20 relative w-screen pt-7 bg-purple-100/30  '
      >
        <div className='container max-w-5xl mx-auto'>
          <h2>Lessons Learned</h2>
          <h3>Don&apos;t ditch the old design too soon</h3>

          <p>
            We discovered that fewer than 10% of users visit the homepage of
            suomi24.fi, with most of them navigating to other websites. We
            wanted to make the homepage more useful so that users could find
            interesting content and continue their journey inside the forum.
            With good intentions, we made a significant change to the homepage
            to provide more helpful information and allow users to use the
            homepage more effectively.
          </p>
          <p>
            However, our abrupt change replaced the entire old homepage with the
            new design, resulting in complaints from users. We soon realized
            that many users used the old homepage as an index, from which they
            accessed news, mail, and even Google. We acknowledge that this usage
            of the homepage is valuable, and there is nothing inherently wrong
            with how users interacted with it. As a result, we reverted back to
            the original homepage design very quick, and redesign the links.
          </p>
          <p>
            It&apos;s important to always keep the user&apos;s needs and habits
            in mind when making changes to a website or application. In this
            case, it seems like the users had developed a certain behavior and
            pattern of use for the homepage that was disrupted by the sudden
            change. It might be worth considering conducting more user research
            to identify what specific improvements could be made to the homepage
            to make it more useful without disrupting the user&apos;s
            established patterns of use.
          </p>
        </div>
      </ScrollInComponent>
    </>
  );
};

export default ProjectDetail;
