import React from 'react';

import {BsArrowUpRight} from 'react-icons/bs'

import {motion} from 'framer-motion'

import {fadeIn} from '../variants';

const services = [ 
  {
    name:'Artista',
    description: 'Sou artista/desenhista a 3 anos, compartilho minhas artes nas plataformas como Instagram e Pinterest',
  },
  {
    name:'Designer',
    description: 'Faço serviços de logo marca para empresas, Land Pages, ilustrações e entre outros.',
  },
  {
    name:'Programador',
    description: 'Crio pequenos softwares e construção de de páginas webs.',
  },
]


const Services = () => {
  return( 
    <div className='section' id="services">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount: 0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>
              Meus Serviços
            </h2>

          </motion.div>

          <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount: 0.3}} 
          className='flex-1'>
            <div >
              {services.map((service, index)=>{
                const {name, description, link} = service
                return (
                <div className='border-b border-white/20 h-[146px] mb-[38px]
                flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider 
                    font-primary font-semibold mb-6'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    
                  </div>
                </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
