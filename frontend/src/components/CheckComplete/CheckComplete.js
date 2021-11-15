import React from 'react'

function Check_complete() {
    return (
      <div class="container">
       {/* Welcome message */}
      <h1 class="text-center my-5">Self examination tutorial complete!</h1>
      <p class="text-center my-5">Well done on completing the self examination tutorial!
        <br /><br />
        We advocate for regular checks as it is important to know what is normal for you, so that if any unusual change
        occurs, you will recognise it.
        <br /><br />
        If you have any concerns following your self examination we recommend you seek
        professional medical advice.
        <br /><br />
        Please see the <strong>Further Action</strong> section on the link below for more information and links to
        external resources.
      </p>
  
      {/* Further Action */}
      <div class="text-center">
        <a class="btn text-center border px-4 m-2" href="furtheraction">
          Further Action</a>
        {/* Tutorial */}
        <a class="btn text-center border px-4 m-2" href="#">
          Repeat the Tutorial
          </a>
        {/* Profile */}
        <a class="btn text-center border px-4 m-2" href="profile.html">
          Profile</a>
      </div>
    </div>
    )
}

export default Check_complete;