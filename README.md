<div align="center">
<h1><a href="https://2024.cusec.net" target="_blank">CUSEC 2024 Website</a></h1>
</div>

<div align="center">
<h4>Designed with 💜 by <a href="https://bavneetsandhu.com/" target="_blank">Bavneet Sandhu</a> </br>
  Developed with 🧡 by <a href="https://www.linkedin.com/in/mfarabi/" target="_blank">Mumtahin Farabi</a></h4>
</div>

![image](https://github.com/cusec/2024/assets/54924158/dd2e480b-88b1-40f9-b024-b3394ca3a4d4)

This is the official repository for the 2024 edition of the CUSEC website.

## Project Brief
<details>
<summary>Introduction</summary>
</br>
The purpose of this project is to develop a dynamic and visually appealing website for the Canadian Universities Software Engineering Conference (CUSEC) to be held in 2024. The website will serve as a central hub of information for attendees, sponsors, speakers, and volunteers, providing a seamless and intuitive user experience.

</details>

<details>
<summary>Objectives</summary>
</br>

The main objectives of the CUSEC website are as follows:

a. Inform and Engage: The website should effectively communicate key details about the conference, including dates, location, schedule, speakers, and workshops. It should engage visitors by showcasing the benefits of attending CUSEC and create a sense of excitement.

b. Registration and Ticketing: The website should provide an intuitive and secure registration system, allowing attendees to purchase tickets, select workshops, and manage their registration details.

c. Speaker and Sponsor Promotion: The website should highlight the speakers and sponsors, providing comprehensive information about their backgrounds and contributions. It should also offer advertising and promotional opportunities for sponsors.

d. Seamless User Experience: The website should be user-friendly, responsive, and accessible across various devices and browsers. It should offer intuitive navigation, quick access to information, and clear calls to action to enhance user engagement.

</details>

<details>
<summary>Key Features and Functionality</summary>
</br>
The CUSEC website should include the following features and functionality:

a. Home Page: A visually appealing landing page with essential conference details, highlights, and a prominent call to action for registration.

b. Schedule and Sessions: A detailed schedule of conference events, including keynote speeches, workshops, and breakout sessions, with the ability to filter by date, time, and category.

c. Speaker and Sponsor Profiles: Individual profiles for speakers and sponsors, showcasing their biographies, affiliations, and contributions.

d. Registration and Ticketing: An intuitive registration system allowing attendees to purchase tickets, select workshops, and manage their registration details. Integration with a secure payment gateway for online transactions.

e. News and Updates: A section for news and updates related to the conference, including announcements, changes in schedule, and important information for attendees.

f. FAQ and Support: A comprehensive FAQ section addressing common queries and providing support to attendees, speakers, sponsors, and volunteers.

g. Contact and Feedback: A contact form for general inquiries and feedback, along with contact information for specific conference organizers and departments.

h. Mobile Responsiveness: Ensuring the website is optimized for mobile devices to provide a seamless experience for users on smartphones and tablets.

</details>


<details>

<summary>Design and Visual Elements</summary>
</br>
The website's design should reflect the professional yet vibrant nature of the conference. Consider the following design elements:

a. Visual Appeal: Engaging and modern design elements, including high-quality images, videos, and graphics.

b. Color Palette: Select a color scheme that aligns with the conference branding and creates a visually cohesive experience.

c. Typography: Use legible fonts that are consistent with the conference's visual identity.

d. Branding: Incorporate the CUSEC logo and branding elements throughout the website to reinforce brand recognition.
</details>

[Figma Branding and Style Guide](https://www.figma.com/file/uvPCog1QeAfpLkw3eRxLF1/CUSEC-2024-Branding?type=design&node-id=183-2&mode=design&t=5TeTLy17LDfCZWSR-0)

[Figma Design](https://www.figma.com/file/YIXUF9Ph6T0ZT2o7gk9QN9/CUSEC-Website-Design?type=design&node-id=6%3A1406&mode=design&t=wJ4S4yLATSqyw3WI-1)

<details>
<summary>Technical Requirements</summary>
</br>
The website should be built using industry-standard technologies and frameworks. Consider the following technical requirements:

a. Content Management System (CMS): Implement a user-friendly CMS to allow conference organizers to easily update and manage website content.

b. Responsive Web Design: Develop a responsive website that adapts to different screen sizes and resolutions.

c. Security and Privacy: Implement robust security measures to protect user data and ensure compliance with data protection regulations.

d. Search Engine Optimization (SEO): Optimize the website for search engines to improve visibility and organic traffic.

e. Analytics and Reporting: Integrate analytics tools to track website performance, user engagement, and conversion rates.
</details>

<details>
  <summary>Learning Log</summary>

- Effectively communicating and collaborating with a designer to build a website from scratch🤝
- Using developer mode in figma🧑‍💻
- Using Next.js 13 app router, and using `<Link>` and `<Image>` components instead of `<a>` and `<img>` tags🔗🖼️
- Defining custom types using TypeScript✅
- Using Tailwind to rapidly create layouts and basic styling🚀
- Making custom tailwind colors and using the `[]` syntax💄
- Soft resetting the head to undo the most recent commit, but not getting rid of the changes locally🧠
- Reverting git commits and resetting the head back to past commits🕜
- Adding files to past git commits that weren't pushed➕
- Adding files to past git commits that were pushed, and force pushing them➕➕
- Creating grid backgrounds using vanilla CSS⏹️
- Giving texts gradient backgrounds🟣🟡
- Creating better adaptive layouts with custom breakpoints🧐
- Creating a frosted Navbar❄️
- Creating a custom animated hamburger icon using hover groups, transforms, and transition timing functions🍔
- Passing states up and down parent and child components using the `createContext()` and `useContext()` React hooks🪝
- Creating more complex two-dimensional layouts using grid instead of flexbox⬛
- Creating a responsive ribbon in Tailwind CSS🎗️
- Making a footer that's fairly responsive and doesn't suck🦶
- Finally understanding how absolute and relative positionings work in CSS🤯
- Using the 'styles' prop in conjunction with Tailwind to add advanced inline styles, such as clip paths and svg rendering💅
- Using CSS clip path with the 'path' function to create custom cubic bezier curves for components🛣️
- Setting types for images that are expected as props inside a child component🖼️
- Making certain props optional using the '?' operator❓
- Using the [Swiper.js](https://swiperjs.com/) React API to create image carousels🎡
- Customizing pagination bullets and navigation arrows in Swiper.js carousels🔨
- Relatively positioning html elements for hover effects🖱️
- Selectively merging certain commits from one branch to another using git cherry-pick🍒
- Using the `<a>` tag when using the 'mailto:' functionality instead of the `<Link>` tag. The `<Link>` tag is meant to interface with Next.js' file-based routing. Using it for 'mailto:' will result in buggy behaviour. In my case constantly opening the email whenever the page is brought back into window context📨
- Next's `<Image>` tag's `width` and `height` properties aren't necessarily for the actual size that the image will be displayed at. That's determined by the 'sizes' property⁉️
- Routing to sections in different pages using url paths in `href` tag🛣️
- Using [Framer Motion](https://www.framer.com/motion) to add smooth, performant, customized animations🤸
- Routing to an id on different page and making the scroll behaviour smooth🧈
- Refactoring code can be a nightmare🤦‍♂️
- Dynamically rendering social media icons📸
- Using [react-countup](https://www.npmjs.com/package/react-countup) to implement a counting up effect for numbers when they're scrolled into the viewport⬆️
- Setting up [Vercel Analytics](https://vercel.com/analytics)🔬
- Using [Google Search Console](https://search.google.com/search-console/about) to debug SEO issues🕷️
- Generating a sitemap with a script to improve SEO🗺️
- Learning about DNS and configuring domains🌐
- Sending emails through code is a nightmare💀
- Using the [Resend](https://resend.com/home) email service to verify domain, generate API key, and implement a functional contact form📨
- Creating email templates for automatic responses from the [Resend](https://resend.com/home) server to user that filled out the contact form; thus providing confirmation that their message has been received by the team👍
- Using the [react-toastify](https://www.npmjs.com/package/react-toastify) library to display notifications to the user once they hit the submit button on the contact form🔔
- Reducing bundle sizes through code refactor, resulting in improved performance🚀
- Carefully architecting a page before jumping into development. Deeply thinking about the html structure first🏗️
- Storing data in nested JSON files and accessing them📃
- You can't use for loops, if...else statements, and switch...case statements directly inside jsx🤯
- Setting custom screen breakpoints on Tailwind📱
- Adding calendar integration using the [Add to Calendar Button](https://add-to-calendar-button.com/) library📅
- Using `git merge main --ff-only` to merge commits from main to dev branch while avoiding merge commits✅
- Adding a popup modal using the [reactjs-popup](https://react-popup.elazizi.com/) library🎉
</details>
