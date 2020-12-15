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
                            <div class="front-end-card">
                                <h4>Front End</h4>
                                <div class="row">
                                    <div class="col-md-3 col-sm-6 col-12">
                                        <div class="custom-card bg-primary">
                                            <p class="card-text text-white">
                                                HTML
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-12">
                                        <div class="custom-card bg-primary">
                                            <p class="card-text text-white">
                                                CSS
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-12">
                                        <div class="custom-card bg-primary">
                                            <p class="card-text text-white">
                                                Bootstrap 4
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-12">
                                        <div class="custom-card bg-primary">
                                            <p class="card-text text-white">
                                                Materiallize
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
    <section id="home">
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3 col-sm-12 col-12 mb-4">
                            <img src="images/Profil.jpg" class="img-fluid">
                        </div>
                        <div class="offset-md-1 col-md-8 col-sm-12 col-12 mb-4">
                            <h3 class="mb-3">
                                <span class="badge badge-success">Hello</span>
                            </h3>
                            <h2 class="card-title display-5 diplay-name">i'm <strong>Egi Erdian</strong></h2>
                                        
                            <p class="card-text">
                                    My full name is Egi Erdian, people used to call me Egi or Erdian. I am 23 years old, and currently I live in cimahi. 
                                    I graduated from Vocational High School at SMK TI Pembangunan Cimahi with a major in software engineering. Currently I am continuing my education at Sekolah Tinggi Teknologi Bandung, majoring in computer science.  
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div class="social-media">
                <ul>
                    <li><a class="btn btn-dark" href="https://twitter.com/ErdianEGI"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li><a class="btn btn-dark" href="https://fb.com/egi3rdian"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li><a class="btn btn-dark" href="https://www.linkedin.com/in/egi-erdian-21a35a196/"><i class="fa fa-linkedin"></i></a>
                    </li>
                    <li><a class="btn btn-dark" href="https://github.com/egierdian"><i class="fa fa-github"></i></a>
                    </li>
                </ul>
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
                                                    <a class="btn btn-dark" href="https://github.com/egierdian/disawerin"><i class="fa fa-github"></i></a>
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
                                                    <a class="btn btn-dark" href="https://github.com/egierdian/at-bandung"><i class="fa fa-github"></i></a>
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
                                                    <a class="btn btn-dark" href="https://github.com/egierdian/pwa-alquran-ku"><i class="fa fa-github"></i></a>
                                                    <a class="btn btn-dark" href="https://al-quran-ku.web.app"><i class="fa fa-eye"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12 col-12">
                                        <div class="portfolio-card">
                                            <!-- <img class="card-img-top" src="images/images.png"> -->
                                            <div class="card-body">
                                                <h5>Informasi Covid</h5>
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
                                                    <a class="btn btn-dark" href="https://github.com/egierdian/web-covid-19"><i class="fa fa-github"></i></a>
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
                                                    <a class="btn btn-dark" href="#"><i class="fa fa-github"></i></a>
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
                                                    <a class="btn btn-dark" href="https://github.com/egierdian/Tokobuku"><i class="fa fa-github"></i></a>
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