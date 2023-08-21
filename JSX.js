const react1 = document.getElementById("root");

let element = <>

<div class="said">
            <h3>Amzan Aldowighri</h3>
            <h6><img src="Rectangle 3.png" alt=""></img>UX/UI DESIGNER</h6>
            <div class="contact">
                <div class="emali">
                    <img src="email.png" alt="" width="10" height="8.07"></img>
                    <p>amzan.aldowighri@gmail.com</p>
                </div>
                <div class="phone">
                    <img src="phone.png" alt="" width="7.36" height="11"></img>
                    <p>+966 568 823 864</p>
                </div>
                <div class="in">
                    <img src="in.png" alt="" width="9" height="9"></img>
                    <p>amzan-abdullah</p>
                </div>
                <div class="be">
                    <img src="be.png" alt="" width="11" height="7.25"></img>
                    <p>amzanabdullah</p>
                </div>
            </div>
            <div class="soft">
                <h4>SOFT SKILLS</h4>
                <hr></hr>
                <div class="list">
                    <ul>
                        <li>communication</li>
                        <li>Team player</li>
                        <li>Cooperation</li>
                        <li>Organization and planning</li>
                    </ul>
                </div>
            </div>
            <div class="tec">
                <h4>TECHNICAL SKILLS</h4>
                <hr></hr>
                <div class="list">
                    <ul>
                        <li>UX/UI</li>
                        <li>Figma</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
            </div>
            <img src="barcod.png" alt=""></img>
        </div>
        
        <div class="content">
            <div class="summary">
                <h4>SUMMARY</h4>
                <hr></hr>
                <p>I have an interest in web development, especially in interface design and user experience, and I am interested in being in a professional and motivating work environment.</p>
            </div>
            <div class="education">
                <h4>EDUCATION</h4>
                <hr></hr>
                <b>Bachelor Of Science In Information Technology</b>
                <p class="date">Des.2020</p>
                <p>King Saud University / RIYADH</p>
            </div>
            <div class="experience">
                <h4>EXPERIENCE</h4>
                <hr></hr>
                <b>Javascript Bootcamp</b>
                <p class="date">Jul 2023 – present</p>
                <p>Tuwaiq Academy</p>
                <div class="list">
                    <ul>
                        <li>I learned and worked on a website UX/UI project called (طفل.كوم)</li>
                    </ul>
                </div>
                <b>UX/UI Bootcamp</b>
                <p class="date1">May 2022 – Sep 2022</p>
                <p>Saudi Digital Academy</p>
                <div class="list">
                    <ul>
                        <li>I learned and worked on a mobile UX/UI project called (Traveland)</li>
                        <li>I learned and worked on the UX/UI website project called (OnTime)</li>
                        <li>I passed 3 exams (Web Fundamentals, Mobile, and Web)</li>
                    </ul>
                </div>
                <b>Coop Training - Web Designer</b>
                <p class="date2">Oct 2020 – Dec 2020</p>
                <p>Hamah Company</p>
                <div class="list">
                    <ul>
                        <li>I worked on one project which was a web application using WordPress</li>
                    </ul>
                </div>
            </div>
            <div class="certifications">
                <h4>CERTIFICATIONS</h4>
                <hr></hr>
                <p>CIW User Interface Designer <span>Oct 2022</span></p>
            </div>
        </div>
</>


ReactDOM.render(element, react1);