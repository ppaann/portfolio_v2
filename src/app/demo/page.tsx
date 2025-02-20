'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { FaFigma, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import WebsitePoleDance from '@/assets/images/website-pole-dance.png';
import WebsiteS24Home from '@/assets/images/website-s24-home.png';

const Demo = () => {
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    { title: '智能家居平台', tech: 'React + IoT', img: WebsitePoleDance },
    { title: '电商应用', tech: 'Next.js + Node', img: WebsiteS24Home },
    { title: '数据分析面板', tech: 'Python + D3.js', img: WebsitePoleDance },
  ];

  const skills = [
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaPython />, name: 'Python' },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'>
      {/* 导航栏 */}
      <nav className='fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50'>
        <div className='max-w-6xl mx-auto px-6 py-4 flex justify-end space-x-8'>
          {['作品集', '技术栈', '关于', '联系'].map((item) => (
            <a
              key={item}
              className='text-gray-600 hover:text-blue-500 transition-colors'
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className='min-h-screen flex items-center px-6'>
        <div className='max-w-6xl mx-auto space-y-6 opacity-0 animate-fadeInUp'>
          <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
            创造有温度的
            <br />
            数字体验
          </h1>
          <p className='text-2xl text-gray-600'>
            UX设计师 & 全栈开发者 | 专注交互与实现
          </p>
        </div>
      </section>

      {/* 作品集 */}
      <section className='py-20 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h2
            className='text-3xl font-bold mb-12 opacity-0'
            ref={(el) => {
              if (el) revealRefs.current.push(el);
            }}
          >
            精选项目
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {projects.map((project, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) revealRefs.current.push(el);
                }}
                className='bg-white rounded-2xl shadow-lg overflow-hidden opacity-0 transition-transform duration-300 hover:scale-105'
              >
                <Image
                  src={project.img}
                  width={400}
                  height={300}
                  alt={project.title}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-blue-500'>{project.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 技术栈 */}
      <section className='py-20 bg-white px-6'>
        <div className='max-w-6xl mx-auto'>
          <h2
            className='text-3xl font-bold mb-12 opacity-0'
            ref={(el) => {
              if (el) revealRefs.current.push(el);
            }}
          >
            技术能力
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                ref={(el) => {
                  if (el) revealRefs.current.push(el);
                }}
                className='p-8 bg-gray-50 rounded-xl text-center opacity-0 hover:shadow-md transition-shadow'
              >
                <div className='text-4xl text-blue-500 mb-4 mx-auto'>
                  {skill.icon}
                </div>
                <h3 className='text-xl font-medium'>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
