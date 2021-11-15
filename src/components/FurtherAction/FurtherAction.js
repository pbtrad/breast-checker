import React from 'react'

function Check_complete() {
    return (
      <div class="container">
        {/* Important information */}
        <h1 class="text-center my-5">Further Action</h1>
        <div class="important-information-container">
          <p>You should seek medical advise if you notice any of the following:</p>
          <ul>
            <li>a new lump or area of thickened tissue in either breast that was not there before</li>
            <li>a change in the size or shape of one or both breasts</li>
            <li>bloodstained discharge from either of your nipples</li>
            <li>a lump or swelling in either of your armpits</li>
            <li>dimpling on the skin of your breasts</li>
            <li>a rash on or around your nipple</li>
            <li>a change in the appearance of your nipple, such as becoming sunken into your breast</li>
          </ul>
        </div>
        <p class="text-center my-5">Please find links to external resources below for more information about breast cancer.
        </p>

        {/* Links to external resources */}
        <div class="container px-4 py-5" id="featured-3">
          <h2 class="pb-2 border-bottom text-center">External Links</h2>
          {/* Links to external healthcare advice */}
          <h3 class="text-center text-decoration-underline p-5 pb-2">Heathcare Advice</h3>
          <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="feature col">
              <div class="feature-icon">
                <img src="assets/images/american-cancer-society-logo-small.png"
                  alt="Image of the American Cancer Society Logo" aria-hidden="true" />
              </div>
              <h2>American Cancer Society</h2>
              <p>The American Cancer Society is a community-based voluntary health organization dedicated to eliminating
                cancer as a major health problem.</p>
              <a href="https://www.cancer.org/cancer/breast-cancer.html" target="_blank" rel="noopener noreferrer"
                aria-describedby="Opens an external site in a new window">
                Link to website <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div class="feature col">
              <div class="feature-icon">
                <img src="assets/images/nhs-logo-small.png" alt="Image of the UK's Health Service (the NHS) Logo"
                  aria-hidden="true" />
              </div>
              <h2>NHS UK</h2>
              <p>The National Health Service is the publicly funded healthcare system of the United Kingdom.</p>
              <a href="https://www.nhs.uk/conditions/breast-cancer/" target="_blank" rel="noopener noreferrer"
                aria-describedby="Opens an external site in a new window">
                Link to website <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div class="feature col ">
              <div class="feature-icon">
                <img src="assets/images/hse-logo-small.png" alt="Image of Ireland's Health Service (the HSE) Logo"
                  aria-hidden="true" />
              </div>
              <h2>HSE Ireland</h2>
              <p>The HSE provides all of Ireland's public health services in hospitals and communities across the country.
              </p>
              <a href="https://www2.hse.ie/conditions/breast-cancer-women/" target="_blank" rel="noopener noreferrer"
                aria-describedby="Opens an external site in a new window">
                Link to website <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
          {/* Links to external charities */}
          <h3 class="text-center text-decoration-underline pb-2">Charities</h3>
          <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="feature col">
              <h2>Breast Cancer Research Foundation</h2>
              <p>The Breast Cancer Research Foundation provides critical funding for cancer research worldwide to fuel
                advances in tumor biology, genetics, prevention, treatment, metastasis, and survivorship.</p>
              <a href="https://www.bcrf.org/" target="_blank" rel="noopener noreferrer"
                aria-describedby="Opens an external site in a new window">
                Link to website <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div class="feature col">
              <h2>Breast Cancer UK</h2>
              <p>Breast Cancer UK is dedicated to the prevention of breast cancer and providing practical advice on how
                people can reduce their risk of getting breast cancer through making simple changes in their lives.</p>
              <a href="https://www.breastcanceruk.org.uk/" target="_blank" rel="noopener noreferrer"
                aria-describedby="Opens an external site in a new window">
                Link to website <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div class="feature col ">
              <h2>Breast Cancer Ireland</h2>
              <p>Breast Cancer Ireland raises funding to support pioneering research programmes and promote education and
                awareness on the importance of good breast health amongst women of all ages.
              </p>
              <a href="https://www.breastcancerireland.com/" target="_blank" rel="noopener noreferrer"
                aria-describedby="Opens an external site in a new window">
                Link to website <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Check_complete;