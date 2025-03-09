import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';
export default function Projects(){

    const config={
         projects:[
            {
              image:'websiteImg1',
              description:'A Ecommerce websites. Built with MERN stack.',
              link:'https//github.com/Revathi Anandhan/'
            },
             {
              image:'websiteImg2',
              description:'Food Ecommerce website like swiggy. Built with Angular.',
              link:'https//github.com/Revathi Anandhan/'
            },
            {
              image:'websiteImg3',
              description:'Basic Blog Websites.Built with Next Js and MangoDB.',
              link:'https//github.com/Revathi Anandhan/'
            }
         ]
    }
    return<section id='projects' className="flex flex-col px-5 py-20 justify-center bg-primary text-white">
         <div className="w-full">
            <div className="flex flex-col px-10 py-5">
              <h1  className='text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
              <p>These are some of my best projects. I have built this with React, MERN and Vanilla CSS, check them out.</p>
            </div>
         </div>
         <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
              {config.projects.map((project)=>{
                  <div className='relative'>
                     <img className='h-[200px] w-[500px]' src={project.image}/>
                     <div className='project-desc'>
                       <p className='text-center px-5 py-5'>{project.description}</p>
                     </div>
                     <div className='flex justify-center'>
                        
                         <a className='btn' target='_blank' href={project.link}>View Projects</a>
                         
                     </div>
                  </div>
                  
              })}
              
                
               
            </div>
         </div>
    </section>
}