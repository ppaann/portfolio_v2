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
            middleSrc='/projects/msux/banner.jpg'
            middleAlt='banner'
          />
        </div>
      </section>
      <section className='relative'>
        <div className='container max-w-3xl mx-auto'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mt-20 mb-3'>
              Key UX Engineering Insights
            </h2>
          </div>

          <ul className='flex flex-row justify-center gap-8'>
            <li className='p-4 mt-8 mb-10  text-center'>
              <p className='gradient-text font-semibold text-xl'>Hybrid Role</p>
              <p className='font-semibold'>Shared Ownership</p>
              <p>
                Bridging design and engineering reduced miscommunication and
                shaved off 60% of requirements churn.
              </p>
            </li>
            <li className='p-4 mt-8 mb-10  text-center'>
              <p className='gradient-text font-semibold text-xl'>
                Design System
              </p>
              <p className='font-semibold'>Sustainable Velocity</p>
              <p>
                A reusable component architecture cut future feature cost by 45%
                and ensured UI consistency.
              </p>
            </li>
            <li className='p-4 mt-8 mb-10  text-center'>
              <p className='gradient-text font-semibold text-xl'>Prototype</p>
              <p className='font-semibold'>Communication Bridge</p>
              <p>
                Interactive previews improved cross-timezone alignment,
                increasing decision velocity by 70%
              </p>
            </li>
          </ul>
        </div>
      </section>
      <ScrollInComponent
        id='overview'
        as='section'
        className='border-t border-gray-700 pt-10 pb-7'
      >
        <div className='container max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold mb-6'>Overview</h2>

          <p className='mb-4'>
            In 2015, I led the frontend and UX efforts for an internal Microsoft
            tool that unified the firmware configuration process for mobile
            devices across <strong>14 global manufacturing sites</strong>. The
            goal was to streamline operations for hundreds of device variants
            with regional and carrier-level differences.
          </p>

          <h3 className='text-2xl font-bold mt-10 mb-4'>Key Business Goals</h3>
          <ul className='list-disc pl-6 mb-6'>
            <li>Minimize human error in manual device configuration</li>
            <li>Reduce onboarding time for non-technical factory staff</li>
            <li>Enable PMs to quickly iterate on configuration rules</li>
            <li>
              Replace the legacy UI stack with a maintainable, scalable frontend
              architecture
            </li>
          </ul>

          <h3 className='text-2xl font-bold mt-10 mb-4'>Legacy Constraints</h3>
          <ul className='list-disc pl-6'>
            <li>
              jQueryUI-based system with a fragile 10,000-line CSS sheet filled
              with{' '}
              <code className='font-mono  text-orange-600 bg-orange-50 ring-orange-500'>
                !important
              </code>{' '}
              overrides
            </li>
            <li>
              Non-scalable workflows requiring 5+ screens to complete one
              configuration
            </li>
            <li>Training cost and error rate rising due to poor UX</li>
          </ul>
        </div>
      </ScrollInComponent>
      <ScrollInComponent id='my-role' as='section' className='pt-10 pb-7 mt-10'>
        <div className='container max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold mb-6'>My Role</h2>
          <p className='mb-4'>
            This was a true <strong>hybrid role</strong>: I owned both UX design
            and frontend engineering. Rather than handing off designs to
            developers or vice versa, I led the{' '}
            <strong>end-to-end UX engineering process</strong> — from user pain
            point discovery to modular architecture delivery.
          </p>
          <h3 className='text-2xl font-bold mt-10 mb-4'>
            UX Engineering Scope
          </h3>
          <ul className='list-disc pl-6'>
            <li>
              <strong>UX Research & Journey Mapping:</strong> Identified root
              causes of user error
            </li>
            <li>
              <strong>Design System & Componentization:</strong> Built UI from
              reusable logic
            </li>
            <li>
              <strong>Modern Frontend Development:</strong> AngularJS +
              Bootstrap
            </li>
            <li>
              <strong>CI/CD for Prototypes:</strong> Real-time preview
              environment for PMs
            </li>
            <li>
              <strong>Cross-Functional Sync:</strong> Worked with factory ops,
              PMs, and backend teams
            </li>
          </ul>
        </div>
      </ScrollInComponent>
      <ScrollInComponent
        id='challenges'
        as='section'
        className='pt-10 pb-7 mt-10'
      >
        <div className='container max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold mb-6'>Key Challenges</h2>

          <h3 className='text-2xl font-bold mt-10 mb-4'>Design-System Debt</h3>
          <ul className='list-disc pl-6 mb-4'>
            <li>10,000+ lines of tangled CSS with global overrides</li>
            <li>
              jQueryUI&apos;s lack of modularity caused feature delays (300%
              longer delivery time)
            </li>
            <li>Functional bugs & regressions delayed time-to-market</li>
          </ul>

          <ImageInArticle description='Demo Legacy CSS vs Demo Modular SCSS Structure'>
            <div className='inline-flex justify-center gap-8 w-full'>
              <div className='flex border border-gray-300 rounded-lg overflow-hidden'>
                <Image
                  src='/projects/msux/code_before.png'
                  alt='Stakeholder Map'
                  width={320}
                  height={480}
                />
              </div>
              <div className='flex border border-gray-300 rounded-lg overflow-hidden'>
                <Image
                  src='/projects/msux/code_after.png'
                  alt='Stakeholder Map'
                  width={320}
                  height={480}
                />
              </div>
            </div>
          </ImageInArticle>

          <h3 className='text-2xl font-bold mt-10 mb-4'>Usability at Scale</h3>
          <ul className='list-disc pl-6 mb-4'>
            <li>5+ disconnected form pages for a single configuration</li>
            <li>Manual input for 200+ device variants with zero batch tools</li>
            <li>No real-time validation — errors entered production lines</li>
          </ul>

          <ImageInArticle description='Before: 5-Step Process vs After: Single Dynamic Form(Modified pic)'>
            <div className='flex flex-col gap-8'>
              <div className='inline-flex justify-center'>
                <Image
                  src='/projects/msux/variantCreate_before.png'
                  alt='Variant Create Before'
                  width={480}
                  height={320}
                />
              </div>
              <div className='inline-flex justify-center'>
                <Image
                  src='/projects/msux/variantCreate_after.png'
                  alt='Variant Create After'
                  width={480}
                  height={320}
                />
              </div>
            </div>
          </ImageInArticle>

          <h3 className='text-2xl font-bold mt-10 mb-4'>
            Architecture Bottlenecks
          </h3>
          <ul className='list-disc pl-6'>
            <li>
              Performance degradation at scale (&gt;35% timeout rate with
              &gt;500 devices)
            </li>
            <li>
              PMs couldn&apos;t preview configuration changes — 40% of dev cycle
              lost in clarification loops
            </li>
          </ul>
        </div>
      </ScrollInComponent>
      <ScrollInComponent
        id='solutions'
        as='section'
        className='pt-10 pb-7 mt-10'
      >
        <div className='container max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold mb-6'>Solutions</h2>

          <h3 className='text-2xl font-bold mt-10 mb-4'>
            Design Thinking & Prototyping Pipeline
          </h3>
          <ul className='list-disc pl-6 mb-4'>
            <li>
              Mapped cascading config logic visually (Region → Carrier →
              Hardware rules)
            </li>
            <li>Transformed 5-step process into a dynamic single-page form</li>
            <li>
              Three-tier prototyping pipeline: Balsamiq → Figma → AngularJS
            </li>
            <li>
              CI/CD preview pipeline with Bitbucket for instant PM feedback
            </li>
          </ul>
          <ImageInArticle description='Prototype Pipeline'>
            <div className='flex'>
              <Image
                className=' mx-auto'
                src='/projects/msux/solution.png'
                alt='Variant Create After'
                width={480}
                height={320}
              />
            </div>
          </ImageInArticle>

          <h3 className='text-2xl font-bold mt-10 mb-4'>
            Frontend Architecture Refactor
          </h3>
          <ul className='list-disc pl-6 mb-4'>
            <li>Modularized legacy CSS into 12 SCSS domains</li>
            <li>
              Built 22 reusable components, stripped 60% of unused Bootstrap
            </li>
            <li>UI unit testing from 0% to 75% coverage</li>
            <li>Optimized build pipeline via Grunt (65% faster)</li>
          </ul>
          <p className='text-sm italic text-gray-500'>
            [Insert Visual Placeholder: Grid layout of reusable UI components
            (6–8 abstracted examples)]
          </p>
        </div>
      </ScrollInComponent>
      <ScrollInComponent
        id='outcomes'
        as='section'
        className='pt-10 pb-7 mt-10'
      >
        <div className='container max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold mb-6'>Outcomes</h2>
          <p className='mb-6'>
            The combined impact of UX research, system refactoring, and
            prototype-driven communication created measurable improvements
            across business and engineering metrics.
          </p>
          <div className='overflow-x-auto'>
            <table className='table-auto max-w-3xl border text-sm mx-auto'>
              <thead>
                <tr className='bg-gray-800 text-white'>
                  <th className='p-2 text-left'>Metric</th>
                  <th className='p-2 text-left'>Before</th>
                  <th className='p-2 text-left'>After</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-2'>CSS Maintainability</td>
                  <td className='p-2'>0.8 / 5</td>
                  <td className='p-2'>4.2 / 5</td>
                </tr>
                <tr>
                  <td className='p-2'>Component Reuse Rate</td>
                  <td className='p-2'>12%</td>
                  <td className='p-2'>89%</td>
                </tr>
                <tr>
                  <td className='p-2'>UI Regression Bugs / Release</td>
                  <td className='p-2'>35+</td>
                  <td className='p-2'>≤ 8</td>
                </tr>
                <tr>
                  <td className='p-2'>Developer Onboarding Time</td>
                  <td className='p-2'>–</td>
                  <td className='p-2'>↓ 50%</td>
                </tr>
                <tr>
                  <td className='p-2'>PM Feedback Loop</td>
                  <td className='p-2'>–</td>
                  <td className='p-2'>↓ 60%</td>
                </tr>
                <tr>
                  <td className='p-2'>Factory Training Cost</td>
                  <td className='p-2'>–</td>
                  <td className='p-2'>↓ 30%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-sm font-semibold text-gray-500 mt-4 text-center'>
            Improvemnet after applying the change.
          </p>
        </div>
      </ScrollInComponent>
      <ScrollInComponent
        id='retrospective'
        as='section'
        className='pt-10 pb-7 mt-10 bg-purple-50'
      >
        <div className='container max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold mb-6'>Retrospective</h2>
          <p className='mb-6'>
            Looking back with a 2025 lens, I realize this project shaped my
            understanding of <b>design-engineering convergence</b>. While the
            tools have changed, the core UX engineering principles remain
            constant.
          </p>
          <h3 className='text-2xl font-bold mt-10 mb-4'>
            If I Rebuilt It Today
          </h3>
          <ul className='list-disc pl-6'>
            <li>React + TypeScript Micro-Frontend Architecture</li>
            <li>
              <span className='flex items-center gap-1'>
                Design tokens with real-time <b>Figma</b>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4 inline-block align-middle'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
                  />
                </svg>
                <b>Code</b> sync
              </span>
            </li>

            <li>
              Azure Static Web Apps for globally deployed interactive prototypes
            </li>
            <li>
              Accessibility-first development with automated axe-core testing
            </li>
            <li>Visual regression pipeline with Chromatic</li>
          </ul>
        </div>
      </ScrollInComponent>
    </>
  );
};
export default ProjectDetail;
