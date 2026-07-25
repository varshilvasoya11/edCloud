const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));
        tab.classList.add("active");

        switch(tab.innerText.trim()){

            case "Overview":
                content.innerHTML = overview;
                break;

            case "Curriculum":
                content.innerHTML = curriculum;
                break;

            case "Accessibility":
                content.innerHTML = accessibility;
                break;

            case "Refund":
                content.innerHTML = refund;
                break;
        }

    });

});

const overview = `
<h2 style="color:#e53935; text-align:center">Course Details</h2>

<p>
This is an introductory course for ChatGPT & AI Tools
Learn Image Processing, OpenCV, Object Detection,
CNN, Deep Learning and AI Projects.
</p>

<h2 style="color:#e53935;text-align:center">Course Structure</h2>

<p>
This course contains videos, assignments and projects.
</p>
`;

const curriculum = `
<h2 style="color:#e53935;text-align:center">Curriculum</h2>

<ul>
<li>Introduction to ChatGPT & AI Tools</li>
<li>Image Processing Basics</li>
<li>OpenCV Fundamentals</li>
<li>Object Detection</li>
<li>Deep Learning for Vision</li>
<li>Projects & Assignments</li>
</ul>
`;

const accessibility = `
<h2 style="color:#e53935;text-align:center">Access</h2>

<p>
6 Months from the date of registration or from course start date,
whichever is later.
</p>

<p>
Beyond this period, registrant will have to pay 10% of the course fee
for extension of 2 months for server, maintenance and assignment evaluation.
</p>
`;

const refund = `
<h2 style="color:#e53935;text-align:center">Refund</h2>

<p>
Refunds can be requested only within <b>7 days</b> of registration.
</p>

<p>
Gateway charges, GST and processing fees may be deducted.
Remaining amount will be refunded within 7–10 business days.
</p>
`;

const assignment = `
<h2>Assignments</h2>

<ul>
<li>Assignment 1 - Image Basics</li>
<li>Assignment 2 - OpenCV</li>
<li>Assignment 3 - Face Detection</li>
<li>Assignment 4 - Object Detection</li>
</ul>
`;

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        switch(tab.innerText.trim()){

            case "Overview":
                content.innerHTML = overview;
                break;

            case "Curriculum":
                content.innerHTML = curriculum;
                break;

            case "Accessibility":
                content.innerHTML = accessibility;
                break;

            case "Refund":
                content.innerHTML = refund;
                break;

            // case "Assignment":
            //     content.innerHTML = assignment;
            //     break;
        }

    });

});
const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach(el=>observer.observe(el));
