import React from 'react';
import Layout from '@theme/Layout';
import MultipleChoiceQuiz from '../components/learning/MultipleChoiceQuiz';
import styles from './index.module.css';

/* ----------------------------- Data ---------------------------------- */

const companions = [
  {
    name: 'Leela',
    tagline: 'Curious about everything.',
    detail: 'She asks the questions you are wondering about too.',
    emoji: '🧒',
  },
  {
    name: 'Manjari',
    tagline: 'Guides with questions and clues.',
    detail: 'A wise little bird who helps you think before you answer.',
    emoji: '🐦',
  },
  {
    name: 'Astra',
    tagline: 'Reveals the knowledge hidden within.',
    detail: 'A magical book that explains the world through stories.',
    emoji: '📖',
  },
];

const discoveries = [
  {title: 'The Sun', desc: 'The star at the heart of it all', href: '/solar-system/sun', icon: '☀️'},
  {title: 'Rocky Planets', desc: 'Mercury, Venus, Earth and Mars', href: '/solar-system/mars', icon: '🪨'},
  {title: 'Gas Giants', desc: 'Jupiter, Saturn, Uranus and Neptune', href: '/solar-system/jupiter', icon: '🪐'},
  {title: 'The Moon', desc: 'Earth\u2019s companion in the night sky', href: '/solar-system/moon', icon: '🌙'},
  {title: 'Space Exploration', desc: 'How we visit and study these worlds', href: '/solar-system/beyond-neptune', icon: '🚀'},
  {title: 'Solar System Facts', desc: 'Surprising numbers about our neighborhood', href: '/activities/did-you-know', icon: '🔭'},
];

const journeySteps = [
  {label: 'Leela asks', detail: 'A curious question opens the lesson', icon: '🧒'},
  {label: 'Manjari guides', detail: 'A gentle clue gets you thinking', icon: '🐦'},
  {label: 'Astra reveals', detail: 'The knowledge unfolds like a story', icon: '📖'},
  {label: 'You explore', detail: 'Facts, pictures and comparisons', icon: '🌍'},
  {label: 'You test your knowledge', detail: 'A quick check to make it stick', icon: '✨'},
];

const featuredStops = [
  {label: 'The Journey Begins', href: '/solar-system/journey-begins'},
  {label: 'Meet the Sun', href: '/solar-system/sun'},
  {label: 'Mercury', href: '/solar-system/mercury'},
  {label: 'Venus', href: '/solar-system/venus'},
  {label: 'Our Home — Earth', href: '/solar-system/earth'},
  {label: 'The Moon', href: '/solar-system/moon'},
  {label: 'Mars — The Red Planet', href: '/solar-system/mars'},
  {label: 'Jupiter — The Giant', href: '/solar-system/jupiter'},
  {label: 'Saturn and Its Rings', href: '/solar-system/saturn'},
  {label: 'Uranus', href: '/solar-system/uranus'},
  {label: 'Neptune', href: '/solar-system/neptune'},
  {label: 'Beyond Neptune', href: '/solar-system/beyond-neptune'},
];

const techStack = [
  {name: 'MDX', desc: 'Markdown content with live React components'},
  {name: 'React', desc: 'Interactive lessons that hydrate to static HTML'},
  {name: 'Docusaurus', desc: 'The static site generator that ties it together'},
  {name: 'GitHub', desc: 'Version-controlled content with code review'},
  {name: 'GitHub Pages', desc: 'Free static hosting for the published demo'},
];

/* --------------------------- Components ------------------------------- */

function Hero(): React.JSX.Element {
  return (
    <section className={styles.hero}>
      <div className={styles.heroStars} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <p className={styles.heroBrand}>
            <span className={styles.heroBrandMark} aria-hidden="true">✦</span>
            Ananta Gnanam
          </p>
          <h1 className={styles.heroTitle}>
            Journey Through the Solar System
          </h1>
          <p className={styles.heroSubtitle}>
            A story-driven exploration of our cosmic neighborhood with Leela,
            Manjari, and Astra.
          </p>
          <div className={styles.heroActions}>
            <a className={`ag-btn ag-btn--primary ${styles.heroCtaPrimary}`} href="/solar-system/journey-begins">
              Start the Journey
            </a>
            <a className={styles.heroCtaSecondary} href="/solar-system/sun">
              Explore Lessons
            </a>
          </div>
          <p className={styles.heroBadge}>
            Powered by MDX + GitHub Pages
          </p>
        </div>
        <div className={styles.heroVisual}>
          <img
            src="/img/hero-planets.svg"
            alt="The Sun with a line-up of the planets that orbit it"
            width={640}
            height={272}
          />
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: string;
  sub?: string;
}): React.JSX.Element {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.sectionKicker}>{kicker}</p>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {sub && <p className={styles.sectionSub}>{sub}</p>}
    </div>
  );
}

function Companions(): React.JSX.Element {
  return (
    <section className={styles.section} id="companions">
      <div className={styles.container}>
        <SectionHeading
          kicker="Your learning companions"
          title="Meet Leela, Manjari & Astra"
          sub="Every lesson is a little conversation between three friends — and you."
        />
        <div className={styles.companionGrid}>
          {companions.map((c) => (
            <article className={styles.companionCard} key={c.name}>
              <div className={styles.companionEmoji} aria-hidden="true">
                {c.emoji}
              </div>
              <h3 className={styles.companionName}>{c.name}</h3>
              <p className={styles.companionTagline}>{c.tagline}</p>
              <p className={styles.companionDetail}>{c.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Discoveries(): React.JSX.Element {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="discover">
      <div className={styles.container}>
        <SectionHeading
          kicker="What you\u2019ll discover"
          title="Six doors into the Solar System"
          sub="Jump into any topic — each one is a complete little lesson."
        />
        <div className={styles.discoveryGrid}>
          {discoveries.map((d) => (
            <a className={styles.discoveryCard} href={d.href} key={d.title}>
              <span className={styles.discoveryIcon} aria-hidden="true">
                {d.icon}
              </span>
              <span className={styles.discoveryTitle}>{d.title}</span>
              <span className={styles.discoveryDesc}>{d.desc}</span>
              <span className={styles.discoveryArrow} aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowLearningWorks(): React.JSX.Element {
  return (
    <section className={styles.section} id="how-learning-works">
      <div className={styles.container}>
        <SectionHeading
          kicker="How learning works here"
          title="One pattern, every lesson"
          sub="Stories make ideas easy to remember."
        />
        <div className={styles.flow}>
          {journeySteps.map((step, index) => (
            <React.Fragment key={step.label}>
              <div className={styles.flowCard}>
                <span className={styles.flowEmoji} aria-hidden="true">
                  {step.icon}
                </span>
                <span className={styles.flowLabel}>{step.label}</span>
                <span className={styles.flowDetail}>{step.detail}</span>
              </div>
              {index < journeySteps.length - 1 && (
                <span className={styles.flowArrow} aria-hidden="true">
                  ↓
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedJourney(): React.JSX.Element {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="journey">
      <div className={styles.container}>
        <SectionHeading
          kicker="Featured learning journey"
          title="Twelve stops, one big story"
          sub="Start at the beginning and follow the path from the Sun to the edge of the known Solar System."
        />
        <div className={styles.journeyCard}>
          <div className={styles.journeyStops}>
            {featuredStops.map((stop, index) => (
              <a className={styles.journeyStop} href={stop.href} key={stop.label}>
                <span className={styles.journeyStopNum}>{index + 1}</span>
                <span className={styles.journeyStopLabel}>{stop.label}</span>
              </a>
            ))}
          </div>
          <a className={`ag-btn ag-btn--primary ${styles.journeyCta}`} href="/solar-system/journey-begins">
            Begin the Journey
          </a>
        </div>
      </div>
    </section>
  );
}

function QuizPreview(): React.JSX.Element {
  return (
    <section className={`${styles.section} ${styles.sectionWarm}`} id="quiz-preview">
      <div className={styles.container}>
        <div className={styles.quizGrid}>
          <div className={styles.quizIntro}>
            <SectionHeading
              kicker="Try it right now"
              title="A taste of what\u2019s inside"
              sub="Every lesson ends with a quick check. This one works entirely in your browser — no backend needed."
            />
            <p className={styles.quizNote}>
              Want the full challenge? Visit the{' '}
              <a href="/activities/quiz">Solar System Quiz</a> with ten questions.
            </p>
          </div>
          <div className={styles.quizDemo}>
            <MultipleChoiceQuiz
              question="Which planet is known as the Red Planet?"
              options={['Venus', 'Mars', 'Jupiter', 'Mercury']}
              correctIndex={1}
              explanation="Iron minerals in Martian soil oxidized over time, giving Mars its reddish color."
              title="Quick Check Preview"
              aria-label="Preview quiz: Which planet is known as the Red Planet?"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BuiltWith(): React.JSX.Element {
  return (
    <section className={styles.section} id="built-with">
      <div className={styles.container}>
        <SectionHeading
          kicker="How this demo was built"
          title="A small stack with a big reach"
          sub="Content lives as plain files. The build turns them into a fast, free, always-on website."
        />
        <div className={styles.techGrid}>
          {techStack.map((t) => (
            <article className={styles.techCard} key={t.name}>
              <h3 className={styles.techName}>{t.name}</h3>
              <p className={styles.techDesc}>{t.desc}</p>
            </article>
          ))}
        </div>
        <div className={styles.techFooter}>
          <p>
            Want to know how it all fits together?{' '}
            <a href="/demo/how-mdx-works">Read How This Demo Works</a> — it explains
            the full path from a Markdown file to the page you are reading now.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Page ---------------------------------- */

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Journey Through the Solar System"
      description="Explore the Solar System through stories, interactive lessons, and curiosity-driven learning with Ananta Gnanam."
    >
      <main>
        <Hero />
        <Companions />
        <Discoveries />
        <HowLearningWorks />
        <FeaturedJourney />
        <QuizPreview />
        <BuiltWith />
      </main>
    </Layout>
  );
}
