import React from "react";
import Joe from "../../assets/images/Joe.jpg";


function About() {
    return (
        
        <main className="container header">
        
       

        <h1 className="span2">About Me</h1>


        <hr/>
        
        <section className="pr-3">
            <img src={Joe} className="float-left p-2" alt="Joe Rhines" height="200"/>
            <p>
                
                My name is Joseph Rhines and I am from Burnsville, MN. I currently live in Eden
                Prairie, MN. I live near by the downtown area and enjoy being so close to the mall.
                <br/>
                I want to to be able to become a good developer.
                Im trying really hard to make that happen. I'm spending hours watching youtube videos and looking
                at other resouces with the goal of improving craft. I was enrolled in this coding bootcamp a around
                a year ago.
                I had to discontinue the program I was in because my wife had a new job opportunity she wanted to
                pursue and one of
                us had to stay home to take care of our son. I ended up staying at home to take care of him and I
                enjoyed my time
                with him. Now I'm back and I want to finish what I started a year a go. This has been a chanllening
                adventure but
                I am learning alot. This is the first time i'm doing a class over zoom and I really like it. I'ts
                really nice that
                I don't have to pay for parking like I did when I was coming to the U of M a year ago.

            </p>
            <p>Please bare with me, because I would like to tell you alittle more about myself below.</p>
            <br/>
            <br/>
            <br/>
            <p> Me and my Son go to an American Ninja Warrior gym in Eden Prairie, Minnesota. The gym is called
                Obstacle Academy and we
                have around 5 people that go to the gym that has been on the American Ninja Warrior show. My son is
                on the advanced team
                at the gym and I go to open gyms and do some competitions from time to time. Sometimes I wonder
                which craft is more
                challenging. If I had to guess I would say coding, but ninja warrior has helped me mentally to face
                challenges.
            </p>
            <br/>
            <br/>
            <br/>


        </section>

</main>


    );
}

export default About;