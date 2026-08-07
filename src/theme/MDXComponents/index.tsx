import React from 'react';
import Head from '@docusaurus/Head';
import MDXCode from '@theme/MDXComponents/Code';
import MDXA from '@theme/MDXComponents/A';
import MDXPre from '@theme/MDXComponents/Pre';
import MDXDetails from '@theme/MDXComponents/Details';
import MDXHeading from '@theme/MDXComponents/Heading';
import MDXUl from '@theme/MDXComponents/Ul';
import MDXLi from '@theme/MDXComponents/Li';
import MDXImg from '@theme/MDXComponents/Img';
import Admonition from '@theme/Admonition';
import Mermaid from '@theme/Mermaid';

// Learning components — registered globally so every MDX lesson can use
// <Leela>, <Manjari>, <Astra>, <DidYouKnow>, <MultipleChoiceQuiz> and friends
// without importing them in each file.
import CharacterDialogue from '@site/src/components/learning/CharacterDialogue';
import Leela from '@site/src/components/learning/Leela';
import Manjari from '@site/src/components/learning/Manjari';
import Astra from '@site/src/components/learning/Astra';
import LearningObjective from '@site/src/components/learning/LearningObjective';
import DidYouKnow from '@site/src/components/learning/DidYouKnow';
import Callout from '@site/src/components/learning/Callout';
import KeyTakeaway from '@site/src/components/learning/KeyTakeaway';
import Quiz from '@site/src/components/learning/Quiz';
import MultipleChoiceQuiz from '@site/src/components/learning/MultipleChoiceQuiz';
import PlanetFactCard from '@site/src/components/learning/PlanetFactCard';
import FactGrid from '@site/src/components/learning/FactGrid';
import ImageCard from '@site/src/components/learning/ImageCard';
import LearningProgress from '@site/src/components/learning/LearningProgress';
import LessonNavigation from '@site/src/components/learning/LessonNavigation';
import NextLesson from '@site/src/components/learning/NextLesson';
import RelatedTopics from '@site/src/components/learning/RelatedTopics';
import StorySection from '@site/src/components/learning/StorySection';
import ReflectionQuestion from '@site/src/components/learning/ReflectionQuestion';
import ComparisonTable from '@site/src/components/learning/ComparisonTable';
import ExploreCard from '@site/src/components/learning/ExploreCard';
// New journey components
import LessonHero from '@site/src/components/learning/LessonHero';
import WhyItMatters from '@site/src/components/learning/WhyItMatters';
import LearningSummary from '@site/src/components/learning/LearningSummary';
import MarkExplored from '@site/src/components/learning/MarkExplored';
import JourneyProgress from '@site/src/components/learning/JourneyProgress';
import PlanetExplorer from '@site/src/components/learning/PlanetExplorer';
import QuizRunner from '@site/src/components/learning/QuizRunner';
import JourneyNav from '@site/src/components/learning/JourneyNav';

const MDXComponents = {
  Head,
  details: MDXDetails, // For MD mode support, see https://github.com/facebook/docusaurus/issues/9092#issuecomment-1602902274
  Details: MDXDetails,
  code: MDXCode,
  a: MDXA,
  pre: MDXPre,
  ul: MDXUl,
  li: MDXLi,
  img: MDXImg,
  h1: (props: React.ComponentProps<'h1'>) => <MDXHeading as="h1" {...props} />,
  h2: (props: React.ComponentProps<'h2'>) => <MDXHeading as="h2" {...props} />,
  h3: (props: React.ComponentProps<'h3'>) => <MDXHeading as="h3" {...props} />,
  h4: (props: React.ComponentProps<'h4'>) => <MDXHeading as="h4" {...props} />,
  h5: (props: React.ComponentProps<'h5'>) => <MDXHeading as="h5" {...props} />,
  h6: (props: React.ComponentProps<'h6'>) => <MDXHeading as="h6" {...props} />,
  admonition: Admonition,
  mermaid: Mermaid,
  // Ananta Gnanam learning components
  CharacterDialogue,
  Leela,
  Manjari,
  Astra,
  LearningObjective,
  DidYouKnow,
  Callout,
  KeyTakeaway,
  Quiz,
  MultipleChoiceQuiz,
  PlanetFactCard,
  FactGrid,
  ImageCard,
  LearningProgress,
  LessonNavigation,
  NextLesson,
  RelatedTopics,
  StorySection,
  ReflectionQuestion,
  ComparisonTable,
  ExploreCard,
  // New journey components
  LessonHero,
  WhyItMatters,
  LearningSummary,
  MarkExplored,
  JourneyProgress,
  PlanetExplorer,
  QuizRunner,
  JourneyNav,
};

export default MDXComponents;
