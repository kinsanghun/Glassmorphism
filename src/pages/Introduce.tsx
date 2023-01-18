import { Title } from "components/Title";
import { Wrapper } from "components/Wrapper";
import { lorem } from "utils/lorem";

const Introduce = () => {
    const skills = [
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "SCSS",
        "Git",
    ];

    return (
        <div className="introduce">
            <Wrapper>
                <Title text="Profile"/>
                <div className="profile">
                    <div className="image">
                        <img src="assets/images/profile.jpeg" alt="profile"/>
                    </div>
                    <div className="content">
                        <ul>
                            <li>KIM SANG HUN</li>
                            <li>1997.05.29.</li>
                            <li>South Korea</li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <Title text="Skills"/>
                <div className="skills">
                    {skills.map((skill:string, index:number) => {
                        return <span key={index}>#{skill}</span>;
                    })}
                </div>
            </Wrapper>
            <Wrapper>
                <Title text="Introduce"/>
                <div className="content">
                    {lorem}
                </div>
            </Wrapper>
        </div>
    )
}

export default Introduce;