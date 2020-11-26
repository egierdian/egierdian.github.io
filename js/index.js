const bodyAbout = () =>{
    var bodyContent = document.getElementById('body-content');
    bodyContent.innerHTML =
    `
    <section id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title display-5 diplay-name">Tools 🛠</h1>
                            <p class="card-text">
                                Some of the tools I use in learning programming
                            </p>
                            <div class="languages-card">
                                <h4>Languages</h4>
                                <div class="row">
                                    <div class="col-md-3 col-sm-6 col-12">
                                        <div class="custom-card bg-warning">
                                            <p class="card-text text-dark">
                                                JavaScript
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-12">
                                        <div class="custom-card">
                                            <p class="card-text">
                                                HTML & CSS
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-12">
                                        <div class="custom-card bg-blue">
                                            <p class="card-text">
                                                PHP
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-12">
                                        <div class="custom-card bg-info">
                                            <p class="card-text text-dark">
                                                Java
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="databases-card">
                                <h4>Databases</h4>
                                <div class="row">
                                    <div class="col-md-3 col-sm-6 col-12">
                                        <div class="custom-card bg-light">
                                            <p class="card-text text-dark">
                                                MySQL
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-12">
                                        <div class="custom-card bg-primary">
                                            <p class="card-text text-white">
                                                Firebase
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tools-card">
                                <h4>Tools</h4>
                                <div class="row">
                                    <div class="col-md-3 col-sm-6 col-12">
                                        <div class="custom-card bg-info">
                                            <p class="card-text text-dark">
                                                Visual studio code
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-12">
                                        <div class="custom-card bg-danger">
                                            <p class="card-text">
                                                Git
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-12">
                                        <div class="custom-card bg-dark">
                                            <p class="card-text">
                                                Github
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-12">
                                        <div class="custom-card bg-primary">
                                            <p class="card-text text-white">
                                                Ms.Word
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </section>
    `;
}

const bodyHome = () => {
    var bodyHome = document.getElementById('body-content');
    bodyHome.innerHTML =
    `
    <section id="jumbotron">
        <div class="container">
            <div class="card-body">
                <img src="images/Profil.jpg" class="rounded-circle">
                <h1 class="card-title display-5 diplay-name" id="Hello">Hi,<br /> i'm Egi Erdian 👋</h1>
                <p class="card-text">
                        My full name is Egi Erdian, people used to call me Egi or Erdian. I am 23 years old, and currently I live in cimahi. 
                        I graduated from Vocational High School at SMK TI Pembangunan Cimahi with a major in software engineering. Currently I am continuing my education at Sekolah Tinggi Teknologi Bandung, majoring in computer science.  
                </p>
                <p class="card-text">
                    Social Media
                </p>
                    
                <div class="social-media">
                    <a class="btn btn-dark" href="https://twitter.com/ErdianEGI"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-dark" href="https://fb.com/egi3rdian"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark" href="https://www.linkedin.com/in/egi-erdian-21a35a196/"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-dark" href="https://github.com/egierdian"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    </section>
    `;
}

const bodyPortfolio = () => {
    var bodyPortfolio = document.getElementById('body-content');
    bodyPortfolio.innerHTML =
    `
    <section id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title display-5 diplay-name">Portfolio ☕</h1>
                            <p class="card-text">
                                A few simple exercises
                            </p>
                            <div class="all-portfolio">
                                <h4>All project's</h4>
                                <div class="row">
                                    <div class="col-md-4 col-sm-12 col-12">
                                        <div class="portfolio-card">
                                            <!-- <img class="card-img-top" src="images/images.png"> -->
                                            <div class="card-body">
                                                <h5>disawerin | Clone saweria</h5>
                                                <p class="card-text">
                                                    <span>HTML</span>
                                                    <span>CSS</span>
                                                    <span>Bootstrap 4</span>
                                                </p>
                                            </div>
                                            <div class="btn-view">
                                                <div class="portfolio-btn">
                                                    <a class="btn btn-dark" href="https://github.com/egierdian/disawerin"><i class="fab fa-github"></i></a>
                                                    <a class="btn btn-dark" href="#"><i class="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12 col-12">
                                        <div class="portfolio-card">
                                            <!-- <img class="card-img-top" src="images/images.png"> -->
                                            <div class="card-body">
                                                <h5>at-Bandung</h5>
                                                <p class="card-text">
                                                    <span>Vanilla JS</span> 
                                                    <span>Firebase</span>
                                                    <span>HTML</span>
                                                    <span>CSS</span>
                                                    <span>Bootstrap 4</span>
                                                </p>
                                            </div>
                                            <div class="btn-view">
                                                <div class="portfolio-btn">
                                                    <a class="btn btn-dark" href="https://github.com/egierdian/at-bandung"><i class="fab fa-github"></i></a>
                                                    <a class="btn btn-dark" href="https://at-bandung.web.app"><i class="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12 col-12">
                                        <div class="portfolio-card">
                                            <!-- <img class="card-img-top" src="images/images.png"> -->
                                            <div class="card-body">
                                                <h5>Al-Quran-Ku (PWA)</h5>
                                                <p class="card-text">
                                                    <span>Vanilla JS</span> 
                                                    <span>Firebase</span>
                                                    <span>HTML</span>
                                                    <span>CSS</span>
                                                    <span>PWA</span>
                                                    <span>Materiallize</span>
                                                </p>
                                            </div>
                                            <div class="btn-view">
                                                <div class="portfolio-btn">
                                                    <a class="btn btn-dark" href="https://github.com/egierdian/pwa-alquran-ku"><i class="fab fa-github"></i></a>
                                                    <a class="btn btn-dark" href="https://al-quran-ku.web.app"><i class="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12 col-12">
                                        <div class="portfolio-card">
                                            <!-- <img class="card-img-top" src="images/images.png"> -->
                                            <div class="card-body">
                                                <h5>E-Loker</h5>
                                                <p class="card-text">
                                                    <span>Vanilla JS</span> 
                                                    <span>Firebase</span>
                                                    <span>HTML</span>
                                                    <span>CSS</span>
                                                    <span>Bootstrap 4</span>
                                                </p>
                                            </div>
                                            <div class="btn-view">
                                                <div class="portfolio-btn">
                                                    <a class="btn btn-dark" href="https://github.com/egierdian/e-loker"><i class="fab fa-github"></i></a>
                                                    <a class="btn btn-dark" href="https://e-loker.web.app/"><i class="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12 col-12">
                                        <div class="portfolio-card">
                                            <!-- <img class="card-img-top" src="images/images.png"> -->
                                            <div class="card-body">
                                                <h5>e-Covid</h5>
                                                <p class="card-text">
                                                    <span>Vanilla JS</span> 
                                                    <span>Firebase</span>
                                                    <span>HTML</span>
                                                    <span>CSS</span>
                                                    <span>Bootstrap 4</span>
                                                </p>
                                            </div>
                                            <div class="btn-view">
                                                <div class="portfolio-btn">
                                                    <a class="btn btn-dark" href="https://github.com/egierdian/web-covid-19"><i class="fab fa-github"></i></a>
                                                    <a class="btn btn-dark" href="https://informasi-covid19.web.app/"><i class="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12 col-12">
                                        <div class="portfolio-card">
                                            <!-- <img class="card-img-top" src="images/images.png"> -->
                                            <div class="card-body">
                                                <h5>Olives Bakery</h5>
                                                <p class="card-text">
                                                    <span>Vanilla JS</span> 
                                                    <span>Firebase</span>
                                                    <span>HTML</span>
                                                    <span>CSS</span>
                                                    <span>Materiallize</span>
                                                </p>
                                            </div>
                                            <div class="btn-view">
                                                <div class="portfolio-btn">
                                                    <a class="btn btn-dark" href="#"><i class="fab fa-github"></i></a>
                                                    <a class="btn btn-dark" href="https://olivesbakery.com"><i class="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12 col-12">
                                        <div class="portfolio-card">
                                            <!-- <img class="card-img-top" src="images/images.png"> -->
                                            <div class="card-body">
                                                <h5>Penjualan Buku</h5>
                                                <p class="card-text">
                                                    <span>Java</span> 
                                                    <span>MySQL</span>
                                                </p>
                                            </div>
                                            <div class="btn-view">
                                                <div class="portfolio-btn">
                                                    <a class="btn btn-dark" href="https://github.com/egierdian/Tokobuku"><i class="fab fa-github"></i></a>
                                                    <a class="btn btn-dark" href="#"><i class="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </section>
    `;
}