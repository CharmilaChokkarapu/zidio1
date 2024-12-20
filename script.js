<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Company Name</title>
    <link rel="stylesheet" href="style2.css">
</head>
<body>
    <header class="main-header">
        <div class="logo-container">
            <img src="https://zidio.in/assets/images/home-1/zidio%20(1).png" alt="Your Company Logo">
        </div>
        <nav class="main-nav">
            <ul>
                <li><a href="#section1">Home</a></li>
                <li><a href="#section2">About</a></li>
                <li><a href="#section3">Services</a></li>
                <li><a href="#section4">Portfolio</a></li>
                <li><a href="#section5">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main class="main-content">
        <h1>Innovative with Zidio</h1>
    </main>
    <section class="about-section" id="section2">
         <div class="about-content"> 
            <h2>About Zidio</h2>
             <p>At Zidio, we drive business innovation through cutting-edge technology. Our team is composed of dedicated professionals offering a range of services including graphic design, cloud solutions, web development, digital marketing, and hosting. We are passionate about delivering solutions that empower our clients to reach their full potential.</p> 
         </div> 
            <div class="about-image"> 
                <img src="https://darwinbiz.com/wp-content/uploads/2015/11/background-img_02.png" alt="About Us">
            </div> 
    </section>
    <section class="services-section" id="section3">
        <h2>Our Services</h2>
        <div class="service-container">
            <div class="service-item">
                <img src="https://tse4.mm.bing.net/th?id=OIP.Zgu6JxNA9Nut6IbJoiyEPAHaE8&pid=Api&P=0&h=180" alt="Web Development">
                <h3>Web Development</h3>
                <p>Creating modern and responsive websites to enhance your online presence.</p>
            </div>
            <div class="service-item">
                <img src="https://suretyit.com.au/wp-content/uploads/2022/11/cloud-computing.jpg" alt="Cloud Solutions">
                <h3>Cloud Solutions</h3>
                <p>Providing scalable and secure cloud services to support your business operations.</p>
            </div>
            <div class="service-item">
                <img src="https://resizemyimg.com/blog/wp-content/uploads/2019/12/Depositphotos_224637350_xl-2015-1-scaled.jpg" alt="Graphic Design">
                <h3>Graphic Design</h3>
                <p>Designing visually appealing graphics to communicate your brand's message effectively.</p>
            </div>
            <div class="service-item">
                <img src="https://www.clicknclear.net/wp-content/uploads/2020/02/AdobeStock_220637252-scaled.jpeg" alt="Digital Marketing">
                <h3>Digital Marketing</h3>
                <p>Implementing data-driven marketing strategies to drive engagement and sales.</p>
            </div>
            <div class="service-item">
                <img src="https://wallpapercave.com/wp/wp9223603.jpg" alt="Financial">
                <h3>Financial</h3>
                <p>Offering expert financial consulting to help you manage and grow your business assets.</p>
            </div>
            <div class="service-item">
                <img src="http://www.sdgyoungleaders.org/wp-content/uploads/2019/07/1df4122c1b1326756ffc56a1f2b19132.jpeg" alt="Consulting">
                <h3>Consulting</h3>
                <p>Providing professional consulting services to guide your business strategy and operations.</p>
            </div>
        </div>
    </section>
    <section class="reviews-section" id="section6">
        <h2>Customer's Awesome Feedback About Our Services</h2>
        <div class="review-container">
            <div class="review-item" onclick="showReview(0)">
                <img src="review-photo-1.jpg" alt="Reviewer 1">
                <div class="stars">★★★★☆</div>
                <p>Reviewer 1</p>
            </div>
            <div class="review-item" onclick="showReview(1)">
                <img src="review-photo-2.jpg" alt="Reviewer 2">
                <div class="stars">★★★★☆</div>
                <p>Reviewer 2</p>
            </div>
            <div class="review-item" onclick="showReview(2)">
                <img src="review-photo-3.jpg" alt="Reviewer 3">
                <div class="stars">★★★★★</div>
                <p>Reviewer 3</p>
            </div>
            <div class="review-item" onclick="showReview(3)">
                <img src="review-photo-3.jpg" alt="Reviewer 4">
                <div class="stars">★★★★★</div>
                <p>Reviewer 4</p>
            </div>
            <div class="review-item" onclick="showReview(4)">
                <img src="review-photo-3.jpg" alt="Reviewer 5">
                <div class="stars">★★★★★</div>
                <p>Reviewer 5</p>
            </div>
            <div class="review-item" onclick="showReview(5)">
                <img src="review-photo-3.jpg" alt="Reviewer 6">
                <div class="stars">★★★★★</div>
                <p>Reviewer 6</p>
            </div>
            <div class="review-item" onclick="showReview(6)">
                <img src="review-photo-3.jpg" alt="Reviewer 7">
                <div class="stars">★★★★★</div>
                <p>Reviewer 7</p>
            </div>
        </div>
        <div class="review-content">
            <p id="review-text">Select a reviewer to see their comment</p>
        </div>
    </section>
    <section class="portfolio-section" id="section4">
        <h2>Our Team</h2>
        <div class="team-container">
            <div class="team-member" onclick="showVideo('https://youtu.be/bk7IOdcjN80?si=-qE_58Px19N1BPfy')">
                <img src="http://clipart-library.com/img/1399341.png" alt="Sourav Petal">
                <h3>Sourav Petal</h3>
                <p>Frontend Developer</p>
            </div>
            <div class="team-member" onclick="showVideo('flower.webm')">
                <img src="http://clipart-library.com/images/kiKByzxoT.jpg" alt="Shuvadip Das">
                <h3>Shuvadip Das</h3>
                <p>Backend Developer</p>
            </div>
            <div class="team-member" onclick="showVideo('https://youtu.be/bk7IOdcjN80?si=-qE_58Px19N1BPfy')">
                <img src="http://cliparts.co/cliparts/5iR/gKK/5iRgKKAia.jpg" alt="Charmila">
                <h3>Charmila</h3>
                <p>Consult</p>
            </div>
            <div class="video-container" id="video-container">
                <iframe id="video-frame" width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write;      encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>

        </div>
    </section>
    <section class="contact-section" id="section5">
        <h2>Contact Us</h2>
        <div class="contact-info">
            <div class="contact-left">
                <p>Email: souravpetal804@gmail.com</p>
                <p>Phone: 999-7777-000</p>
            </div>
            <div class="contact-right">
                <p>Address: Haldia, Purba medinipur,west Bengal,India</p>
                <p>Timings: Mon-Fri: 08:00-17:00</p>
            </div>
        </div>
        <form class="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <label for="phone">Phone:</label>
            <input type="text" id="phone" name="phone">
            <label for="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Contact Us</button>
        </form>
    </section>
    <script src="script.js"></script>

</body>
</html>
const reviews = [
    '"Zidio is exceptional. From start to finish, they demonstrated a deep understanding of our goals and provided invaluable guidance throughout the process."',
    '"Great service, highly recommend. Very professional and efficient."',
    '"Absolutely satisfied with their work. Professional team and top-notch services."',
    '"Comment likhlo bhai."'
];

function showReview(index) {
    const reviewText = document.getElementById('review-text');
    reviewText.classList.remove('fade-in');
    setTimeout(() => {
        reviewText.innerText = reviews[index];
        reviewText.classList.add('fade-in');
    }, 100);
}

// Add animation class
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        animation: fadeIn 0.5s ease-in-out;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
function showVideo(url) { 
    const videoFrame = document.getElementById('video-frame'); videoFrame.src = url;
  }       
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
 /*   background: url('https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center center fixed;
    background-size: cover;*/
    color: #140f2d;
}
img{
    max-width: 100%;
    height: auto;
    display: block;
}

.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: rgba(255,255,255,0.6);
}
main,header{
    background: url('https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center center fixed;
    background-size: cover;
}

.logo-container img {
    height: 50px;
}

.main-nav ul {
    list-style: none;
    display: flex;
}

.main-nav li {
    margin: 0 15px;
}

.main-nav a {
    text-decoration: none;
    color: #f49d37;
    font-weight: bold;
}

.main-nav a:hover {
    color: #52CC5C;
}

.main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px); /* Adjust height based on header size */
    color: white;
    text-align: center;
}

.main-content h1 {
    font-size: 4rem;
    background: rgba(255,255,255,0.6);
    padding: 20px;
    color: black;
}
.about-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
    background-color: rgba(255, 255, 255, 0.9);
}

.about-content {
    max-width: 50%;
}

.about-content h2 {
    color: #dd4050;
}

.about-content p {
    font-size: 1.2rem;
    line-height: 1.6;
}

.about-image img {
    max-width: 100%;
    border-radius: 10px;
}
.service-item:hover{
    transform: scale(1.3);
    transition-duration: 10ms;
}
.service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px;
    flex: 1 1 calc(33% - 40px);
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.service-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.service-item img {
    margin-bottom: 15px; /* Adjust as needed */
    max-width: 100px;
    border-radius: 10px;
}

.service-item h3 {
    color: #5295cb;
    margin-top: 15px;
}

.service-item p {
    font-size: 1rem;
    color: #140f2d;
}
.reviews-section {
    padding: 50px;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 20px auto;
    width: 90%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.reviews-section .review-container {
    display:inline-flexbox ;
    flex-direction: row;
    align-items: center;
}
.reviews-section h2 {
    color: #dd4050;
    margin-bottom: 30px;
}
.reviews-section p {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: center;
}
.review-item img {
    max-width: 100%;
    border-radius: 10px;
}
.review-container {
    display: inline-flex;
  /* flex-wrap: wrap;*/
    justify-content: space-around;
}
.review-item {
    text-align: center;
    margin: 20px;
    flex: 1 1 calc(33% - 40px);
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}
.review-item:hover {
    transform: scale(1.05);
}

.review-item img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
}

.review-item .stars {
    margin: 10px 0;
    color: #f49d37;
}

.review-content {
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    min-height: 100px;
}
.portfolio-section {
    padding: 50px;
    background-color: rgba(255, 255, 255, 0.9);
}

.portfolio-section h2 {
    text-align: center;
    color: #dd4050;
    margin-bottom: 30px;
}

.team-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.team-member {
    text-align: center;
    margin: 20px;
    flex: 1 1 calc(33% - 40px);
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.team-member img {
    max-width: 100px;
    align-items:normal;
}
.contact-section .contact-info p {
    margin: 10px 0;
}

.contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.contact-form label {
    margin: 5px 0;
    color: #140f2d;
    font-weight: bold;
}

.contact-form input,
.contact-form textarea {
    width: 80%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.contact-form button {
    background-color: #dd4050;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.contact-form button:hover {
    background-color: #f22b29;
}
.contact-section {
    text-align: center;
}

.contact-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 20px;
}

.contact-info p {
    width: 45%;
    margin: 10px 0;
}

.contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.contact-form label {
    margin: 5px 0;
    color: #140f2d;
    font-weight: bold;
}

.contact-form input,
.contact-form textarea {
    width: 80%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.contact-form button {
    background-color: #dd4050;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.contact-form button:hover {
    background-color: #f22b29;
}

button {
    background-color: #dd4050;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #f22b29;
}
@media (max-width: 768px) {
    .main-header {
        flex-direction: column;
        align-items: center;
    }

    .main-nav ul {
        flex-direction: column;
        align-items: center;
    }

    .about-section, .services-section, .portfolio-section, .contact-section {
        padding: 20px;
    }

    .service-container, .team-container, .contact-info {
        flex-direction: column;
        align-items: center;
    }

    .main-content h1 {
        font-size: 2.5rem;
    }
}

@media (max-width: 480px) {
    .main-header {
        padding: 10px;
    }

    .logo-container img {
        height: 40px;
    }

    .main-content h1 {
        font-size: 1.8rem;
        padding: 15px;
    }

    .service-item, .team-member, .contact-info {
        margin: 10px;
        flex: 1 1 100%;
    }

    .contact-form input, .contact-form textarea {
        width: 100%;
    }
}


