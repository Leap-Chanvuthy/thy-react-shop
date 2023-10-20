import ChatBot from 'react-simple-chatbot';

const Chat = () => {
    const steps = [
        {
        id: 1,
        message : 'Hi! My name is Leap Chanvuthy and I am a MERN Stack developer. I am excited to learn more about you and your projects!',
        trigger : 2,
        },
        {
        id: 2,
        message: 'What would you like to know about me?',
        trigger: 3,
        },
        {
        id: 3,
        options: [
        { value: 'Education', trigger: 4 },
        { value: 'Skills', trigger: 5 },
        { value: 'Projects', trigger: 6 },
        { value: 'Other', trigger: 7 },
        { value: 'Skills and projects', trigger: 8 },
        ],
        },
        {
        id: 4,
        message: 'I am currently a third-year Software Engineering student at the Cambodia Academy of Digital Technology.',
        trigger: 2,
        },
        {
        id: 5,
        message: 'I am a MERN Stack developer with experience in building and maintaining complex web applications. I am also a quick learner and I am always eager to take on new challenges.',
        trigger: 2,
        },
        {
        id: 6,
        message: 'You can check out my projects on my website: [link to your website]',
        trigger: 2,
        },
        {
        id: 7,
        message: 'Please feel free to ask me any other questions you have.',
        trigger: 2,
        },
        {
        id: 13,
        options: [
        { value: 'Education', trigger: 4 },
        { value: 'Skills', trigger: 5 },
        { value: 'Projects', trigger: 6 },
        { value: 'Other', trigger: 7 },
        { value: 'Skills and projects', trigger: 8 },
        ],
        },
        {
        id: 8,
        message: "Here are some of my skills and projects:",
        trigger: 9,
        },
        {
        id: 9,
        message: "Skills: HTML, CSS, JavaScript, React, Node.js, Express, MySQL, MongoDB, Git",
        trigger: 10,
        },
        {
        id: 10,
        message: "Projects: [link to your portfolio]",
        trigger: 2,
        },
        {
        id: 9,
        message: "Would you like to learn more about a specific skill or project?",
        trigger: 11,
        },
        {
        id: 11,
        options: [
        { value: 'Yes', trigger: 12 },
        { value: 'No', trigger: 2 },
        ],
        },
        ];
    return ( 
        <div>
            <ChatBot steps={steps} />
        </div>
     );
}
 
export default Chat;