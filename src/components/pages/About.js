import React from "react";
import Joe from "../../assets/images/Joe.jpg";


function About() {
    return (
        
        <main className="container header">
        
       

        <h1 className="span2">About Me</h1>


        <hr/>
        
        <div className="pr-3">
            <img src={Joe} className="float-left p-2" alt="Joe Rhines" height="200"/>
            <p>
                
                My name is Joseph Rhines and I am from Burnsville, MN. I currently live in Eden
                Prairie, MN. I live nearby the downtown area and enjoy being so close to the mall.
                <br/>
                I have a nine year old son that is enrolled in Code Ninja which is a program that teaches
                children to code and it's neat to have conversations about coding with him.
                I am certified in the MERN Stack through the University of Minnesota and have created
                projects using MERN technologies. I have experience in both Front and Back end Development.
                I also have a background in Software Testing and have a C.A.S.T certification.

                
                

            </p>
            <p>In the below paragraph I will to tell you about how overcoming obstacles in other parts of my life
               has helped me as a developer.</p>
            <br/>
            <br/>
            <br/>
            <p> The two hobbies I do the most are Roller Skating and Ninja Warrior Training. Even though both activities 
                can take a physical toll on the body I found out that the mental aspect can be just as tuff. Over coming
                obstacles that seemed impossible at first helped me mentally prepare for coding problems that are very
                hard to figure out. Just like in my hobbies it takes hard work, patience, and humbleness to ask for help
                and take good advice when it is given. I am excited to continue to grow and learn as Software Developer.
                
            </p>
            <br/>
            <br/>
            <br/>


        </div>

</main>


    );
}

export default About;