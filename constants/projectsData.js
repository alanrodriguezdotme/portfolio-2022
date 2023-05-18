export const projectsData = [
  {
    id: "deep-sampler",
    title: "Deep Sampler",
    subtitle: "Generate unique drum samples based on your own library",
    roles: ["Designer", "Developer"],
    company: "Audialab",
    type: ["Work"],
    link: "https://deepsampler.audialab.com/",
    description:
      "Deep Sampler is a new project by Audialab that can generate unique drum samples from the ones in your own library. You can adjust how close to the original sound you want it to be, and save your favorite samples, along with their sources. I designed and developed the alpha using React and WaveSurferJS.",
    thumbnail: "screenshot-square.png",
    mainVideo: {
      url: "https://www.youtube.com/embed/iji1i2Alw0s",
      width: 585,
      height: 400,
    },
    images: ["screenshot.png"],
  },
  {
    id: "emergent-drums",
    title: "Emergent Drums",
    type: ["Work"],
    thumbnail: "emergent-drums-plugin-full.png",
    mainVideo: {
      url: "https://www.youtube.com/embed/jcc7BqugUO8",
      width: 585,
      height: 400,
    },
    // mainImage: "emergent-drums-plugin-full.png",
    images: [
      "emergent-drums-plugin-full.png",
      "emergent-drums-plugin-compact.png",
      "emergent-drums-features.png",
      "emergent-drums-landing-page.png",
      "emergent-drums-purchase.png",
      "emergent-drums-team.png",
    ],
    roles: ["Branding", "Product Design", "Front-end Development", "Marketing"],
    company: "AudiaLab",
    subtitle: "Generate countless drum samples using AI",
    description:
      "Started by a good friend of mine, Berkeley Malagon, Emergents Drums is a music production plugin that can generate endless drum samples, all royalty-free. I joined him early in the project, and together with a small, rag-tag team, we developed the idea from an early alpha only available in the browser, all the way to launching a fully-loaded VST3 plugin. I designed nearly everything from the brand, website, and plugin. I worked closely with JUCE developers and our growing Discord community to refine and shape the plugin experience. Berkeley and I also built and maintain the website using NextJS and a custom backend and inference server.",
    link: "https://audialab.com",
  },
  {
    id: "meta-os",
    title: "Meta OS",
    subtitle:
      "Robust prototype showing alignment across Office, Outlook, and Teams",
    roles: ["UX Engineer"],
    company: "Microsot",
    type: ["Work"],
    description:
      "On MetaOS, our goal was to align UX components and experiences across Office, Outlook, and Teams. My role as the UX Engineer was to build a robust prototype to both iterate with, and act as a north",
    thumbnail: "meta-os-teams.png",
    mainVideo: {
      url: "https://www.youtube.com/embed/0j86-xJmzD8",
      width: 585,
      height: 400,
    },
    images: ["https://www.youtube.com/embed/KXirDwhQNlg"],
  },
  {
    id: "cortana-office-assistant",
    title: "Cortana Office Assistant",
    type: ["Work"],
    thumbnail: "pc-companion-hq-front.jpg",
    mainImage: "pc-companion-hq-front.jpg",
    roles: ["3D Design/Printing", "Industrial Design", "Software Development"],
    company: "Microsoft AI",
    subtitle: "Exploring the relationship between PCs and  assistive devices",
    description:
      "This unnamed project played with the idea of a smart speaker for your office desk, that also serves as a companion device for your PC. Notifications would be handled by the device, allowing you to focus more on your work. Using computer vision, we could use the camera, along with other signals, to do things like lock your PC when you are not seen. While away, the device could be used by others to leave messages or find out you will be back.",
    sections: [
      {
        title: "Hardware",
        text: [
          "This was one of my first forays into industrial/hardware design, but I started it like I do any other design project--by sketching. To keep it simple, I focused on simple shapes and forms.",
          `Eventually, I settled on the simplest shapes I came up with--a cylinder and a cube. I brought it into Adobe Illustrator to flesh out the concept a bit more. The idea was starting to take shape, but trying to design a 3D object in a 2D space is limiting. 
              <p>Then, I thought to myself, <span style="font-style: italic;">“what if I learned 3D?”</span></p>
              <p>I discovered Blender and immersed myself in tutorials and guides. Within a week, I managed to create a decent looking render. However, it still felt a bit rough, and as much as I enjoyed learning 3D, I can only learn and do so much on my own.</p>
              <p>We needed help.</p>`,
        ],
        images: [
          "pc-companion-sketch.png",
          "pc-companion-illustration-cube.png",
          "pc-companion-blender-render1.png",
        ],
      },
      {
        title: "Collaboration",
        text: [
          "We reached out to a 3D artist on our team, who took my designs and really went wild with them. He created some gorgeous, hyper-realistic, renders, which helped secure approval and resources to continue the project",
          "Alongside our hardware explorations, we also worked closely with a group of computer vision experts, who helped develop Microsoft's Hololens. While we were designing the hardware, they were working on a software prototype to explore what facial and gaze recognition could do for users. How can we help users if we know who they are, who is around them, and what they are focused on?",
        ],
        images: [
          "pc-companion-hq-front.jpg",
          "pc-companion-face-api.png",
          "pc-companion-gaze-detection.png",
        ],
      },
      {
        title: "Prototyping",
        text: [
          `I've always wanted to try 3D printing, and this project was the perfect excuse to do so. I invested in a 3D printer, started learning Fusion 360, and began designing the outer shell of the prototype. 
          <p>
          For the electronics, the shell itself was designed off the form factor of a Raspberry Pi 3 B+, as well as microphone, LED array, touchscreen, and speakers.</p>`,
        ],
        images: [
          "pc-companion-fusion360.png",
          "pc-companion-shell-render1.png",
          "pc-companion-prototype-2.jpg",
        ],
      },
      {
        title: "Results",
        text: [
          `From knowing nearly nothing about 3D software, 3D printing, or industrial design, we were able to create a functioning hardware prototype to explore the concept of Cortana in the workplace. In the process, we learned a lot of things and leveled up some new skills, but the most important we learned was computer vision is an amazing technology, but can also be invasive and raises many privacy and security concerns.`,
        ],
      },
    ],
  },
  {
    id: "voice-patterns",
    title: "Voice Interaction Guidelines",
    subtitle: "Building Microsoft's guidelines on voice interaction and design",
    roles: ["Full-Stack Development, Web Design"],
    company: "Microsoft AI",
    type: ["Work", "Case Study"],
    // link: "/demos/voice-patterns",
    description:
      "There has been a significant growth in digital voice experiences over the past decade, and with that growth comes a slew of different solutions and sometimes messy design patterns. While on the Cortana design team, we saw this as an opportunity--not only to bring some order to the abundance of ideas going around the company, but also to share the experinces and expertise of our voice designers, and make these modern voice experiences truly helpful for all users.",
    thumbnail: "voice-patterns-home.png",
    mainImage: "voice-patterns-home.png",
    sections: [
      {
        title: "Taking the reigns",
        text: [
          "This effort was previously led by two other folks on the Cortana Design team. They worked closely with the voice designers to faithfully represent their guidelines. When I took over the project, the main goals were to get it visually more aligned with the branding efforts happening at that time, make it mobile-responsive, and of course, fix bugs and get it deployed.",
          "The site consisted of two endpoints: the site itself, and the Strapi CMS. The CMS part was working well, and luckily did not need any work. However, there were some foundational bugs that requried significant refactoring. One of these bugs was routing, which was working inconsistently, due to implemented improperly.",
        ],
        images: ["voice-patterns-strapi.png"],
      },
      {
        title: "Brand alignment",
        text: [
          "I worked closely with the visual designers to help with the redesign. They had limited hours to spend on this project, so we asked them focus on the homepage, as it required the most visual help. They provided a vibrant and refreshing new layout and colors, as well as some wonderful custom illustrations. While building the homepage, I added a parallax scrolling effect to some of the sections, as well as wrote CSS to ensure the SVG illustrations would look good no matter the viewport size.",
          "I applied, and extended, the styles and patterns from the homepage to the documentation pages and skill builder, as well as the tablet and mobile versions. I also set up a cadence of design reviews with the visual designers, to ensure brand alignment.",
        ],
        images: [
          "voice-patterns-homepage-detail.png",
          "voice-patterns-interaction-types.png",
          "voice-patterns-home2.png",
          "voice-patterns-pattern.png",
          "voice-patterns-guideline.png",
          "voice-patterns-mobile.png",
        ],
      },
      {
        title: "Voice Skill Builder & Emulator",
        text: [
          "A big part of these guidelines is a voice skill builder and emulator which allowed users to write a simple dialogue flow for a voice skill and experience it using Cortana's voice. Users were taken through a wizard where they could write the spoken and displayed prompts for each step of the flow. There is also a method to create, reference, and share pre-built skills.",
        ],
        images: [
          "voice-patterns-skillbuilder.png",
          "voice-patterns-skillbuilder-emulator.png",
        ],
      },
    ],
  },
  {
    id: "cohesive-classrooms",
    title: "Cohesive Classrooms",
    type: ["Work"],
    thumbnail: "final-logo-colors.png",
    mainImage: "final-logo-colors.png",
    images: [
      "website-1.png",
      "website-2.png",
      "logo-ideas.png",
      "color-exploration.png",
    ],
    roles: ["Branding, Design, Development, Video Editing"],
    company: "Cohesive Classrooms",
    subtitle:
      "Cultivating classrooms where every child is seen, valued, and accepted",
    description:
      "My wife and her friend/colleague started Cohesive Classrooms--a series of video modules centered around classroom management for K-12 teachers. I worked with them to iterate on their branding and website design. Once approved, I taught myself NextJS to build site and make it SEO-friendly for their budding business.",
    link: "https://cohesiveclassrooms.com",
  },
  {
    id: "email-dictation",
    title: "Outlook Email Dictation",
    type: ["Work"],
    thumbnail: "email-dictation-bold.png",
    mainVideo: {
      url: "https://player.vimeo.com/video/786780398?h=b929e1b434&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      width: 500,
      height: 723,
    },
    images: [
      "email-dictation-new-message.png",
      "email-dictation-bold.png",
      "email-dictation-add-recipient.png",
      "email-dictation-italicize.png",
    ],
    roles: ["Front-End Development", "Product Design"],
    company: "Microsoft AI",
    subtitle:
      "Long form dictation has been around for decades. How can we modernize it?",
    description:
      "In collaboration with designers from Outlook and Cortana, I built a prototype that gives a gilmpse into what modern dictation could look like. Formatting while dictating is already difficult, but what if you could add someone to an email? Furthermore, what if you could add attachments and links without touching the keyboard?",
    link: "/demos/outlook-email-dictation",
  },
  {
    id: "teams-voice-skills",
    title: "Voice Skills in Microsoft Teams",
    type: ["Work"],
    subtitle: "What could a voice experience in Microsoft Teams look like?",
    description:
      "At this point in Cortana's history, we began to explore what voice experiences could look like within an indvidual app. We worked with Teams as a starting point, with a focus on messaging. This prototype shows how it would look and sound to have a multi-turn skill within the Teams mobile app.",
    thumbnail: "cortana-in-teams-distracted-disambig.png",
    mainVideo: {
      url: "https://player.vimeo.com/video/786794556?h=89a228e8e2&badge=0&autopause=0&player_id=0&app_id=58479/embed",
      width: 500,
      height: 723,
    },
    images: [
      "cortana-in-teams-full-attention-panel.png",
      "cortana-in-teams-full-attention-disambig.png",
      "cortana-in-teams-full-attention-message.png",
      "cortana-in-teams-settings.png",
      "cortana-in-teams-distracted-message.png",
      "cortana-in-teams-distracted-disambig.png",
    ],
    roles: ["Front-End Development", "Motion Design"],
    company: "Microsoft AI",
    link: "/demos/teams-voice-skills",
  },
  {
    id: "sprite-board",
    title: "Sprite Board",
    type: ["Work"],
    subtitle: "Cortana everywhere",
    thumbnail: "sprite-board.jpg",
    mainImage: "sprite-board.jpg",
    images: [
      "sprite-form-factors.jpg",
      "sprite-box-inside.jpg",
      "sprite-buzzer-inside.jpg",
      "sprite-stopwatch-sketch.png",
      "sprite-stopwatch-render-top.png",
      "sprite-stopwatch-render-right.png",
    ],
    description: `Some of our U.K. counterparts on the Lift London team designed and fabricated a surprisingly small, custom PCB that could run the Cortana SDK. Our team was asked to explore some possible uses. I started with a simple cube with a button and speaker, just to get a feel for it. I then explored a simple wearable "buzzer" concept, which felt closer to something that might be useful. With further improvements to the board and some additional components, we could create a portable, rugged, and low-cost assistive device for workers who may not always be around a PC or mobile phone.`,
    roles: ["3D Design/Printing", "Electronics", "Industrial Design"],
    company: "Microsoft AI",
  },
  {
    id: "meeting-bookmarks",
    title: "Meeting Bookmarks",
    type: ["Work"],
    thumbnail: "meeting-bookmark-utterance.png",
    mainVideo: {
      url: "https://player.vimeo.com/video/786780241?h=f6656aa023&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      width: 500,
      height: 723,
    },
    // images: [
    //   "meeting-bookmark-empty.png",
    //   "meeting-bookmark-bookmark.png",
    //   "meeting-bookmark-saved.png",
    // ],
    subtitle: "Could a simple button eliminate the need for taking notes?",
    description:
      "Working with a cross-discipline incubation team in Cortana, this prototype explores the idea bookmarks in meetings. Recording and AI-enabled transcriptions of meetings is becoming more commonplace. Instead of taking notes about everything that was discussed, what if each member had a button that, when pressed, would bookmark what was just said. After the meeting, the user was emailed a list of their bookmarks, as well as an aggregation of popular bookmarks, which may include the slide being presented, an audio recoring of what was said along with the text from the transcript. Is this enough to eliminate the need for taking notes? , we also the user-generated signal from the bookmarks can help identify what is truly important to people.",
    roles: ["Front-End Development", "UX Design"],
    company: "Microsoft AI",
  },
  {
    id: "cortana-teams",
    title: "Smarter Suggestions",
    type: ["Work"],
    subtitle: "More than just suggested replies",
    thumbnail: "scheduling.gif",
    mainImage: "scheduling.gif",
    images: ["availability.gif", "agenda.gif", "files.gif"],
    description: `This prototype is part of a larger effort to explore what Cortana can do within other Microsoft products. In this case, we looked into what kinds of helpful insights and suggestions we can bring into a chat. If someone asks for your availability for a certain date, why not just show your agenda? Can we do that with documents when people ask for them?`,
    roles: ["Front-End Development", "UX Design"],
    company: "Microsoft AI",
  },
  {
    id: "cortana-windows",
    title: "Better Assistance in Windows",
    type: ["Work"],
    subtitle: "How does Cortana transition from desktop to app?",
    thumbnail: "cortana-windows.gif",
    mainImage: "cortana-windows.gif",
    description: `We explored how Cortana can be used in Windows and Microsoft apps, and how to handle that transition. What does that handoff look like and does it feel natural and consistent across all endpoints?`,
    roles: ["Front-End Development"],
    company: "Microsoft AI",
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Design",
    subtitle: "Super long page with scroll-based animations",
    roles: ["Front-End Development"],
    company: "Microsoft Office",
    type: ["Work"],
    link: "/demos/outlook-design-cross-platform",
    description:
      "The creative director of Outlook wrote a white paper about respecting the user's choice of platform, even if it belongs to a competitor. I worked with him to build a site that would illustrate the details of the paper, and help evangelize his efforts.",
    thumbnail: "cross-platform.gif",
    mainImage: "cross-platform.gif",
  },
  {
    id: "paper-templates",
    title: "Paper Templates",
    type: ["Fun"],
    thumbnail: "paper-templates-isometric.png",
    mainImage: "paper-templates-isometric.png",
    images: [
      "paper-templates-dots.png",
      "paper-templates-panels.png",
      "paper-templates-circular.png",
      "paper-templates-handwriting.png",
    ],
    roles: ["Design", "Development"],
    company: "Personal",
    subtitle:
      "Customize your own graph, dot grid, or various other types of paper templates.",
    description:
      "I had this idea in my head for a while, and I finally found the time to build it. I wanted to create a tool that would allow you to customize your own paper templates. I started with a simple graph paper template, and then added more and more templates. I also added the ability to customize the size of the template, the color of the lines, and the spacing between the lines. Built with NextJS, Tailwind, and SVG.js.",
    link: "https://papertemplates.xyz",
  },
  {
    id: "ffdraftboard",
    title: "FF Draftboard",
    type: ["Fun"],
    thumbnail: "roster-dark.png",
    mainImage: "roster-dark.png",
    images: ["roster-light.png", "home.png", "home-select-league.png"],
    roles: ["Design", "Development"],
    company: "Personal",
    subtitle: "A draftboard view for Sleeper dynasty leagues",
    description:
      "I'm a bit of a fantasy football nerd, so I spend a lot of time in the Sleeper app. Their platform is pretty amazing, I found it's trade view a bit lacking. I wanted to see all of the rosters and picks in one place, with some basic details. I discovered they have a public API, and I got to work. This was built using NextJS, Material UI, and the Sleeper API.",
    link: "https://ffdraftboard.com",
  },
  {
    id: "musicbox",
    title: "Musicbox",
    type: ["Project"],
    subtitle: "RFID-enabled MP3 player--you know, for the kids!",
    thumbnail: "musicbox-v5.jpg",
    mainImage: "musicbox-v5.jpg",
    link: "https://www.youtube.com/watch?v=o2iCclP4CFg",
    images: [
      "musicbox-v4.jpg",
      "musicbox-v4-knob-detail.jpg",
      "musicbox-v3.jpg",
      "musicbox-v3-inside.jpg",
      "musicbox-v2.jpg",
      "musicbox-v1.jpg",
    ],
    description: `Using a Raspberry Pi, USB speakers, button array, RFID-reader, and a laser cutter, this ongoing project is a simple way to let kids play music and control what they listen to. It started off with just the RFID reader and some RFID cards--a visual way to distinguish between songs and playlists. Then I added buttons and housing. The next version included a handle, volume knob, and cool hardware. In the most recent version, I've added a LCD display, RGB LED buttons, and storage for the RFID cards.`,
    roles: [
      "Industrial Design",
      "Electronics",
      "Software Development",
      "3D Design/Printing",
    ],
    company: "Personal",
  },
  {
    id: "whereabouts",
    title: "Whereabouts",
    subtitle: "A simple sign to let people know where you are",
    roles: ["Electronics", "Product Design", "Software Development"],
    company: "Microsoft Office",
    type: ["Work", "Project"],
    description:
      "A skunkworks project while working on the Outlook Design team, the WhereAbouts app is a companion to a small, wi-fi enabled LCD screen that you place on your desk to let your team know where you are. Send your location or custom messages to the screen from anywhere.",
    thumbnail: "sign2.jpg",
    mainImage: "sign2.jpg",
    images: ["Main.png", "Swipe-action.png", "Menu-Settings.png"],
  },
  {
    id: "playplay",
    title: "PlayPlay",
    subtitle: "Democratized playlists",
    roles: ["Product Design", "Full Stack Development"],
    company: "Personal",
    type: ["Project"],
    // link: "http://playplay.space",
    description:
      "Create the ultimate playlist with your friends or co-workers. Take turns picking songs and vote on what your friends pick. Integrated chat lets you rave about those bangers or make fun of the cheesy tracks.",
    thumbnail: "playplay-web-home.png",
    mainImage: "playplay-web-home.png",
    images: ["playplay-web-playlist.png", "playplay-web-create.png"],
  },
  // {
  //   id: "days-past",
  //   title: "Days Past",
  //   subtitle: "A brand inspired by nostalgia.",
  //   roles: [
  //     "Brand Design",
  //     "Graphic Design",
  //     "Fullstack Development",
  //     "Marketing",
  //   ],
  //   company: "",
  //   type: [""],
  //   description: `I started messing around with t-shirt designs that focused on two of my passions: hip hop and video games. Because of this, the brand was originally called "Homeboy Advance". Eventually, I started to include other interests, such as history, art, and design. I changed the name to "Days Past" to better encompass nostalgic nature of the things I'm drawn to. I shut the site down in 2020 for personal reasons, but I've played around with the idea of bringing it back. Who knows? 🤷‍♂️`,
  //   thumbnail: "dayspast-logo.png",
  //   mainImage: "dayspast-logo.png",
  //   images: [
  //     "dayspast-logo-ideas.png",
  //     "tshirt-toejam-earl-public-enemy.png",
  //     "hoodie-mario-shakur.png",
  //     "tshirt-blue-herb.png",
  //     "tshirt-different-strokes.jpg",
  //     "pillow-brooklyn-map.png",
  //     "hat-zelda-bomb.png",
  //     "phonecase-flowers.jpg",
  //   ],
  // },
];

// {
//   id: "",
//   title: "",
//   subtitle: "",
//   roles: [""],
//   company: "",
//   type: [""],
//   link: "",
//   description: "",
//   thumbnail: "",
//   mainImage: "",
//   images: [""],
// }
