import React from "react";

const About = () => {
  return (
    <div className="container">
        <h1 className="text-h1 font-heading py-4">About 👀</h1>
        <div>
            <p className="font-body">
                OK200 is a modular synth business I started back in 2019. I design and build modules for the Eurorack format. I also make music and perform live with my modular synth setup, using . I'm based in Toronto, Canada.
            </p>
            <p>
                  that specializes in designing cutting-edge, hands-on sequencing modules for electronic musicians and performers. With a focus on live performance, our modules are meticulously crafted to provide intuitive and expressive control over your modular synthesizer setup, making your performances truly unique and dynamic.
            </p>
        </div>

        <div className="bg-white">
            <h2 className="text-h2 font-heading">Our Team</h2>
            <div className="flex flex-row gap-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, cumque at animi totam et dolores laborum fugiat suscipit dicta modi dolorum possimus saepe doloremque nostrum. Perspiciatis tempora iure culpa ullam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, cumque at animi totam et dolores laborum fugiat suscipit dicta modi dolorum possimus saepe doloremque nostrum. Perspiciatis tempora iure culpa ullam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, cumque at animi totam et dolores laborum fugiat suscipit dicta modi dolorum possimus saepe doloremque nostrum. Perspiciatis tempora iure culpa ullam.</p>
            </div>
        </div>

        <div className="py-4 h-[300px] w-[300px] bg-cover bg-center bg-[url('https://ok200-media.s3.amazonaws.com/Counterpoint.png')]">

        </div>
    </div>
  );
};


export default About;