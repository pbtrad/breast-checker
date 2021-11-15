import React from 'react'

function Guide() {
    return (
      <div class="container">
    {/* Welcome message */}
    <h1 class="text-center">BREAST CHECK GUIDE</h1>

    <div id="step1" class="mb-5">
      {/* Step 1 grid */}
      <div class="row">
        <h2 class="col-10 offset-2 pb-3">Step 1:</h2>
        <div class="img-container col-4 offset-2">
          <img src="assets/images/exam-images/step-1.png" alt="" />
        </div>
        <div class="col-4 text-btn">
          <p class="instructions">
                In front of a mirror look at both of your breasts and inspect them for anything out of the ordinary.
                This could include nipple retraction, redness, puckering, dimpling or scaling of the skin. If you have
                any nipple discharge this should be reported to your doctor, noting down the colour, which breast it
                came from and whether it came from one or more openings.
            </p>
          {/* Link to next step */}
          <div class="next row mb-0">
            <a class="btn text-center border col-1 offset-9 px-4" href="#step2">Next</a>
          </div>
        </div>
      </div>
    </div>

    <div id="step2" class="my-5">
      {/* Step 2 grid */}
      <div class="row">
        <h2 class="col-10 offset-2 pb-3">Step 2:</h2>
        <div class="img-container col-4 offset-2">
          <img src="assets/images/exam-images/step-2.png" alt="" />
        </div>
        <div class="col-4 text-btn">
          <p class="instructions">For the next step we will be examining the underside of your breasts. Whilst looking in the mirror,
                raise your arms and rest your hands behind your head.</p>
          {/* Link to next step */}
          <div class="row next">
            <a class="btn text-center border col-1 offset-9 px-4" href="#step3">Next</a>
          </div>
        </div>
      </div>
    </div>

    <div id="step3" class="my-5">
      {/* Step 3 grid */}
      <div class="row">
        <h2 class="col-10 offset-2 pb-3">Step 3:</h2>
        <div class="img-container col-4 offset-2">
          <img src="assets/images/exam-images/step-3.png" alt="" />
        </div>
        <div class="col-4 text-btn">
          <p class="instructions">Next, place your left hand on your waist, roll your shoulder forward and reach into your underarm area
                and check for enlarged lymph nodes (small glands that fill with fluid when you have an infection). An
                enlarged node would feel like a corn kernel or a bean. Also check the area above and below the collar
                bone. Repeat on the right side.</p>
          {/* Link to next step */}
          <div class="row next">
            <a class="btn text-center border col-1 offset-9 px-4" href="#step4">Next</a>
          </div>
        </div>
      </div>
    </div>

    <div id="step4" class="my-5">
      {/* Step 3 grid */}
      <div class="row">
        <h2 class="col-10 offset-2 pb-3">Step 4:</h2>
        <div class="img-container col-4 offset-2">
          
        </div>
        <div class="col-4 text-btn">
          <p class="instructions">Raise your left arm. Use the pads of three or four fingers of your right hand to examine your left
                breast. Use three levels of pressure (light, medium and firm) while moving in a circular motion. Check
                your breast area using a set pattern. You can choose (1) lines, (2) circles and wedges.</p>
          {/* Link to next step */}
          <div class="row next">
            <a class="btn text-center border col-1 offset-9 px-4" href="#step5">Next</a>
          </div>
        </div>
      </div>
    </div>

    <div id="step5" class="my-5">
      {/* Step 3 grid */}
      <div class="row">
        <h2 class="col-10 offset-2 pb-3">Step 5:</h2>
        <div class="img-container col-4 offset-2">
        <img src="assets/images/exam-images/step-4.png" alt="" />
        </div>
        <div class="col-4 text-btn">
          <p class="instructions"><strong>Lines</strong> - Beginning at the outer edge of your breast, move your fingers downward using a circular motion until
                they are below the breast. Then move your fingers slightly toward the middle and slowly move back up</p>
          {/* Link to next step */}
          <div class="row next">
            <a class="btn text-center border col-1 offset-9 px-4" href="#step6">Next</a>
          </div>
        </div>
      </div>
    </div>

    <div id="step6" class="my-5">
      {/* Step 3 grid */}
      <div class="row">
        <h2 class="col-10 offset-2 pb-3">Step 6:</h2>
        <div class="img-container col-4 offset-2">
        <img src="assets/images/exam-images/step-5.png" alt="" />
        </div>
        <div class="col-4 text-btn">
          <p class="instructions"><strong>Circles</strong> - Beginning at the outer edge of your breast, use the flat part of your
                fingers, moving in circles slowly around the breast. Gradually make smaller and smaller circles toward
                the nipple. Be sure to check behind the nipple.
                <br /><br />
                <strong>Wedges</strong> - Starting at the outer edge of the breast, move your fingers toward the
                nipple and back to the edge.</p>
          {/* Link to next step */}
          <div class="row next">
            <a class="btn text-center border col-1 offset-9 px-4" href="#step7">Next</a>
          </div>
        </div>
      </div>
    </div>

    <div id="step7" class="my-5">
      {/* Step 3 grid */}
      <div class="row">
        <h2 class="col-10 offset-2 pb-3">Step 7:</h2>
        <div class="img-container col-4 offset-2">
        <img src="assets/images/exam-images/step-7.png" alt="" />
        </div>
        <div class="col-4 text-btn">
          <p class="instructions">Lie flat on your back with your left arm over your head and a pillow or folded towel under your left
                shoulder. This position flattens the breast and makes it easier to examine. Use the same motions
                described in <strong>step 4</strong></p>
          {/* Link to next step */}
          <div class="row next">
          <a class="btn text-center border col-1 offset-9 px-4" href="checkcomplete">Finish</a>
          </div>
        </div>
      </div>
    </div>


  </div>
    )
}

export default Guide;