import React from 'react'
import { ShowCard } from './ShowCard'
//  images
// import Project1 from "../images/Proj1.JPG"
// import Project2 from "../images/Proj2.gif"
// import Project3 from "../images/Proj3.JPG"
// import Project8 from "../images/Proj8.JPG"
// import Project4 from "../images/Proj4.gif"
// import Project5 from "../images/Proj5.JPG"
// import Project6 from "../images/Proj6.JPG"
export const Skills = () => {
    const Skill = [
        {
            venue: "Code Writer",
            // venueImg: Project1,
            desc: "This was my first TEAM project. City-Scan allows users to search COVID-related data on a state level, while evaluating quality of life data such as healthcare, commute and cost of living of specific cities within the state. ",
            // ref: " https://michaelhermes.github.io/City-Scan/ ",
            id: "1",            
        },

        {
            venue: "SuperMan",
            // venueImg: Project3,
            desc: "My second TEAM project. We built this app to help the average user keep track of their weight. This website will provide the ability to input their daily weight and allow them to display their daily progress on a table or graph and inspire me to keep going. They will also have the option to share my progress with my friends or my doctor. ",
            // ref: "https://my-tracker35.herokuapp.com/ ",
            id: "2",
        },

        {
            venue: "Engineer",
            // venueImg: Project8,
            desc: "My final TEAM project. A React app that uses Apollo Client to manage both local and remote data with GraphQL, JWT (JSON Web Token) to define a self-contained token for securely transmitting information between parties. Other features we use in our project are JSX, CSS for front-end design.   When users open the page, they are asked to log in or sign up. When they're in, they are shown the dashboard, where they see the window summaries of total budget, budget left and how much they've spent. In the dashboard, they also have the access to the donut chart that displays the top 5 expenses and the report below it that shows the transactions. ",
            // ref: " https://project-ems.herokuapp.com/",
            id: "8",
        },

        {
            venue: "Application 1 - Work Day Scheduler",
            // venueImg: Project2,
            desc: "WORKDAY Scheduler The focus of this project was to create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery. ",
            // ref:  "https://proton-8.github.io/Interactive-Planner/ "  ,
            id: "3",
        },
        
        {
            venue: "Application 2 - Password Generator ",
            // venueImg: Project4,
            desc: " A quick way to generate a secret password that could contain four possible combinations. First a user must choose the length from 8 to 128 characters long. After that the following choices must be made: 1. Do you want upper case characters? 2. Do you want lower case characters? 3. Do you want numbers?  4. Do you want special characters?  - NOTE: The user must choose at least one option or it will return to the start. The user is then presented the final password  ",
            // ref: "https://proton-8.github.io/My-first-password-creator/",
            id: "4",
        },
        {
            venue: "Application 3 - Fitness Tracker",
            // venueImg: Project5,
            desc: "This app will allow a user to view create and track daily workouts. The user will be able to log multiple exercises in a workout on a given day. The app will also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, the app will be able to track the distance traveled and present the past 7 workouts in a graph on the dashboard page ",
            // ref: "https://proton-8.github.io/Workout-Tracker/",
            id: "5",
        },

        {
            venue: "Application 4 -  Regex Tutorial",
            // venueImg: Project6,
            desc: " Used GitHub Gist for this project.  In this tutorial I explored a Regular Expression for verifying an email address that the user has given us. An email can be broken into 5 small sections. These five sections from left to right are a character input, an @ symbol, more character inputs, a dot and more characters. So, we must write a decoder sequence that will address each of the five sections. ",
            // ref: "https://gist.github.com/Proton-8/9ae7232faac973759fc5ecd360f410ae#character-classes ",
            id: "6",
        },

  
    ]

    return (
        //Set container we want the showcard to be nested in
        <section id="skills" className="section bg-light">
            <div className="container2">
                    <div>
                        <h1 className="text-large bg-dark rounded">Highlighted Projects</h1>
                    </div>
                <div className="skills">
                {/* Grabbing the show info and mapping through */}
                {Skill.map((skills) => (
                    // placing each set of show info into its own ShowCard
                    <ShowCard 
                    venue={skills.venue}
                    // venueImg={project.venueImg}
                    desc={skills.desc}
                    key={skills.id}
                    // href={project.ref}
                    
                    />
                ))}
                </div>
            </div>
        </section>
    )
}